import { toExport } from "../analyze.js";
import { sampleVendorProofGapMonitor } from "../data/sampleVerticalBrief.js";
import { gapMatrix, payload, proofLane, reusePosture, riskMap, summary, verification } from "./verticalBriefService.js";

const productTitle = "Vendor Proof Gap Monitor";
const domain = "https://proofgap.kineticgain.com";

const KG_FAVICON_DATA_URI =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Kinetic Gain"><rect width="64" height="64" rx="15" fill="#0D0F12"/><g transform="translate(10 22.79) scale(0.25581)"><rect x="0" y="0" width="14" height="72" fill="#475B6B"/><polygon points="32,0 83,0 77,18 26,18" fill="#F5F2EB"/><polygon points="32,27 127,27 121,45 26,45" fill="#F5F2EB"/><polygon points="32,54 172,54 166,72 26,72" fill="#F5F2EB"/></g></svg>`
  );

const KG_MARK_SVG = `<svg class="kg-mark" viewBox="-8 -8 188 88" aria-hidden="true"><rect class="anchor" x="0" y="0" width="14" height="72"/><polygon class="bar" points="32,0 83,0 77,18 26,18"/><polygon class="bar" points="32,27 127,27 121,45 26,45"/><polygon class="bar" points="32,54 172,54 166,72 26,72"/></svg>`;

