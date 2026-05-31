import { describe, expect, it } from "vitest";
import { gapMatrix, payload, proofLane, reusePosture, riskMap, summary, verification } from "./verticalBriefService.js";

describe("vendor proof gap service", () => {
  it("returns an executive summary", () => {
    expect(summary().items).toBeGreaterThan(0);
  });

  it("returns the proof lane", () => {
    expect(proofLane()[0]?.audience).toBeTruthy();
  });

  it("returns the gap matrix view", () => {
    expect(gapMatrix()[0]?.claimCoverageScore).toBeGreaterThan(0);
  });

  it("returns the reuse posture view", () => {
    expect(reusePosture()[0]?.reuseSafetyScore).toBeGreaterThan(0);
  });

  it("keeps the board story in the reuse posture", () => {
    expect(reusePosture()[0]?.boardStory).toBeTruthy();
  });

  it("returns the risk map", () => {
    expect(riskMap().length).toBeGreaterThan(0);
  });

  it("returns verification notes", () => {
    expect(verification().length).toBeGreaterThan(0);
    expect(payload().verification.length).toBeGreaterThan(0);
  });
});
