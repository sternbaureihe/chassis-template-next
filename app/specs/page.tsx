import type { Metadata } from 'next';

const chassisCode = process.env.CHASSIS_CODE || 'W124';
const productionYears = process.env.PRODUCTION_YEARS || '1984–1997';
const siteUrl = process.env.SITE_URL || 'https://mb-w124.com';
let specs: Record<string, string> = {};
try { specs = JSON.parse(process.env.FULL_SPECS || '{}'); } catch {}

export const metadata: Metadata = {
  title: `${chassisCode} Specifications`,
  alternates: { canonical: `${siteUrl}/specs` },
};

export default function SpecsPage() {
  return (
    <>
      <style>{`
        .page-hero{padding:48px 0 36px;border-bottom:0.5px solid #2a2a2a}
        .page-label{font-family:'JetBrains Mono',monospace;font-size:10px;color:#444;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px}
        .page-title{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700;color:#e8e6e1}
        .page-title em{color:#c8c5bd;font-style:normal}
        .content{padding:40px 0}
        .section-label{font-family:'JetBrains Mono',monospace;font-size:12px;color:#1A2744;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:16px;padding-bottom:8px;border-bottom:0.5px solid #2a2a2a}
        .specs-table{width:100%;border-collapse:collapse;margin-bottom:2rem}
        .specs-table tr{border-bottom:0.5px solid #1e1e1e}
        .specs-table tr:last-child{border-bottom:none}
        .specs-table td{padding:12px 16px;font-size:13px}
        .specs-table td:first-child{font-family:'JetBrains Mono',monospace;font-size:10px;color:#555;text-transform:uppercase;letter-spacing:0.06em;width:40%;background:#1a1a1a}
        .specs-table td:last-child{color:#c8c5bd;font-family:'JetBrains Mono',monospace}
      `}</style>
      <section className="page-hero">
        <div className="container">
          <div className="page-label">Mercedes-Benz · {chassisCode} · {productionYears}</div>
          <h1 className="page-title"><em>{chassisCode}</em> Specifications</h1>
        </div>
      </section>
      <div className="container">
        <div className="content">
          <div className="section-label">Technical specifications</div>
          <table className="specs-table">
            <tbody>
              {Object.entries(specs).map(([key, val]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
