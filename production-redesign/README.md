# Gridwerk — complete production design

Published 2026-11-16, Netlify deploy 6afaeaea16161972906d244c.
Live: https://remarkable-kleicha-c89014.netlify.app/

## Deployable release
Use ../releases/gridwerk-complete-20261116.zip. Extract and manually upload the full folder to existing Netlify project remarkable-kleicha-c89014. No build required. This supersedes gridwerk-redesign-20261116.zip. All production binaries, fonts, notices and imagery are in the archive. Do not rebuild the old repository-root React source to deploy this site.

## Scope
Homepage and all Gridwerk internal detail views now share typography, dark/light themes, imagery, navigation and responsive controls: SilaGuard, LEVELMIGHT, contact/support, imprint, studio privacy, expanded studio privacy and SilaGuard document tabs. Existing runtime content and all SilaGuard document constants were preserved byte for byte. The prior misleading Play Store-to-imprint button now accurately links to support. Existing root document hashes redirect into the new design. Email/phone actions and TXT downloads are exposed. Copy success is shown after a resolved clipboard write, with fallback/error reporting.

The shared UI/styles are editable here; the complete release contains patched runtime assets details-85c365cf8655.js (preserved compiled React components). External www.levelmight.de legal pages were linked as before, not redesigned as part of this Gridwerk task.

## Checks
- Existing document constants byte-identical; all static asset references resolve locally.
- Live desktop views and light/dark reviewed.
- At 320px frame width, all six internal views had scrollWidth equal clientWidth (305px after scrollbar).
- 390px document tabs reviewed visually; no horizontal overflow.
- Feature expand/collapse, studio privacy expansion, document tabs and closing tested.
- Copy confirmation observed; original clipboard integration reported no app errors.
- TXT download completed in browser and static download URLs checked for all three tabs.
- Legacy /#agb-silaguard redirects to working AGB view.
- SilaGuard and LEVELMIGHT contents retained. No Google Play submission.

Original compiled files and previous release ZIPs remain for rollback. This is a design/navigation update, not a legal audit.
