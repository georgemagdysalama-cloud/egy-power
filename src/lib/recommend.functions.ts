import { createServerFn } from "@tanstack/react-start";
import type { Lang } from "@/i18n/translations";
import type { ProductFinderResult } from "./recommend.server";

export type ProductFinderResponse =
  | { ok: true; summary: string; recommendations: { key: string; reason: string }[] }
  | { ok: false; error: string; retryable: boolean };

export const recommendProducts = createServerFn({ method: "POST" })
  .inputValidator((input: { description: string; lang: Lang }) => {
    const description = (input?.description ?? "").trim();
    const lang: Lang = input?.lang === "en" ? "en" : "ar";
    return { description: description.slice(0, 2000), lang };
  })
  .handler(async ({ data }): Promise<ProductFinderResponse> => {
    if (data.description.length < 5) {
      return {
        ok: false,
        error: "Please describe your needs in a little more detail.",
        retryable: false,
      };
    }

    const { recommendForNeeds } = await import("./recommend.server");
    const outcome = await recommendForNeeds(data.description, data.lang);
    if (!outcome.ok) {
      return { ok: false, error: outcome.error, retryable: outcome.retryable };
    }

    const parsed: ProductFinderResult = outcome.result;
    return {
      ok: true,
      summary: parsed.summary ?? "",
      recommendations: parsed.recommendations.map((r) => ({ key: r.key, reason: r.reason })),
    };
  });
