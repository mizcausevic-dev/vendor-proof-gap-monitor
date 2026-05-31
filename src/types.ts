export type ProofSector =
  | "AI_PLATFORM"
  | "CLOUD_IDENTITY"
  | "REVENUE_SYSTEMS"
  | "FINTECH"
  | "BIOTECH_DIAGNOSTICS"
  | "GOVTECH_PUBLIC_SECTOR"
  | "HEALTHTECH";

export type ProofStage = "COLLECTING" | "REVIEWING" | "READY_TO_REUSE" | "BLOCKED";

export type ProofState = "REUSABLE" | "NEEDS_REFRESH" | "AT_RISK" | "BLOCKED";

export interface ProofGapItem {
  id: string;
  owner: string;
  audience: string;
  sector: ProofSector;
  proofStage: ProofStage;
  proofState: ProofState;
  proofTheme: string;
  operatingQuestion: string;
  currentProofPack: string;
  headlineGap: string;
  claimCoverageScore: number;
  proofFreshnessScore: number;
  evidenceDepthScore: number;
  benchmarkConfidenceScore: number;
  reuseSafetyScore: number;
  reviewCycleDays: number;
  boardStory: string;
  nextMove: string;
  companyTags: string[];
  relatedSurfaces: string[];
  requiredClaims: string[];
}

export interface ProofGapExport {
  generatedAt: string;
  items: ProofGapItem[];
}

export type FindingCode =
  | "reusable-proof-pack"
  | "stale-evidence"
  | "thin-benchmark"
  | "weak-board-story"
  | "blocked-proof-owner";

export interface Finding {
  code: FindingCode;
  severity: "high" | "medium" | "low" | "info";
  sector: ProofSector;
  audience: string;
  message: string;
}

export interface ProofGapReport {
  generatedAt: string;
  items: number;
  averageClaimCoverage: number;
  averageProofFreshness: number;
  averageEvidenceDepth: number;
  averageBenchmarkConfidence: number;
  averageReuseSafety: number;
  reusableProofPacks: number;
  blockedProofTracks: number;
  averageReviewCycleDays: number;
  hoursRecoveredPerQuarter: number;
  findingsList: Finding[];
  ok: boolean;
}
