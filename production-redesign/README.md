# Gridwerk production redesign

Published 2026-11-16: https://remarkable-kleicha-c89014.netlify.app/
Netlify deploy: 6afae8575b0f2a68a37f9b87.

The complete deployable static website, images, self-hosted Open Sans fonts and preserved original production bundles are in ../releases/gridwerk-redesign-20261116.zip. Extract its contents and upload the entire folder to the existing Netlify project. No build is needed. The text files here mirror the editable redesigned homepage; all image/font binaries are in the ZIP.

The old website is preserved in app-details.html with a home backlink; SilaGuard feature expansion and original legal documents remain functional. Homepage card links target #apps for SilaGuard and #levelmight for LEVELMIGHT. Existing root legal hashes redirect to original detail pages. React/source checkout at repository root is older than production: do not build it to replace this archive.

Verified live desktop appearance, loaded images, light/dark toggle, 320/390px no horizontal overflow, mobile menu keyboard open/close, and retained SilaGuard feature expansion. responsive-preview.html is a noindex mobile layout inspection frame. No Play Console submission was made.

Images regenerated from the approved mockup as separate production assets and compressed to WebP; typography uses bundled Open Sans and Open Sans Condensed. Homepage contains no external font request. Theme preference uses localStorage.
