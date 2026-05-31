import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import request from "supertest";
import { createApp } from "../src/app.js";

async function run() {
  const app = createApp();
  const root = "site";
  mkdirSync(root, { recursive: true });

  const pages = [
    ["/", "index.html"],
    ["/proof-lane", "proof-lane/index.html"],
    ["/gap-matrix", "gap-matrix/index.html"],
    ["/reuse-posture", "reuse-posture/index.html"],
    ["/verification", "verification/index.html"],
    ["/docs", "docs/index.html"]
  ];

  for (const [route, output] of pages) {
    const response = await request(app).get(route);
    const target = path.join(root, output);
    mkdirSync(path.dirname(target), { recursive: true });
    writeFileSync(target, response.text);
  }

  writeFileSync(path.join(root, "robots.txt"), "User-agent: *\nAllow: /\nSitemap: https://proofgap.kineticgain.com/sitemap.xml\n");
  writeFileSync(
    path.join(root, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://proofgap.kineticgain.com/</loc></url><url><loc>https://proofgap.kineticgain.com/proof-lane/</loc></url><url><loc>https://proofgap.kineticgain.com/gap-matrix/</loc></url><url><loc>https://proofgap.kineticgain.com/reuse-posture/</loc></url><url><loc>https://proofgap.kineticgain.com/verification/</loc></url><url><loc>https://proofgap.kineticgain.com/docs/</loc></url></urlset>`
  );

  const apis = [
    ["/api/dashboard/summary", "dashboard-summary.json"],
    ["/api/proof-lane", "proof-lane.json"],
    ["/api/gap-matrix", "gap-matrix.json"],
    ["/api/reuse-posture", "reuse-posture.json"],
    ["/api/risk-map", "risk-map.json"],
    ["/api/verification", "verification.json"],
    ["/api/sample", "sample.json"],
    ["/api/payload", "payload.json"]
  ];

  for (const [route, output] of apis) {
    const response = await request(app).get(route);
    writeFileSync(path.join(root, output), JSON.stringify(response.body, null, 2));
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
