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

- Keep the TanStack Start v1 routing and Tailwind v4 pipeline provided by this Lovable project; swapping framework versions breaks its preview infrastructure.
- Keep homepage copy, option lists and labels in `src/data/site.ts`, with each visible homepage block in `src/sections/<Name>`; this makes section-level content changes localized.
- Contact requests use a configured mailto destination via `VITE_CONTACT_EMAIL` until a delivery service is explicitly requested; do not imply the message is stored or sent automatically.
