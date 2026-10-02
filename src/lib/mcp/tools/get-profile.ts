import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../portfolio-data";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Return Arjun's name, role, location, experience, availability and about text.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
    structuredContent: { profile: { ...profile, about: [...profile.about] } },
  }),
});