const KG_STYLE01_CSS = `:root{--onyx:#0D0F12;--cream:#F5F2EB;--bluegray:#475B6B;--bluegray-bright:#6E879A;--radius:16px;--maxw:1180px;--ease:cubic-bezier(.22,.61,.36,1);--font:"Geist",-apple-system,sans-serif;--mono:"Geist Mono",ui-monospace,monospace;--serif:"Newsreader",Georgia,serif;--a-emerald:#34D399;--a-cyan:#22D3EE;--a-violet:#A78BFA;--a-amber:#FBBF24;--a-pink:#F472B6;--a-blue:#60A5FA;--a-coral:#FB7185;--green:#69E3B3;--danger:#FF7F9B}html[data-theme="dark"]{--ground:#0D0F12;--ink:var(--cream);--ink-dim:#9AA1AD;--ink-faint:#565C68;--surface:rgba(255,255,255,.025);--surface-2:rgba(255,255,255,.045);--line:rgba(255,255,255,.08);--line-soft:rgba(255,255,255,.05);--signal:var(--bluegray-bright);--glow:1}html[data-theme="light"]{--ground:var(--cream);--ink:var(--onyx);--ink-dim:#5A5E63;--ink-faint:#A8A59C;--surface:rgba(13,15,18,.02);--surface-2:rgba(13,15,18,.04);--line:#E2DDD1;--line-soft:#EBE7DC;--signal:var(--bluegray);--glow:0}*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{background:var(--ground);color:var(--ink);font-family:var(--font);line-height:1.5;letter-spacing:-.011em;-webkit-font-smoothing:antialiased;overflow-x:hidden;position:relative;transition:background .5s var(--ease),color .5s var(--ease)}body::after{content:"";position:fixed;inset:0;z-index:0;pointer-events:none;opacity:var(--glow);transition:opacity .5s var(--ease);background:radial-gradient(900px 600px at 12% -5%,rgba(124,92,232,.16),transparent 60%),radial-gradient(800px 600px at 92% 8%,rgba(34,211,238,.10),transparent 55%),radial-gradient(1000px 700px at 70% 100%,rgba(71,91,107,.18),transparent 60%),linear-gradient(180deg,#0D0F12 0%,#0E1014 55%,#0C0E11 100%)}::selection{background:var(--a-violet);color:#0A0B11}a{color:inherit}.wrap{max-width:var(--maxw);margin:0 auto;padding:0 28px}.eyebrow{font-family:var(--mono);font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-faint)}.kg-logo{display:flex;align-items:center;gap:11px;text-decoration:none;color:var(--ink)}.kg-mark{height:22px;width:auto;display:block;flex:none}.kg-mark .anchor{fill:var(--signal)}.kg-mark .bar{fill:var(--ink)}.kg-word{font-weight:600;font-size:18px;letter-spacing:-.035em;color:var(--ink);white-space:nowrap}header{position:sticky;top:0;z-index:50;background:color-mix(in srgb,var(--ground) 72%,transparent);backdrop-filter:blur(16px) saturate(150%);border-bottom:1px solid var(--line-soft)}.nav{display:flex;align-items:center;justify-content:space-between;height:68px;position:relative;z-index:2}.nav-links{display:flex;align-items:center;gap:22px;flex-wrap:wrap}.nav-links a{font-family:var(--mono);font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-dim);text-decoration:none;transition:color .25s var(--ease)}.nav-links a:hover,.nav-links a.active{color:var(--ink)}.nav-links a.active{border-bottom:1px solid var(--a-cyan);padding-bottom:2px}.nav-right{display:flex;align-items:center;gap:14px}.theme-btn,.menu-btn{width:34px;height:34px;border:1px solid var(--line);border-radius:9px;background:transparent;color:var(--ink-dim);cursor:pointer;display:grid;place-items:center;transition:all .25s var(--ease)}.menu-btn{display:none;color:var(--ink)}.theme-btn:hover,.menu-btn:hover{color:var(--ink);border-color:var(--a-violet)}.theme-btn svg,.menu-btn svg{width:15px;height:15px}.hero{padding:80px 0 50px;position:relative;z-index:2}.hero .eyebrow{margin-bottom:22px;display:inline-flex;align-items:center;gap:10px}.hero .eyebrow .dot{width:7px;height:7px;border-radius:50%;background:linear-gradient(120deg,var(--a-violet),var(--a-cyan));box-shadow:0 0 12px rgba(124,92,232,.7)}.hero h1,.hero h2{font-size:clamp(36px,5.6vw,68px);font-weight:600;line-height:1.04;letter-spacing:-.035em;color:var(--ink)}.hero p,.section p{margin-top:22px;font-size:clamp(15px,1.4vw,17px);color:var(--ink-dim);line-height:1.6}.hero p strong{color:var(--ink);font-weight:500}.sec{padding:70px 0;border-top:1px solid var(--line-soft);position:relative;z-index:2}.sec-head{display:flex;gap:18px;align-items:baseline;margin-bottom:38px;flex-wrap:wrap}.sec-num{font-family:var(--mono);font-size:12px;letter-spacing:.1em;background:linear-gradient(120deg,var(--a-violet),var(--a-cyan));-webkit-background-clip:text;background-clip:text;color:transparent}.sec-title{font-size:clamp(24px,3vw,38px);font-weight:600;letter-spacing:-.03em;line-height:1.08}.sec-lead{color:var(--ink-dim);max-width:54ch;font-size:16px;line-height:1.6;margin-top:6px}.acard,.card{position:relative;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;transition:transform .3s var(--ease),border-color .3s var(--ease),background .3s var(--ease);padding:24px}.acard::before,.card::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:var(--accent,linear-gradient(90deg,var(--a-violet),var(--a-cyan)));opacity:.9}.acard::after{content:"";position:absolute;inset:0;background:var(--accent,linear-gradient(90deg,var(--a-violet),var(--a-cyan)));opacity:0;filter:blur(40px);transition:opacity .4s var(--ease);z-index:-1}.acard:hover,.card:hover{transform:translateY(-3px);border-color:color-mix(in srgb,var(--ink) 22%,transparent);background:var(--surface-2)}.acard:hover::after{opacity:.08}footer{border-top:1px solid var(--line-soft);padding:44px 0 32px;position:relative;z-index:2;margin-top:48px}.foot-top{display:flex;justify-content:space-between;align-items:flex-start;gap:32px;flex-wrap:wrap;margin-bottom:32px}.foot-tag{max-width:38ch;color:var(--ink-dim);font-size:14.5px;line-height:1.6;margin-top:14px}.foot-cols{display:flex;gap:48px;flex-wrap:wrap}.foot-col h4{font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-faint);margin-bottom:14px}.foot-col a{display:block;color:var(--ink-dim);text-decoration:none;font-size:13.5px;margin-bottom:8px;transition:color .2s var(--ease)}.foot-col a:hover{color:var(--ink)}.foot-bot{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;padding-top:22px;border-top:1px solid var(--line-soft);font-family:var(--mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-faint)}.reveal{opacity:0;transform:translateY(20px);transition:opacity .8s var(--ease),transform .8s var(--ease)}.reveal.in{opacity:1;transform:none}@media(max-width:880px){.menu-btn{display:grid}.nav-links{position:absolute;top:68px;left:0;right:0;flex-direction:column;align-items:flex-start;background:var(--ground);border-bottom:1px solid var(--line);padding:20px 28px;gap:18px;display:none}.nav-links.open{display:flex}}@media(max-width:560px){.hero{padding:50px 0 30px}.wrap{padding:0 18px}}@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.reveal{opacity:1;transform:none}}`;

