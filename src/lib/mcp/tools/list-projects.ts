import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { translations } from "@/i18n/translations";

export default defineTool({
  name: "list_projects",
  title: "List reference projects",
  description:
    "List notable projects Egy Power has supplied electrical materials to across Egypt, with a short description of each.",
  inputSchema: {
    language: z
      .enum(["ar", "en"])
      .describe("Language of the returned content: 'ar' for Arabic, 'en' for English."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ language }) => {
    const projects = translations[language].projects.map((p) => ({
      key: p.key,
      title: p.title,
      description: p.desc,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
      structuredContent: { projects },
    };
  },
});