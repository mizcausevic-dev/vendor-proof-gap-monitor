# Vendor Proof Gap Monitor

Executive proof-gap surface for claim coverage, evidence freshness, benchmark confidence, and reuse safety across the Kinetic Gain executive-intelligence estate.

- Live: `https://proofgap.kineticgain.com/`
- Repo: `mizcausevic-dev/vendor-proof-gap-monitor`

## What it does
- maps proof packs to owners, audiences, blockers, and next moves
- keeps claim coverage, evidence freshness, benchmark confidence, and reuse safety in one lane
- separates reusable, refresh-needed, at-risk, and blocked proof rooms before the next board, investor, or buyer review
- exposes the same proof posture through HTML, JSON APIs, screenshots, and a reproducible CLI

## Routes
- `/`
- `/proof-lane`
- `/gap-matrix`
- `/reuse-posture`
- `/verification`
- `/docs`

## Local run
```powershell
cd vendor-proof-gap-monitor
npm install
npm run verify
npm run prerender
npm run render:assets
```

## CLI
```powershell
npx vendor-proof-gap-monitor fixtures/vendor-proof-gap-monitor.json --format summary
npx vendor-proof-gap-monitor fixtures/vendor-proof-gap-monitor-clean.json --format json
```

## Verification
- synthetic sample data only
- no live board packets, diligence rooms, or private enterprise proof artifacts
- all routes and packets are generated from the sample export in this repo
