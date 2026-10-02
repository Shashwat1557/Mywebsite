# Developer Portfolio Build

## Goal
Create a polished developer portfolio inspired by the reference’s persistent profile sidebar and large visual work area, while using original developer-focused content and styling.

## What I’ll build
- A fixed desktop profile sidebar with avatar treatment, availability, role, location, experience, contact actions, and profile navigation.
- A compact mobile header/profile summary that preserves the same identity and actions without crowding the screen.
- A responsive project grid with original mock projects, technology labels, concise summaries, and working project/detail interactions.
- A distinctive editorial-tech visual system using warm white, near-black, and signal orange, with subtle motion and strong typography.
- Route-specific page metadata for search and social previews.

## Interaction details
- Project cards reveal key details clearly and link to mock live/code destinations where appropriate.
- Contact and social actions use accessible labels and familiar icons.
- Navigation remains usable across desktop and mobile widths.
- Motion respects reduced-motion preferences.

## Technical notes
- Keep the experience on the home route and implement it with the existing TanStack Start structure.
- Define all visual colors as semantic tokens in the global stylesheet.
- Use local mock data only; no login, database, or external service is required.
- Verify the final page at desktop and mobile sizes and resolve any build or runtime errors.
