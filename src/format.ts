import type { ProofGapReport } from "./types.js";

export function toSummary(report: ProofGapReport) {
  return [
    `Proof packs: ${report.items}`,
    `Average claim coverage: ${report.averageClaimCoverage}`,
    `Average proof freshness: ${report.averageProofFreshness}`,
    `Average evidence depth: ${report.averageEvidenceDepth}`,
    `Average benchmark confidence: ${report.averageBenchmarkConfidence}`,
    `Average reuse safety: ${report.averageReuseSafety}`,
    `Reusable proof packs: ${report.reusableProofPacks}`,
    `Blocked proof tracks: ${report.blockedProofTracks}`,
    `Average review cycle days: ${report.averageReviewCycleDays}`,
    `Hours recovered per quarter: ${report.hoursRecoveredPerQuarter}`,
    `High findings: ${report.findingsList.filter((item) => item.severity === "high").length}`
  ].join("\n");
}
