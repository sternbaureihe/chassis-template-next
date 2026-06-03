import type { Metadata } from 'next';
export const dynamic = 'force-dynamic';


const chassisCode = process.env.CHASSIS_CODE || 'W124';
const productionYears = process.env.PRODUCTION_YEARS || '1984–1997';
const siteUrl = process.env.SITE_URL || 'https://mb-w124.com';
const printfulStoreUrl = process.env.PRINTFUL_STORE_URL || 'https://sternbaureihe.com/merch/';

export const metadata: Metadata = {
  title: `${chassisCode} Merchandise`,
  alternates: { canonical: `${siteUrl}/merch` },
};

export default function MerchPage() {
  return (
    <>
      <style>{`
        .page-hero{padding:48px 0 36px;border-bottom:0.5px solid #2a2a2a}
        .page-label{font-family:'JetBrains Mono',monospace;font-size:10px;color:#444;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px}
        .page-title{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700;color:#e8e6e1}
        .page-title em{color:#c8c5bd;font-style:normal}
        .content{padding:40px 0}
        .section-label{font-family:'JetBrains Mono',monospace;font-size:12px;color:#1A2744;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:16px;padding-bottom:8px;border-bottom:0.5px solid #2a2a2a}
        .merch-intro{font-size:14px;color:#aaa;line-height:1.85;margin-bottom:2rem;max-width:600px}
        .merch-cta{background:#161616;border:0.5px solid #2a2a2a;border-radius:4px;padding:40px;text-align:center}
        .merch-cta h3{font-family:'Playfair Display',serif;font-size:22px;color:#c8c5bd;margin-bottom:10px}
        .merch-cta p{font-size:13px;color:#777;margin-bottom:20px;line-height:1.6}
        .merch-cta a{font-family:'JetBrains Mono',monospace;font-size:11px;color:#1A2744;border:0.5px solid #1A2744;padding:10px 24px;border-radius:3px;display:inline-block;transition:all 0.2s}
        .merch-cta a:hover{background:#1A2744;color:#e8e6e1}
      `}</style>
      <section className="page-hero">
        <div className="container">
          <div className="page-label">Mercedes-Benz · {chassisCode} · {productionYears}</div>
          <h1 className="page-title"><em>{chassisCode}</em> Merchandise</h1>
        </div>
      </section>
      <div className="container">
        <div className="content">
          <div className="section-label">Wear the chassis</div>
          <p className="merch-intro">Chassis-specific apparel and prints for {chassisCode} owners. Every item is printed on demand — no inventory, shipped directly to you.</p>
          <div className="merch-cta">
            <h3>{chassisCode} Collection</h3>
            <p>T-shirts, prints, stickers, and accessories — all specific to the {chassisCode}. Printed on demand by Printful, shipped worldwide.</p>
            <a href={printfulStoreUrl}>Shop {chassisCode} merchandise →</a>
          </div>
        </div>
      </div>
    </>
  );
}