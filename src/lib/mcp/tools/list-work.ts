import { defineTool } from "@lovable.dev/mcp-js";
import { workAreas } from "../portfolio-data";

export default defineTool({
  name: "list_work",
  title: "List work",
  description: "List the work areas shown in the portfolio's Work section.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: workAreas.map((w) => `${w.title} — ${w.detail}`).join("\n") }],
    structuredContent: { work: workAreas.map(({ title, detail }) => ({ title, detail })) },
  }),
});
