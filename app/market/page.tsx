import type { Metadata } from 'next';

const chassisCode = process.env.CHASSIS_CODE || 'W124';
const productionYears = process.env.PRODUCTION_YEARS || '1984–1997';
const siteUrl = process.env.SITE_URL || 'https://mb-w124.com';
const marketSummary = process.env.MARKET_SUMMARY || '';
let priceRanges: Array<{ variant: string; condition: string; range: string }> = [];
try { priceRanges = JSON.parse(process.env.PRICE_RANGES || '[]'); } catch {}

export const metadata: Metadata = {
  title: `${chassisCode} Market Data & Pricing`,
  alternates: { canonical: `${siteUrl}/market` },
};

export default function MarketPage() {
  return (
    <>
      <style>{`
        .page-hero{padding:48px 0 36px;border-bottom:0.5px solid #2a2a2a}
        .page-label{font-family:'JetBrains Mono',monospace;font-size:10px;color:#444;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px}
        .page-title{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700;color:#e8e6e1}
        .page-title em{color:#c8c5bd;font-style:normal}
        .content{padding:40px 0}
        .section-label{font-family:'JetBrains Mono',monospace;font-size:12px;color:#1A2744;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:16px;padding-bottom:8px;border-bottom:0.5px solid #2a2a2a}
        .market-summary{font-size:15px;color:#aaa;line-height:1.85;margin-bottom:2rem}
        .price-table{width:100%;border-collapse:collapse;margin-bottom:2rem}
        .price-table th{font-family:'JetBrains Mono',monospace;font-size:9px;color:#444;text-transform:uppercase;letter-spacing:0.08em;padding:8px 16px;text-align:left;border-bottom:0.5px solid #2a2a2a}
        .price-table td{padding:12px 16px;font-size:13px;border-bottom:0.5px solid #1e1e1e;color:#888}
        .price-table td:first-child{color:#c8c5bd;font-weight:500}
        .price-table td:last-child{font-family:'JetBrains Mono',monospace;color:#c8c5bd}
        .dsi-cta{background:#161616;border:0.5px solid #2a2a2a;border-radius:4px;padding:24px;margin-top:2rem}
        .dsi-cta h3{font-family:'Playfair Display',serif;font-size:18px;color:#c8c5bd;margin-bottom:8px}
        .dsi-cta p{font-size:13px;color:#777;margin-bottom:16px;line-height:1.6}
        .dsi-cta a{font-family:'JetBrains Mono',monospace;font-size:11px;color:#1A2744;border:0.5px solid #1A2744;padding:8px 20px;border-radius:3px;display:inline-block;transition:all 0.2s}
        .dsi-cta a:hover{background:#1A2744;color:#e8e6e1}
      `}</style>
      <section className="page-hero">
        <div className="container">
          <div className="page-label">Mercedes-Benz · {chassisCode} · {productionYears}</div>
          <h1 className="page-title"><em>{chassisCode}</em> Market Data</h1>
        </div>
      </section>
      <div className="container">
        <div className="content">
          <div className="section-label">Market overview</div>
          {marketSummary && <p className="market-summary">{marketSummary}</p>}
          {priceRanges.length > 0 && (
            <>
              <div className="section-label">Current price ranges</div>
              <table className="price-table">
                <thead><tr><th>Variant</th><th>Condition</th><th>Price range</th></tr></thead>
                <tbody>
                  {priceRanges.map((p, i) => (
                    <tr key={i}><td>{p.variant}</td><td>{p.condition}</td><td>{p.range}</td></tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          <div className="dsi-cta">
            <h3>Full Market Intelligence Report</h3>
            <p>Dream Shield Intelligence publishes in-depth {chassisCode} market reports including auction data, regional pricing, and 12-month trend analysis. Available as a standalone purchase or with an annual data subscription.</p>
            <a href="https://sternbaureihe.com/market/reports/">View reports →</a>
          </div>
        </div>
      </div>
    </>
  );
}
