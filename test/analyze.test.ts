import { describe, expect, it } from "vitest";
import { analyze } from "../src/analyze.js";
import { sampleVendorProofGapMonitor } from "../src/data/sampleVerticalBrief.js";

describe("analyze", () => {
  it("returns the expected item count", () => {
    const report = analyze(sampleVendorProofGapMonitor, { now: "2026-05-31T23:40:00Z" });
    expect(report.items).toBe(8);
  });

  it("computes positive proof metrics", () => {
    const report = analyze(sampleVendorProofGapMonitor, { now: "2026-05-31T23:40:00Z" });
    expect(report.averageClaimCoverage).toBeGreaterThan(0);
    expect(report.averageProofFreshness).toBeGreaterThan(0);
    expect(report.averageEvidenceDepth).toBeGreaterThan(0);
    expect(report.averageReuseSafety).toBeGreaterThan(0);
  });

  it("counts reusable and blocked proof packs", () => {
    const report = analyze(sampleVendorProofGapMonitor, { now: "2026-05-31T23:40:00Z" });
    expect(report.reusableProofPacks).toBeGreaterThanOrEqual(1);
    expect(report.blockedProofTracks).toBeGreaterThanOrEqual(0);
  });

  it("emits proof quality and ownership findings", () => {
    const report = analyze(sampleVendorProofGapMonitor, { now: "2026-05-31T23:40:00Z" });
    expect(report.findingsList.some((finding) => finding.code === "reusable-proof-pack")).toBe(true);
    expect(report.findingsList.some((finding) => ["stale-evidence", "thin-benchmark", "weak-board-story", "blocked-proof-owner"].includes(finding.code))).toBe(true);
  });

  it("rolls up recovered time", () => {
    const report = analyze(sampleVendorProofGapMonitor, { now: "2026-05-31T23:40:00Z" });
    expect(report.hoursRecoveredPerQuarter).toBeGreaterThan(0);
  });
});
