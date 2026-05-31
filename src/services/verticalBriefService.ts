import { analyze } from "../analyze.js";
import { sampleVendorProofGapMonitor } from "../data/sampleVerticalBrief.js";

const report = analyze(sampleVendorProofGapMonitor, { now: "2026-05-31T23:59:00Z" });

export function summary() {
  const highFindings = report.findingsList.filter((item) => item.severity === "high").length;
  return {
    items: report.items,
    averageClaimCoverage: report.averageClaimCoverage,
    averageProofFreshness: report.averageProofFreshness,
    averageEvidenceDepth: report.averageEvidenceDepth,
    averageBenchmarkConfidence: report.averageBenchmarkConfidence,
    averageReuseSafety: report.averageReuseSafety,
    reusableProofPacks: report.reusableProofPacks,
    blockedProofTracks: report.blockedProofTracks,
    averageReviewCycleDays: report.averageReviewCycleDays,
    hoursRecoveredPerQuarter: report.hoursRecoveredPerQuarter,
    highFindings,
    recommendation:
      "Standardize AI and identity proof rooms first, refresh revenue and FinTech evidence next, and unblock public-sector ownership before the next diligence cycle."
  };
}

export function proofLane() {
  return sampleVendorProofGapMonitor.map((item) => ({
    owner: item.owner,
    audience: item.audience,
    proofStage: item.proofStage,
    proofState: item.proofState,
    proofTheme: item.proofTheme,
    operatingQuestion: item.operatingQuestion,
    headlineGap: item.headlineGap,
    nextMove: item.nextMove
  }));
}

export function gapMatrix() {
  return sampleVendorProofGapMonitor.map((item) => ({
    owner: item.owner,
    audience: item.audience,
    proofTheme: item.proofTheme,
    claimCoverageScore: item.claimCoverageScore,
    proofFreshnessScore: item.proofFreshnessScore,
    evidenceDepthScore: item.evidenceDepthScore,
    currentProofPack: item.currentProofPack,
    companyTags: item.companyTags
  }));
}

export function reusePosture() {
  return sampleVendorProofGapMonitor.map((item) => ({
    audience: item.audience,
    owner: item.owner,
    reuseSafetyScore: item.reuseSafetyScore,
    benchmarkConfidenceScore: item.benchmarkConfidenceScore,
    reviewCycleDays: item.reviewCycleDays,
    boardStory: item.boardStory,
    companyTags: item.companyTags,
    relatedSurfaces: item.relatedSurfaces,
    requiredClaims: item.requiredClaims
  }));
}

export function riskMap() {
  const order = { high: 0, medium: 1, low: 2, info: 3 } as const;
  return [...report.findingsList].sort((a, b) => order[a.severity] - order[b.severity] || a.code.localeCompare(b.code));
}

export function verification() {
  return [
    "Synthetic proof data only - no live board packets, diligence rooms, or private enterprise documents are included.",
    "Coverage, freshness, depth, benchmark confidence, reuse safety, and review-cycle metrics are modeled from the sample proof set in this repo.",
    "This surface is read-only and designed to show how Kinetic Gain can score reusable proof strength as an executive product.",
    "Company tags and related surfaces are synthetic proof-design aids rather than audited references.",
    "Every route and packet is reproducible from the included sample export."
  ];
}

export function payload() {
  return {
    generatedAt: report.generatedAt,
    summary: summary(),
    proofLane: proofLane(),
    gapMatrix: gapMatrix(),
    reusePosture: reusePosture(),
    riskMap: riskMap(),
    verification: verification(),
    sample: sampleVendorProofGapMonitor
  };
}
