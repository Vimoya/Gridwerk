# LEVELMIGHT website update — published 2026-11-16

Production: https://remarkable-kleicha-c89014.netlify.app/#levelmight
Netlify published deploy: 6afae46213bdde90456ed1be (12:09 UTC).
User explicitly authorized unlinking the Git repository and publishing live. Netlify repository linkage was removed; updates now use manual deploys. No Google Play submission was made.

## Exact deployed artifact
releases/gridwerk-levelmight-update.zip contains the corrected production bundle, including case-sensitive index.html asset references. It replaces the earlier preparation archive. The previous attempt 6afae42821780b7da833f0e1 was immediately superseded after detecting stale script references.

This archive is based on the actual August 4 Netlify production files, preserving the existing SilaGuard contents and handlers. The TSX files in this branch are reference implementation against an older public source checkout, not a fully synchronized copy of production. Do not deploy a fresh build of that old checkout without reconciling production first.

## Changes and verification
Added LEVELMIGHT feature overview, webapp link, Android-in-preparation status, health and AI estimate notices, server-side data/account-deletion explanation, and links to app privacy, terms, community rules, health notices, reporting, account deletion and imprint. Corrected generic studio privacy wording and removed external Google Fonts import. Existing SilaGuard contents preserved.

Verified published deployment status and production browser content, including new section and link destinations. Captured live screenshot. This is not a complete legal audit or a guarantee of Google Play acceptance.

Rollback: previous production deploy 6a716553488e0105df585373 remains in Netlify history.