const PROOF_CSS = `main{position:relative;z-index:2}.shell{max-width:var(--maxw);margin:0 auto;padding:0 28px 60px}.hero-panel{position:relative;overflow:hidden}.hero-panel::after{content:"";position:absolute;right:-80px;top:20px;width:280px;height:280px;border-radius:50%;background:radial-gradient(circle,rgba(167,139,250,.13),transparent 68%);pointer-events:none}.hero-grid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(300px,.75fr);gap:28px;align-items:start}.hero-copy{min-width:0}.hero-panel h1{max-width:11ch;font-size:clamp(42px,5.4vw,76px);line-height:1.02;text-wrap:balance}.hero-subtle{max-width:62ch}.hero-nav{display:flex;gap:10px;flex-wrap:wrap;margin-top:24px}.hero-nav a{padding:10px 14px;border:1px solid var(--line);border-radius:999px;color:var(--ink-dim);font-family:var(--mono);font-size:11px;letter-spacing:.04em;text-decoration:none;transition:border-color .2s var(--ease),color .2s var(--ease)}.hero-nav a:hover,.hero-nav a.active{color:var(--ink);border-color:var(--a-cyan)}.hero-aside{display:grid;gap:14px;min-width:0}.hero-aside .acard{padding:18px 18px 20px}.hero-aside h3{font-size:18px;font-weight:600;line-height:1.2;color:var(--ink);margin:10px 0 8px}.hero-aside p{margin:0;color:var(--ink-dim);font-size:13.5px;line-height:1.6}.hero-mini-list{display:grid;gap:10px;list-style:none}.hero-mini-list li{padding:12px 0;border-top:1px solid var(--line-soft)}.hero-mini-list li:first-child{border-top:0;padding-top:0}.hero-mini-list strong{display:block;color:var(--ink);font-size:14px;line-height:1.35;margin-bottom:4px}.hero-mini-list span{display:block;color:var(--ink-dim);font-size:12.5px;line-height:1.55}.stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:28px}.stat{padding:18px 20px;background:var(--surface-2);border:1px solid var(--line);border-radius:14px}.stat label{display:block;font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--a-emerald);margin-bottom:10px}.stat strong{display:block;font-size:clamp(30px,3.8vw,44px);font-weight:600;letter-spacing:-.04em;line-height:1;color:var(--ink)}.stat span{display:block;margin-top:9px;color:var(--ink-dim);font-size:13px;line-height:1.55}.card-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.proof-card{display:flex;flex-direction:column;gap:12px;min-height:100%}.proof-card h3{font-size:18px;font-weight:600;line-height:1.2;color:var(--ink)}.proof-meta{display:grid;gap:6px}.proof-meta p{margin:0;color:var(--ink-dim);font-size:13.5px;line-height:1.55}.proof-meta strong{color:var(--ink)}.proof-copy{margin-top:2px;color:var(--ink-dim);font-size:14px;line-height:1.6}.proof-next{margin-top:auto;padding-top:6px;color:var(--ink);font-size:14px;line-height:1.6}.tag{display:inline-flex;align-items:center;padding:5px 10px;border-radius:999px;font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;border:1px solid var(--line);width:max-content}.tag.reusable{color:var(--a-emerald);border-color:color-mix(in srgb,var(--a-emerald) 38%,transparent);background:color-mix(in srgb,var(--a-emerald) 12%,transparent)}.tag.needs-refresh{color:var(--a-amber);border-color:color-mix(in srgb,var(--a-amber) 38%,transparent);background:color-mix(in srgb,var(--a-amber) 12%,transparent)}.tag.at-risk,.tag.blocked{color:var(--a-coral);border-color:color-mix(in srgb,var(--a-coral) 38%,transparent);background:color-mix(in srgb,var(--a-coral) 12%,transparent)}.table-wrap{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:18px 20px 20px;position:relative;overflow:hidden}.table-wrap::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--a-cyan),var(--a-violet));opacity:.9}table{width:100%;border-collapse:collapse;font:13.5px/1.55 var(--font)}th,td{text-align:left;padding:12px 10px;border-bottom:1px solid var(--line-soft);vertical-align:top;color:var(--ink)}th{font-family:var(--mono);font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-faint)}tbody tr:last-child td{border-bottom:0}tbody tr:hover{background:var(--surface-2)}td strong{color:var(--ink)}.risk-list{display:grid;gap:10px;list-style:none;margin-top:16px}.risk-list li{position:relative;padding-left:18px;color:var(--ink-dim);font-size:14px;line-height:1.6}.risk-list li::before{content:"";position:absolute;left:0;top:8px;width:7px;height:7px;border-radius:50%;background:linear-gradient(135deg,var(--a-violet),var(--a-cyan))}.route-list{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}.route-list span{font-family:var(--mono);font-size:11px;letter-spacing:.04em;color:var(--a-cyan);border:1px solid color-mix(in srgb,var(--a-cyan) 30%,transparent);background:color-mix(in srgb,var(--a-cyan) 8%,transparent);border-radius:999px;padding:7px 11px}.verification-list{display:grid;gap:12px;list-style:none}.verification-list li{padding:16px 18px;border:1px solid var(--line);border-radius:14px;background:var(--surface-2);color:var(--ink-dim);line-height:1.6}.code-block{margin-top:18px;white-space:pre-wrap;overflow-wrap:anywhere;color:var(--ink-dim);background:rgba(7,17,29,.75);border:1px solid rgba(125,196,255,.12);border-radius:18px;padding:18px;font-family:var(--mono);font-size:12.5px;line-height:1.65}.metric-chip{display:inline-flex;align-items:center;gap:7px;padding:6px 11px;border-radius:999px;border:1px solid var(--line);color:var(--ink-faint);font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase}.metric-chip::before{content:"";width:7px;height:7px;border-radius:50%;background:linear-gradient(135deg,var(--a-violet),var(--a-cyan))}@media(max-width:1080px){.hero-grid{grid-template-columns:1fr}.card-grid{grid-template-columns:repeat(2,1fr)}.stat-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:760px){.hero-panel h1{max-width:100%;font-size:clamp(34px,11vw,58px)}.hero-subtle{max-width:100%}.card-grid{grid-template-columns:1fr}.stat-grid{grid-template-columns:1fr}.shell{padding:0 18px 46px}}`;

