import type { Finding, ProofGapExport, ProofGapItem, ProofGapReport } from "./types.js";

function average(items: ProofGapItem[], pick: (item: ProofGapItem) => number) {
  return Math.round(items.reduce((sum, item) => sum + pick(item), 0) / items.length);
}

function evaluate(item: ProofGapItem): Finding[] {
  const findings: Finding[] = [];

  if (item.proofState === "REUSABLE" && item.claimCoverageScore >= 85 && item.reuseSafetyScore >= 82) {
    findings.push({
      code: "reusable-proof-pack",
      severity: "high",
      sector: item.sector,
      audience: item.audience,
      message: "This proof pack is strong enough to reuse across board, investor, and buyer reviews right now."
    });
  }

  if (item.proofFreshnessScore < 76 || item.reuseSafetyScore < 70) {
    findings.push({
      code: "stale-evidence",
      severity: item.proofFreshnessScore < 68 ? "high" : "medium",
      sector: item.sector,
      audience: item.audience,
      message: "The proof packet is getting stale, so leaders will keep re-asking for updated evidence or manual clarification."
    });
  }

  if (item.evidenceDepthScore < 75 || item.benchmarkConfidenceScore < 72) {
    findings.push({
      code: "thin-benchmark",
      severity: "medium",
      sector: item.sector,
      audience: item.audience,
      message: "The packet still lacks enough benchmark or depth context to feel investment-grade."
    });
  }

  if (item.claimCoverageScore < 78 || item.boardStory.length < 110) {
    findings.push({
      code: "weak-board-story",
      severity: item.claimCoverageScore < 70 ? "high" : "low",
      sector: item.sector,
      audience: item.audience,
      message: "The proof exists, but the board-level narrative is still too weak or fragmented to travel cleanly."
    });
  }

  if (item.proofState === "BLOCKED") {
    findings.push({
      code: "blocked-proof-owner",
      severity: "high",
      sector: item.sector,
      audience: item.audience,
      message: "This proof track is blocked by missing ownership or packaging, so the diligence path cannot move cleanly."
    });
  }

  return findings;
}

export function analyze(items: ProofGapItem[], options: { now?: string } = {}): ProofGapReport {
  const generatedAt = options.now ?? new Date().toISOString();
  const findingsList = items.flatMap((item) => evaluate(item));
  const reusableProofPacks = items.filter((item) => item.proofState === "REUSABLE").length;
  const blockedProofTracks = items.filter((item) => item.proofState === "BLOCKED").length;
  const averageReviewCycleDays = Number((items.reduce((sum, item) => sum + item.reviewCycleDays, 0) / items.length).toFixed(1));

  return {
    generatedAt,
    items: items.length,
    averageClaimCoverage: average(items, (item) => item.claimCoverageScore),
    averageProofFreshness: average(items, (item) => item.proofFreshnessScore),
    averageEvidenceDepth: average(items, (item) => item.evidenceDepthScore),
    averageBenchmarkConfidence: average(items, (item) => item.benchmarkConfidenceScore),
    averageReuseSafety: average(items, (item) => item.reuseSafetyScore),
    reusableProofPacks,
    blockedProofTracks,
    averageReviewCycleDays,
    hoursRecoveredPerQuarter: reusableProofPacks * 20 + items.filter((item) => item.reviewCycleDays > 7).length * 10,
    findingsList,
    ok: findingsList.filter((item) => item.severity === "high").length <= items.length
  };
}

export function toExport(items: ProofGapItem[], now?: string): ProofGapExport {
  return {
    generatedAt: now ?? new Date().toISOString(),
    items
  };
}
