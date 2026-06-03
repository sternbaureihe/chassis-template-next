import type { Metadata } from 'next';

const chassisCode = process.env.CHASSIS_CODE || 'W124';
const productionYears = process.env.PRODUCTION_YEARS || '1984–1997';
const siteUrl = process.env.SITE_URL || 'https://mb-w124.com';
const buyersGuide = process.env.BUYERS_GUIDE || '';
let commonIssues: Array<{ issue: string; severity: string; notes: string }> = [];
try { commonIssues = JSON.parse(process.env.COMMON_ISSUES || '[]'); } catch {}
const sponsorName = process.env.GUIDE_SPONSOR_NAME || '';
const sponsorDesc = process.env.GUIDE_SPONSOR_DESC || '';
const sponsorUrl = process.env.GUIDE_SPONSOR_URL || '';

export const metadata: Metadata = {
  title: `${chassisCode} Owner Guides & Buyer's Guide`,
  alternates: { canonical: `${siteUrl}/guides` },
};

export default function GuidesPage() {
  return (
    <>
      <style>{`
        .page-hero{padding:48px 0 36px;border-bottom:0.5px solid #2a2a2a}
        .page-label{font-family:'JetBrains Mono',monospace;font-size:10px;color:#444;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px}
        .page-title{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700;color:#e8e6e1}
        .page-title em{color:#c8c5bd;font-style:normal}
        .content{padding:40px 0;display:grid;grid-template-columns:1fr 260px;gap:48px}
        .section-label{font-family:'JetBrains Mono',monospace;font-size:12px;color:#1A2744;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:16px;padding-bottom:8px;border-bottom:0.5px solid #2a2a2a;margin-top:2rem}
        .section-label:first-child{margin-top:0}
        .prose p{font-size:14px;color:#aaa;line-height:1.85;margin-bottom:1rem}
        .issues-table{width:100%;border-collapse:collapse;margin-bottom:2rem}
        .issues-table th{font-family:'JetBrains Mono',monospace;font-size:9px;color:#444;text-transform:uppercase;letter-spacing:0.08em;padding:8px 12px;text-align:left;border-bottom:0.5px solid #2a2a2a}
        .issues-table td{padding:10px 12px;font-size:12px;border-bottom:0.5px solid #1e1e1e;color:#888}
        .issues-table td:first-child{color:#c8c5bd;font-weight:500}
        .severity-high{color:#9B1B30 !important;font-family:'JetBrains Mono',monospace;font-size:10px}
        .severity-medium{color:#6e6c67 !important;font-family:'JetBrains Mono',monospace;font-size:10px}
        .sponsored-block{background:#161616;border:0.5px solid #1A2744;border-radius:4px;padding:20px;margin-bottom:16px}
        .sponsored-label{font-family:'JetBrains Mono',monospace;font-size:9px;color:#1A2744;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px}
        .sponsored-name{font-size:14px;color:#c8c5bd;font-weight:500;margin-bottom:6px}
        .sponsored-desc{font-size:12px;color:#666;line-height:1.5;margin-bottom:12px}
        .sponsored-cta{font-family:'JetBrains Mono',monospace;font-size:10px;color:#1A2744;border:0.5px solid #1A2744;padding:6px 12px;border-radius:3px;display:inline-block;transition:all 0.2s}
        .sponsored-cta:hover{background:#1A2744;color:#e8e6e1}
        @media(max-width:768px){.content{grid-template-columns:1fr}}
      `}</style>
      <section className="page-hero">
        <div className="container">
          <div className="page-label">Mercedes-Benz · {chassisCode} · {productionYears}</div>
          <h1 className="page-title"><em>{chassisCode}</em> Guides</h1>
        </div>
      </section>
      <div className="container">
        <div className="content">
          <div className="prose">
            <div className="section-label">Buyer&apos;s guide</div>
            {buyersGuide && <p>{buyersGuide}</p>}
            {commonIssues.length > 0 && (
              <>
                <div className="section-label">Common issues</div>
                <table className="issues-table">
                  <thead><tr><th>Issue</th><th>Severity</th><th>Notes</th></tr></thead>
                  <tbody>
                    {commonIssues.map((issue, i) => (
                      <tr key={i}>
                        <td>{issue.issue}</td>
                        <td className={issue.severity === 'High' ? 'severity-high' : 'severity-medium'}>{issue.severity}</td>
                        <td>{issue.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
          <div className="aside">
            {sponsorName && (
              <div className="sponsored-block">
                <div className="sponsored-label">Sponsored guide</div>
                <div className="sponsored-name">{sponsorName}</div>
                <p className="sponsored-desc">{sponsorDesc}</p>
                <a href={sponsorUrl} className="sponsored-cta">Learn more →</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
