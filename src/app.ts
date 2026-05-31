import express from "express";
import { renderDocs, renderGapMatrix, renderOverview, renderProofLane, renderSample, renderReusePosture, renderVerification } from "./services/render.js";
import { gapMatrix, payload, proofLane, reusePosture, riskMap, summary, verification } from "./services/verticalBriefService.js";

export function createApp() {
  const app = express();

  app.get("/", (_req, res) => res.type("html").send(renderOverview()));
  app.get("/proof-lane", (_req, res) => res.type("html").send(renderProofLane()));
  app.get("/gap-matrix", (_req, res) => res.type("html").send(renderGapMatrix()));
  app.get("/reuse-posture", (_req, res) => res.type("html").send(renderReusePosture()));
  app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
  app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

  app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
  app.get("/api/proof-lane", (_req, res) => res.json(proofLane()));
  app.get("/api/gap-matrix", (_req, res) => res.json(gapMatrix()));
  app.get("/api/reuse-posture", (_req, res) => res.json(reusePosture()));
  app.get("/api/risk-map", (_req, res) => res.json(riskMap()));
  app.get("/api/verification", (_req, res) => res.json(verification()));
  app.get("/api/sample", (_req, res) => res.json(payload().sample));
  app.get("/api/payload", (_req, res) => res.json(payload()));
  app.get("/sample.json", (_req, res) => res.type("json").send(renderSample()));

  return app;
}

export function startServer(port = Number(process.env.PORT ?? 3000)) {
  return createApp().listen(port, () => {
    console.log(`vendor-proof-gap-monitor listening on http://127.0.0.1:${port}`);
  });
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, "/")}`) {
  startServer();
}
