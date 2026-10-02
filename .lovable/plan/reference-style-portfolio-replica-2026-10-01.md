# Reference-style Portfolio Replica

## Goal
Replace the project-grid portfolio with a close single-page replica of the supplied reference, while retaining Arjun Mehta’s current developer profile information.

## Changes
- Recreate the slim top navigation, fixed left profile rail, active Portfolio tab, and full-height dark artwork canvas.
- Use the portfolio artwork from the referenced site as the main visual, stored locally in the project rather than hotlinked.
- Remove all mock project cards, project descriptions, and the large introductory section.
- Keep the generated Arjun portrait, developer role, Bengaluru location, availability, and contact details.
- Adapt the layout for mobile with a compact profile header and edge-to-edge artwork.
- Preserve accessible labels and route-specific metadata.

## Technical notes
- Keep the experience on the existing home route with no backend or persistence.
- Continue using semantic global color tokens.
- Verify the result at desktop and mobile sizes and confirm a clean build.
