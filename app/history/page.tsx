import type { Metadata } from 'next';

const chassisCode = process.env.CHASSIS_CODE || 'W124';
const productionYears = process.env.PRODUCTION_YEARS || '1984–1997';
const siteUrl = process.env.SITE_URL || 'https://mb-w124.com';
const historyIntro = process.env.HISTORY_INTRO || 'The W124 represents the apex of Mercedes-Benz engineering philosophy.';
const historyBody1 = process.env.HISTORY_BODY1 || '';
const historyBody2 = process.env.HISTORY_BODY2 || '';
const historyBody3 = process.env.HISTORY_BODY3 || '';
let timeline: Array<{ year: string; event: string }> = [];
try { timeline = JSON.parse(process.env.TIMELINE || '[]'); } catch {}

export const metadata: Metadata = {
  title: `History of the ${chassisCode}`,
  alternates: { canonical: `${siteUrl}/history` },
};

export default function HistoryPage() {
  return (
    <>
      <style>{`
        .page-hero{padding:48px 0 36px;border-bottom:0.5px solid #2a2a2a}
        .page-label{font-family:'JetBrains Mono',monospace;font-size:10px;color:#444;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px}
        .page-title{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700;color:#e8e6e1;line-height:1.15}
        .page-title em{color:#c8c5bd;font-style:normal}
        .content{padding:40px 0;display:grid;grid-template-columns:1fr 260px;gap:48px}
        .prose p{font-size:15px;color:#aaa;line-height:1.85;margin-bottom:1.5rem}
        .prose p strong{color:#c8c5bd;font-weight:500}
        .section-label{font-family:'JetBrains Mono',monospace;font-size:12px;color:#1A2744;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:20px;padding-bottom:8px;border-bottom:0.5px solid #2a2a2a;margin-top:2rem}
        .timeline{margin:0;padding:0;list-style:none}
        .timeline-item{display:flex;gap:20px;padding:14px 0;border-bottom:0.5px solid #1e1e1e}
        .timeline-item:last-child{border-bottom:none}
        .timeline-year{font-family:'JetBrains Mono',monospace;font-size:12px;color:#c8c5bd;font-weight:500;min-width:40px;padding-top:1px}
        .timeline-event{font-size:13px;color:#888;line-height:1.5}
        .aside-section{background:#161616;border:0.5px solid #2a2a2a;border-radius:4px;padding:18px;margin-bottom:16px}
        .aside-label{font-family:'JetBrains Mono',monospace;font-size:9px;color:#333;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px}
        .aside-links a{display:block;font-size:12px;color:#777;padding:5px 0;border-bottom:0.5px solid #1e1e1e;transition:color 0.2s}
        .aside-links a:last-child{border-bottom:none}
        .aside-links a:hover{color:#c8c5bd}
        @media(max-width:768px){.content{grid-template-columns:1fr}}
      `}</style>
      <section className="page-hero">
        <div className="container">
          <div className="page-label">Mercedes-Benz · {chassisCode} · {productionYears}</div>
          <h1 className="page-title">History of the <em>{chassisCode}</em></h1>
        </div>
      </section>
      <div className="container">
        <div className="content">
          <div className="prose">
            <p><strong>{historyIntro}</strong></p>
            {historyBody1 && <p>{historyBody1}</p>}
            {historyBody2 && <p>{historyBody2}</p>}
            {historyBody3 && <p>{historyBody3}</p>}
            {timeline.length > 0 && (
              <>
                <div className="section-label">Production timeline</div>
                <ul className="timeline">
                  {timeline.map((t, i) => (
                    <li className="timeline-item" key={i}>
                      <span className="timeline-year">{t.year}</span>
                      <span className="timeline-event">{t.event}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="aside">
            <div className="aside-section">
              <div className="aside-label">Explore the {chassisCode}</div>
              <div className="aside-links">
                <a href="/specs">Full specifications</a>
                <a href="/guides">Owner guides</a>
                <a href="/market">Market data</a>
                <a href="/classifieds">Classifieds</a>
                <a href="/recalls">Recall database</a>
              </div>
            </div>
            <div className="aside-section">
              <div className="aside-label">Part of the network</div>
              <div className="aside-links">
                <a href="https://sternbaureihe.com">SternBaureihe hub</a>
                <a href="https://sternbaureihe.com/market/">Cross-chassis market data</a>
                <a href="https://sternbaureihe.com/advertise/">Advertise with us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
