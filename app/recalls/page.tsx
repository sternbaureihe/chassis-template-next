import type { Metadata } from 'next';

const chassisCode = process.env.CHASSIS_CODE || 'W124';
const productionYears = process.env.PRODUCTION_YEARS || '1984–1997';
const siteUrl = process.env.SITE_URL || 'https://mb-w124.com';
let recalls: Array<{ campaign: string; year: string; component: string; description: string; affected: string; remedy: string }> = [];
try { recalls = JSON.parse(process.env.RECALLS || '[]'); } catch {}

export const metadata: Metadata = {
  title: `${chassisCode} Recall Database`,
  alternates: { canonical: `${siteUrl}/recalls` },
};

export default function RecallsPage() {
  return (
    <>
      <style>{`
        .page-hero{padding:48px 0 36px;border-bottom:0.5px solid #2a2a2a}
        .page-label{font-family:'JetBrains Mono',monospace;font-size:10px;color:#444;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px}
        .page-title{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700;color:#e8e6e1}
        .page-title em{color:#c8c5bd;font-style:normal}
        .content{padding:40px 0}
        .section-label{font-family:'JetBrains Mono',monospace;font-size:12px;color:#1A2744;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:16px;padding-bottom:8px;border-bottom:0.5px solid #2a2a2a}
        .recall-card{background:#161616;border:0.5px solid #2a2a2a;border-radius:4px;padding:20px;margin-bottom:12px}
        .recall-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;flex-wrap:wrap;gap:8px}
        .recall-campaign{font-family:'JetBrains Mono',monospace;font-size:11px;color:#9B1B30;letter-spacing:0.06em}
        .recall-year{font-family:'JetBrains Mono',monospace;font-size:10px;color:#444}
        .recall-component{font-size:14px;color:#c8c5bd;font-weight:500;margin-bottom:6px}
        .recall-desc{font-size:13px;color:#888;line-height:1.6;margin-bottom:8px}
        .recall-meta{font-family:'JetBrains Mono',monospace;font-size:10px;color:#555}
        .recall-remedy{font-size:12px;color:#666;margin-top:8px;padding-top:8px;border-top:0.5px solid #222}
        .nhtsa-cta{background:#161616;border:0.5px solid #2a2a2a;border-radius:4px;padding:20px;margin-top:2rem}
        .nhtsa-cta p{font-size:13px;color:#777;margin-bottom:12px}
        .nhtsa-cta a{font-family:'JetBrains Mono',monospace;font-size:10px;color:#1A2744;border:0.5px solid #1A2744;padding:6px 14px;border-radius:3px;display:inline-block}
      `}</style>
      <section className="page-hero">
        <div className="container">
          <div className="page-label">Mercedes-Benz · {chassisCode} · {productionYears}</div>
          <h1 className="page-title"><em>{chassisCode}</em> Recall Database</h1>
        </div>
      </section>
      <div className="container">
        <div className="content">
          <div className="section-label">NHTSA recall history</div>
          {recalls.map((r, i) => (
            <div className="recall-card" key={i}>
              <div className="recall-header">
                <span className="recall-campaign">Campaign {r.campaign}</span>
                <span className="recall-year">{r.year}</span>
              </div>
              <div className="recall-component">{r.component}</div>
              <p className="recall-desc">{r.description}</p>
              <div className="recall-meta">Affected: {r.affected}</div>
              <div className="recall-remedy">Remedy: {r.remedy}</div>
            </div>
          ))}
          <div className="nhtsa-cta">
            <p>Check your specific VIN for open recalls on the NHTSA database.</p>
            <a href="https://www.nhtsa.gov/recalls" target="_blank" rel="noopener">Check VIN on NHTSA →</a>
          </div>
        </div>
      </div>
    </>
  );
}
