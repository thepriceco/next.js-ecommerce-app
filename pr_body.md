## Summary
Adds a staging branch and the scanner-enrichment work (serverless scan endpoint + worker + scanner helpers + prisma schema patch). Prepares repo for staging workflow and Sonnet automation.

## Files added (high level)
- api/scan.js — serverless API endpoint to queue enrichment jobs
- workers/enrichProduct.js — enrichment worker (UPC/Amazon/Walmart lookups, image ingestion to R2)
- lib/scanner/index.js — helper functions (UPC lookup, image download + upload)
- prisma/patch_add_scanner_fields.prisma — schema additions
- README.SCANNER.md — env and operator instructions

## Acceptance criteria (staging)
1. Deploy to Vercel staging `wibargain-staging` from branch `feature/duplicate-staging`.
2. PlanetScale staging branch used for DATABASE_URL.
3. Cloudflare R2 staging bucket exists and images saved there.
4. POST /api/scan returns 202 and product rows are created in staging DB.
5. Images uploaded to R2 with URLs saved in product records.

## Notes
Attach screenshot for reviewer: Screenshot 2025-11-23 at 5.08.02 AM.png

## Secrets (do not commit)
- DATABASE_URL (PlanetScale staging)
- R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY / R2_BUCKET
- AMAZON_PA_*, WALMART_API_KEY, UPCITEMDB_KEY
