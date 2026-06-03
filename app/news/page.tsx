import type { Metadata } from 'next';
export const dynamic = 'force-dynamic';


const chassisCode = process.env.CHASSIS_CODE || 'W124';
const productionYears = process.env.PRODUCTION_YEARS || '1984–1997';
const siteUrl = process.env.SITE_URL || 'https://mb-w124.com';

export const metadata: Metadata = {
  title: `${chassisCode} News & Features`,
  alternates: { canonical: `${siteUrl}/news` },
};

export default function NewsPage() {
  return (
    <>
      <style>{`
        .page-hero{padding:48px 0 36px;border-bottom:0.5px solid #2a2a2a}
        .page-label{font-family:'JetBrains Mono',monospace;font-size:10px;color:#444;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px}
        .page-title{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700;color:#e8e6e1}
        .page-title em{color:#c8c5bd;font-style:normal}
        .content{padding:40px 0}
        .coming-soon{background:#161616;border:0.5px solid #2a2a2a;border-radius:4px;padding:40px;text-align:center}
        .coming-soon h3{font-family:'Playfair Display',serif;font-size:20px;color:#c8c5bd;margin-bottom:10px}
        .coming-soon p{font-size:13px;color:#666;margin-bottom:20px}
        .coming-soon a{font-family:'JetBrains Mono',monospace;font-size:10px;color:#1A2744;border:0.5px solid #1A2744;padding:8px 20px;border-radius:3px;display:inline-block}
      `}</style>
      <section className="page-hero">
        <div className="container">
          <div className="page-label">Mercedes-Benz · {chassisCode} · {productionYears}</div>
          <h1 className="page-title"><em>{chassisCode}</em> News & Features</h1>
        </div>
      </section>
      <div className="container">
        <div className="content">
          <div className="coming-soon">
            <h3>Editorial coming soon.</h3>
            <p>The {chassisCode} editorial feed is being built. Subscribe to be notified when the first features publish.</p>
            <a href="https://sternbaureihe.com">Visit SternBaureihe hub →</a>
          </div>
        </div>
      </div>
    </>
  );
}