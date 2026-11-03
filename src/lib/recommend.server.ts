// Server-only AI helper for the product finder. Never import from client code.
import { createOpenAI } from "@ai-sdk/openai";
import { Output, streamText } from "ai";
import { z } from "zod";
import { translations, type Lang } from "@/i18n/translations";
import { createLovableAiGatewayRunIdFetch } from "./ai/run-id";

const GATEWAY_URL = "https://ai.gateway.lovable.dev/v1";
const MODEL = "openai/gpt-6-astra";

const CATALOG_KEYS = [
  "conduit",
  "flexible",
  "cables",
  "boxes",
  "accessories",
  "pvc",
  "tray",
  "panels",
  "earthing",
] as const;

const resultSchema = z.object({
  summary: z.string(),
  recommendations: z
    .array(
      z
        .object({
          key: z.enum(CATALOG_KEYS),
          reason: z.string(),
        })
        .strict(),
    )
    .max(4),
});

export type ProductFinderResult = {
  summary: string;
  recommendations: { key: (typeof CATALOG_KEYS)[number]; reason: string }[];
};

function buildCatalogText(lang: Lang) {
  return translations[lang].products
    .map((p) => `- ${p.key}: ${p.title} — ${p.desc}`)
    .join("\n");
}

function buildSystemPrompt(lang: Lang) {
  const catalog = buildCatalogText("ar") + "\n\n[English catalog]\n" + buildCatalogText("en");
  const languageNote =
    lang === "ar"
      ? "اكتب السبب والملخص بالعربية الفصحى المبسطة."
      : "Write the reason and summary in clear English.";
  return `You are the product advisor for Egy Power, an Egyptian supplier of electrical materials (conduits, flexible tubing, wires & cables, junction boxes & breakers, electrical accessories, PVC conduits, cable tray, metal distribution panels, earthing systems) for contractors and projects.

The customer will describe what they need in free text (often Arabic, sometimes English or a mix). Match their need to the most relevant categories of Egy Power's catalog below. Recommend at most 4 categories, most relevant first. Only recommend a category when it clearly fits the need; if the description is too vague or matches nothing, return an empty list and explain in the summary what extra detail would help.

Catalog keys with their Arabic and English titles/descriptions:
${catalog}

Rules:
- Use only catalog keys exactly as listed.
- Write each reason as one short sentence (max 25 words) explaining why this category fits what the customer described, mentioning the specific items they asked for when possible.
- Keep the summary under 40 words.
- ${languageNote}
- Reply with JSON matching the schema only.`;
}

export async function recommendForNeeds(
  description: string,
  lang: Lang,
): Promise<{ ok: true; result: ProductFinderResult } | { ok: false; error: string; retryable: boolean }> {
  const apiKey = process.env.LOVABLE_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      error: "AI is not configured yet. Please try again later.",
      retryable: false,
    };
  }

  const runIdFetch = createLovableAiGatewayRunIdFetch();
  const provider = createOpenAI({
    baseURL: GATEWAY_URL,
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: runIdFetch.fetch,
  });

  try {
    const result = streamText({
      model: provider.responses(MODEL),
      instructions: buildSystemPrompt(lang),
      messages: [{ role: "user", content: description.slice(0, 2000) }],
      maxOutputTokens: 2000,
      maxRetries: 0,
      output: Output.object({ schema: resultSchema }),
      providerOptions: {
        openai: {
          store: false,
          forceReasoning: true,
          reasoningEffort: "low",
          reasoningSummary: "auto",
          include: ["reasoning.encrypted_content"],
        },
      },
    });

    const parsed = await result.output;
    if (!parsed || !Array.isArray(parsed.recommendations)) {
      return { ok: false, error: "The advisor could not process that. Please try rephrasing.", retryable: true };
    }
    return { ok: true, result: parsed };
  } catch (error) {
    const status = (error as { statusCode?: number }).statusCode;
    const message = ((error as { message?: string }).message ?? "").slice(0, 200);
    console.error("product-finder AI call failed", status, message);
    if (status === 402) {
      return {
        ok: false,
        error: "AI credits are exhausted for now. Please contact us on WhatsApp meanwhile.",
        retryable: false,
      };
    }
    if (status === 429) {
      return { ok: false, error: "Too many requests right now. Please try again in a minute.", retryable: true };
    }
    return { ok: false, error: "The advisor is unavailable right now. Please try again later.", retryable: false };
  }
}
