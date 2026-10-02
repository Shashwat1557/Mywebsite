<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the portfolio as a single home-route experience with profile and project data colocated in the page module, because it is a focused personal showcase without backend state.
- MCP server lives in src/lib/mcp (tools read plain data from portfolio-data.ts) and is protected by Cloud OAuth with /login and /.lovable/oauth/consent routes, because external AI clients must sign in.
