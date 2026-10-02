import { auth, defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listWork from "./tools/list-work";
import getContact from "./tools/get-contact";

const projectRef = import.meta.env["VITE_SUPABASE_PROJECT_ID"] ?? "project-ref-unset";

export default defineMcp({
  name: "dev-showcase",
  title: "Dev Showcase",
  version: "0.1.0",
  instructions:
    "Tools for Arjun Mehta's developer portfolio. Use `get_profile` for bio, `list_work` for work areas, and `get_contact` for contact links.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [getProfile, listWork, getContact],
});