const KG_THEME_JS = `(function(){var key='kg-theme';var saved=null;try{saved=localStorage.getItem(key)}catch(e){}var t=saved||'dark';document.documentElement.setAttribute('data-theme',t);document.addEventListener('DOMContentLoaded',function(){var btn=document.getElementById('themeBtn');if(btn){btn.addEventListener('click',function(){var cur=document.documentElement.getAttribute('data-theme');var n=cur==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',n);try{localStorage.setItem(key,n)}catch(e){}})}var m=document.getElementById('menuBtn');if(m){m.addEventListener('click',function(){var nl=document.querySelector('.nav-links');if(nl){nl.classList.toggle('open')}})}if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)})}})})();`;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function navLink(href: string, label: string, activePath: string) {
  return `<a${href === activePath ? ' class="active"' : ""} href="${href}">${label}</a>`;
}

function routeNav(activePath: string) {
  return [
    ["/", "Overview"],
    ["/proof-lane", "Proof lane"],
    ["/gap-matrix", "Gap matrix"],
    ["/reuse-posture", "Reuse posture"],
    ["/verification", "Verification"],
    ["/docs", "Docs"]
  ]
    .map(([href, label]) => navLink(href, label, activePath))
    .join("");
}

function routePills() {
  return [
    "/proof-lane",
    "/gap-matrix",
    "/reuse-posture",
    "/verification",
    "/docs"
  ]
    .map((route) => `<span>${route}</span>`)
    .join("");
}

