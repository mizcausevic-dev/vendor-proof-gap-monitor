import { mkdirSync, writeFileSync } from "node:fs";
import { toExport } from "../src/analyze.js";
import { sampleVendorProofGapMonitor } from "../src/data/sampleVerticalBrief.js";

const clean = sampleVendorProofGapMonitor.map((item) => ({
  ...item,
  proofState: "REUSABLE" as const,
  proofStage: "READY_TO_REUSE" as const,
  claimCoverageScore: Math.max(item.claimCoverageScore, 90),
  proofFreshnessScore: Math.max(item.proofFreshnessScore, 88),
  evidenceDepthScore: Math.max(item.evidenceDepthScore, 86),
  benchmarkConfidenceScore: Math.max(item.benchmarkConfidenceScore, 82),
  reuseSafetyScore: Math.max(item.reuseSafetyScore, 86),
  reviewCycleDays: Math.min(item.reviewCycleDays, 4)
}));

mkdirSync("fixtures", { recursive: true });
writeFileSync("fixtures/vendor-proof-gap-monitor.json", JSON.stringify(toExport(sampleVendorProofGapMonitor), null, 2));
writeFileSync("fixtures/vendor-proof-gap-monitor-clean.json", JSON.stringify(toExport(clean), null, 2));