function stateClass(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function pageFrame(title: string, description: string, activePath: string, body: string) {
  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>${escapeHtml(title)} · Kinetic Gain</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <meta name="theme-color" content="#0D0F12" />
  <meta name="referrer" content="strict-origin-when-cross-origin" />
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests" />
  <link rel="canonical" href="${domain}${activePath === "/" ? "/" : `${activePath}/`}" />
  <link rel="icon" type="image/svg+xml" href="${KG_FAVICON_DATA_URI}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Kinetic Gain" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:url" content="${domain}${activePath === "/" ? "/" : `${activePath}/`}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${escapeHtml(title)}" />
  <meta name="twitter:description" content="${escapeHtml(description)}" />
  <style>${KG_STYLE01_CSS}${PROOF_CSS}</style>
</head>
<body>
  <header>
    <div class="wrap nav">
      <a class="kg-logo" href="/" aria-label="Kinetic Gain — ${productTitle}">
        ${KG_MARK_SVG}
        <span class="kg-word">Kinetic Gain</span>
      </a>
      <nav class="nav-links" id="primaryNav">
        ${routeNav(activePath)}
      </nav>
      <div class="nav-right">
        <button class="theme-btn" id="themeBtn" aria-label="Toggle theme">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        </button>
        <button class="menu-btn" id="menuBtn" aria-label="Menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>
  </header>
  <main class="wrap shell">
    ${body}
  </main>
  <footer>
    <div class="wrap">
      <div class="foot-top">
        <div>
          <a class="kg-logo" href="/" aria-label="Kinetic Gain">${KG_MARK_SVG}<span class="kg-word">Kinetic Gain</span></a>
          <p class="foot-tag">Vendor Proof Gap Monitor turns claim coverage, evidence freshness, reuse safety, and benchmark confidence into one readable diligence surface. Static demo data only.</p>
        </div>
        <div class="foot-cols">
          <div class="foot-col">
            <h4>Surface</h4>
            <a href="${domain}/">Overview</a>
            <a href="${domain}/proof-lane/">Proof lane</a>
            <a href="${domain}/gap-matrix/">Gap matrix</a>
          </div>
          <div class="foot-col">
            <h4>Links</h4>
            <a href="${domain}">${domain.replace("https://", "")}</a>
            <a href="https://github.com/mizcausevic-dev/vendor-proof-gap-monitor">GitHub repo</a>
            <a href="https://www.linkedin.com/in/mirzacausevic/">LinkedIn</a>
            <a href="https://kineticgain.com/">Kinetic Gain</a>
          </div>
        </div>
      </div>
      <div class="foot-bot">
        <span>Vendor Proof Gap Monitor</span>
        <span>Style01 · board-safe proof scoring</span>
      </div>
    </div>
  </footer>
  <script>${KG_THEME_JS}</script>
</body>
</html>`;
}

function proofCard(item: ReturnType<typeof proofLane>[number]) {
  return `<article class="acard proof-card reveal">
    <span class="tag ${stateClass(item.proofState)}">${escapeHtml(item.proofState)}</span>
    <h3>${escapeHtml(item.audience)}</h3>
    <div class="proof-meta">
      <p><strong>Owner:</strong> ${escapeHtml(item.owner)}</p>
      <p><strong>Theme:</strong> ${escapeHtml(item.proofTheme)}</p>
      <p><strong>Stage:</strong> ${escapeHtml(item.proofStage)}</p>
    </div>
    <p class="proof-copy"><strong>Question:</strong> ${escapeHtml(item.operatingQuestion)}</p>
    <p class="proof-copy"><strong>Gap:</strong> ${escapeHtml(item.headlineGap)}</p>
    <p class="proof-next">${escapeHtml(item.nextMove)}</p>
  </article>`;
}

export function renderOverview() {
  const executiveSummary = summary();
  const proofs = proofLane().slice(0, 6);
  const risks = riskMap().slice(0, 5);
  const hotspots = risks.slice(0, 3);

  return pageFrame(
    "Overview",
    "Executive proof-gap surface for claim coverage, evidence freshness, benchmark confidence, and reuse safety.",
    "/",
    `<section class="hero reveal">
      <div class="acard hero-panel">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="eyebrow"><span class="dot"></span>Proof scoring</span>
            <h1>Where is proof still too stale, too thin, or too risky to travel into diligence?</h1>
            <p class="hero-subtle">Vendor Proof Gap Monitor keeps claim coverage, evidence freshness, benchmark confidence, and reuse safety together so leaders stop guessing what can actually stand up to boards, buyers, and investors.</p>
            <div class="hero-nav">${routeNav("/")}</div>
            <div class="stat-grid">
              <div class="stat"><label>Proof packs</label><strong>${executiveSummary.items}</strong><span>Modeled proof packets in the current estate.</span></div>
              <div class="stat"><label>Reusable packs</label><strong>${executiveSummary.reusableProofPacks}</strong><span>Packets strong enough to reuse without another rewrite loop.</span></div>
              <div class="stat"><label>Blocked tracks</label><strong>${executiveSummary.blockedProofTracks}</strong><span>Proof paths still blocked by missing ownership or stale evidence.</span></div>
              <div class="stat"><label>Hours recovered</label><strong>${formatNumber(executiveSummary.hoursRecoveredPerQuarter)}</strong><span>Modeled quarterly hours recovered once proof rooms stabilize.</span></div>
            </div>
          </div>
          <aside class="hero-aside">
            <div class="acard">
              <span class="metric-chip">Board takeaway</span>
              <h3>What leadership should do next</h3>
              <p>${escapeHtml(executiveSummary.recommendation)}</p>
            </div>
            <div class="acard">
              <span class="metric-chip">Hotspots</span>
              <h3>Where proof risk is compounding</h3>
              <ul class="hero-mini-list">
                ${hotspots
                  .map(
                    (item) =>
                      `<li><strong>${escapeHtml(item.audience)}</strong><span>${escapeHtml(item.code)} · ${escapeHtml(item.severity)} · ${escapeHtml(item.message)}</span></li>`
                  )
                  .join("")}
              </ul>
            </div>
            <div class="acard">
              <span class="metric-chip">Route coverage</span>
              <div class="route-list">${routePills()}</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <section class="sec reveal">
      <div class="sec-head">
        <span class="sec-num">01</span>
        <div>
          <h2 class="sec-title">Proof lane</h2>
          <p class="sec-lead">Each packet keeps one owner, one audience, one theme, and one next move attached before the next diligence cycle opens.</p>
        </div>
      </div>
      <div class="card-grid">
        ${proofs.map((item) => proofCard(item)).join("")}
      </div>
    </section>
    <section class="sec reveal">
      <div class="acard">
        <div class="sec-head">
          <span class="sec-num">02</span>
          <div>
            <h2 class="sec-title">Risk pressure</h2>
            <p class="sec-lead">The risk map keeps stale evidence, weak benchmark confidence, and blocked proof ownership visible in the same board-readable view.</p>
          </div>
        </div>
        <ul class="risk-list">
          ${risks
            .map(
              (item) =>
                `<li><strong>${escapeHtml(item.audience)}</strong> · ${escapeHtml(item.code)} · ${escapeHtml(item.severity)} · ${escapeHtml(item.message)}</li>`
            )
            .join("")}
        </ul>
      </div>
    </section>`
  );
}

export function renderProofLane() {
  const items = proofLane();
  const executiveSummary = summary();
  const headline = items[0];
  const blocked = items.filter((item) => item.proofState === "BLOCKED" || item.proofState === "AT_RISK").slice(0, 3);
  return pageFrame(
    "Proof lane",
    "Proof-lane view for evidence ownership, blocker visibility, and reusable proof-room assembly.",
    "/proof-lane",
    `<section class="hero reveal">
      <div class="acard hero-panel">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="eyebrow"><span class="dot"></span>Proof lane</span>
            <h1>Keep every proof room, owner, stage, and blocker visible before the next diligence cycle starts.</h1>
            <p class="hero-subtle">The proof-lane view shows which packets are reusable now, which need refresh work, and where ownership or evidence depth is still slowing the board, investor, or buyer packet.</p>
            <div class="hero-nav">${routeNav("/proof-lane")}</div>
            <div class="stat-grid">
              <div class="stat"><label>Proof packs</label><strong>${executiveSummary.items}</strong><span>Total modeled packets currently tracked in the proof estate.</span></div>
              <div class="stat"><label>Reusable now</label><strong>${executiveSummary.reusableProofPacks}</strong><span>Packs already safe to reuse without another manual rewrite loop.</span></div>
              <div class="stat"><label>Blocked tracks</label><strong>${executiveSummary.blockedProofTracks}</strong><span>Paths still gated by missing ownership, stale evidence, or thin support.</span></div>
              <div class="stat"><label>Avg review days</label><strong>${executiveSummary.averageReviewCycleDays}</strong><span>Typical modeled review time before a packet clears the next diligence round.</span></div>
            </div>
          </div>
          <aside class="hero-aside">
            <div class="acard">
              <span class="metric-chip">Current pressure</span>
              <h3>${escapeHtml(headline.audience)}</h3>
              <p><strong>${escapeHtml(headline.proofTheme)}</strong> is still exposed because ${escapeHtml(headline.headlineGap.toLowerCase())}</p>
            </div>
            <div class="acard">
              <span class="metric-chip">Blocked or at risk</span>
              <ul class="hero-mini-list">
                ${blocked
                  .map(
                    (item) =>
                      `<li><strong>${escapeHtml(item.audience)}</strong><span>${escapeHtml(item.proofState)} · ${escapeHtml(item.headlineGap)}</span></li>`
                  )
                  .join("")}
              </ul>
            </div>
            <div class="acard">
              <span class="metric-chip">Next operator move</span>
              <p>${escapeHtml(executiveSummary.recommendation)}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <section class="sec reveal">
      <div class="sec-head">
        <span class="sec-num">01</span>
        <div>
          <h2 class="sec-title">Proof packets</h2>
          <p class="sec-lead">Each packet keeps one owner, one audience, one proof theme, and one next action attached so proof work does not disappear into ad hoc follow-up.</p>
        </div>
      </div>
      <div class="card-grid">
        ${items.map((item) => proofCard(item)).join("")}
      </div>
    </section>`
  );
}

export function renderGapMatrix() {
  const rows = gapMatrix()
    .map(
      (item) => `<tr>
        <td><strong>${escapeHtml(item.owner)}</strong></td>
        <td>${escapeHtml(item.audience)}</td>
        <td>${escapeHtml(item.proofTheme)}</td>
        <td>${item.claimCoverageScore}</td>
        <td>${item.proofFreshnessScore}</td>
        <td>${item.evidenceDepthScore}</td>
        <td>${escapeHtml(item.companyTags.join(", "))}</td>
      </tr>`
    )
    .join("");

  return pageFrame(
    "Gap matrix",
    "Gap matrix for reusable proof packets, evidence freshness, and benchmarkable claim coverage.",
    "/gap-matrix",
    `<section class="hero reveal">
      <div class="acard hero-panel">
        <span class="eyebrow"><span class="dot"></span>Gap matrix</span>
        <h1>See where coverage, freshness, and depth still break down.</h1>
        <p class="hero-subtle">The gap matrix turns board and diligence proof into a readable inventory of claim coverage, freshness, evidence depth, and company-tag context.</p>
        <div class="hero-nav">${routeNav("/gap-matrix")}</div>
      </div>
    </section>
    <section class="sec reveal">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Owner</th>
              <th>Audience</th>
              <th>Theme</th>
              <th>Coverage</th>
              <th>Freshness</th>
              <th>Depth</th>
              <th>Company tags</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>`
  );
}

export function renderReusePosture() {
  const rows = reusePosture()
    .map(
      (item) => `<tr>
        <td><strong>${escapeHtml(item.audience)}</strong></td>
        <td>${escapeHtml(item.owner)}</td>
        <td>${item.reuseSafetyScore}</td>
        <td>${item.benchmarkConfidenceScore}</td>
        <td>${item.reviewCycleDays}</td>
        <td>${escapeHtml(item.companyTags.join(", "))}</td>
        <td>${escapeHtml(item.relatedSurfaces.join(", "))}</td>
      </tr>`
    )
    .join("");

  return pageFrame(
    "Reuse posture",
    "Reuse-posture matrix for proof safety, benchmark confidence, and linked supporting surfaces.",
    "/reuse-posture",
    `<section class="hero reveal">
      <div class="acard hero-panel">
        <span class="eyebrow"><span class="dot"></span>Reuse posture</span>
        <h1>Keep reuse safety, benchmarking, and source proof together.</h1>
        <p class="hero-subtle">The reuse-posture view shows whether each packet can stand up to boards, buyers, and investors without another manual rewrite loop.</p>
        <div class="hero-nav">${routeNav("/reuse-posture")}</div>
      </div>
    </section>
    <section class="sec reveal">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Audience</th>
              <th>Owner</th>
              <th>Reuse safety</th>
              <th>Benchmark confidence</th>
              <th>Review days</th>
              <th>Company tags</th>
              <th>Related surfaces</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>`
  );
}

export function renderVerification() {
  const items = verification().map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  return pageFrame(
    "Verification",
    "Verification notes for the synthetic proof-gap surface, sample export, and read-only diligence workflow.",
    "/verification",
    `<section class="hero reveal">
      <div class="acard hero-panel">
        <span class="eyebrow"><span class="dot"></span>Verification</span>
        <h1>Verification posture stays explicit.</h1>
        <p class="hero-subtle">This proof-gap surface is synthetic, read-only, and reproducible from the included sample export. The guardrails stay visible before the repo is shown externally.</p>
        <div class="hero-nav">${routeNav("/verification")}</div>
      </div>
    </section>
    <section class="sec reveal">
      <ul class="verification-list">${items}</ul>
    </section>`
  );
}

export function renderDocs() {
  return pageFrame(
    "Docs",
    "Product documentation for Vendor Proof Gap Monitor and its proof, gap, and reuse routes.",
    "/docs",
    `<section class="hero reveal">
      <div class="acard hero-panel">
        <span class="eyebrow"><span class="dot"></span>Docs</span>
        <h1>Vendor Proof Gap Monitor docs</h1>
        <p class="hero-subtle">This repo packages board-safe proof monitoring into one readable surface: proof lane, gap matrix, reuse posture, and risk map.</p>
        <div class="hero-nav">${routeNav("/docs")}</div>
      </div>
    </section>
    <section class="sec reveal">
      <div class="acard">
        <div class="sec-head">
          <span class="sec-num">01</span>
          <div>
            <h2 class="sec-title">Core routes</h2>
            <p class="sec-lead">Each route exposes one part of the reusable-proof story without collapsing into a single spreadsheet dump.</p>
          </div>
        </div>
        <ul class="risk-list">
          <li><strong>/proof-lane</strong> keeps owner, audience, blockers, and next move visible.</li>
          <li><strong>/gap-matrix</strong> compares claim coverage, freshness, and evidence depth.</li>
          <li><strong>/reuse-posture</strong> shows where reuse safety and benchmark confidence still drag the diligence cycle.</li>
          <li><strong>/verification</strong> makes the synthetic and read-only posture explicit.</li>
        </ul>
        <div class="route-list">${routePills()}</div>
        <div class="code-block">npm install
npm run verify
npm run prerender
powershell -ExecutionPolicy Bypass -File .\\scripts\\render_readme_assets.ps1</div>
      </div>
    </section>`
  );
}

export function renderSample() {
  return JSON.stringify(toExport(sampleVendorProofGapMonitor, payload().generatedAt), null, 2);
}
