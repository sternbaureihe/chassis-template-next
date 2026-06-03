import type { Metadata } from 'next';

const chassisCode = process.env.CHASSIS_CODE || 'W124';
const productionYears = process.env.PRODUCTION_YEARS || '1984–1997';
const siteUrl = process.env.SITE_URL || 'https://mb-w124.com';
let specialists: Array<{ name: string; location: string; specialty: string; desc: string; url: string; cta: string }> = [];
try { specialists = JSON.parse(process.env.SPECIALISTS || '[]'); } catch {}

export const metadata: Metadata = {
  title: `${chassisCode} Specialist Services`,
  alternates: { canonical: `${siteUrl}/specialists` },
};

export default function SpecialistsPage() {
  return (
    <>
      <style>{`
        .page-hero{padding:48px 0 36px;border-bottom:0.5px solid #2a2a2a}
        .page-label{font-family:'JetBrains Mono',monospace;font-size:10px;color:#444;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px}
        .page-title{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700;color:#e8e6e1}
        .page-title em{color:#c8c5bd;font-style:normal}
        .content{padding:40px 0}
        .section-label{font-family:'JetBrains Mono',monospace;font-size:12px;color:#1A2744;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:20px;padding-bottom:8px;border-bottom:0.5px solid #2a2a2a}
        .specialists-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;margin-bottom:2rem}
        .specialist-card{background:#161616;border:0.5px solid #2a2a2a;border-radius:4px;padding:20px}
        .specialist-location{font-family:'JetBrains Mono',monospace;font-size:9px;color:#444;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:8px}
        .specialist-name{font-size:15px;color:#c8c5bd;font-weight:500;margin-bottom:4px}
        .specialist-specialty{font-family:'JetBrains Mono',monospace;font-size:10px;color:#1A2744;margin-bottom:10px}
        .specialist-desc{font-size:12px;color:#777;line-height:1.6;margin-bottom:14px}
        .specialist-cta{font-family:'JetBrains Mono',monospace;font-size:10px;color:#1A2744;border:0.5px solid #1A2744;padding:6px 12px;border-radius:3px;display:inline-block;transition:all 0.2s}
        .specialist-cta:hover{background:#1A2744;color:#e8e6e1}
        .advertise-cta{background:#161616;border:0.5px solid #2a2a2a;border-radius:4px;padding:24px;text-align:center;margin-top:2rem}
        .advertise-cta h3{font-family:'Playfair Display',serif;font-size:18px;color:#c8c5bd;margin-bottom:8px}
        .advertise-cta p{font-size:13px;color:#777;margin-bottom:16px}
        .advertise-cta a{font-family:'JetBrains Mono',monospace;font-size:11px;color:#1A2744;border:0.5px solid #1A2744;padding:8px 20px;border-radius:3px;display:inline-block;transition:all 0.2s}
        .advertise-cta a:hover{background:#1A2744;color:#e8e6e1}
      `}</style>
      <section className="page-hero">
        <div className="container">
          <div className="page-label">Mercedes-Benz · {chassisCode} · {productionYears}</div>
          <h1 className="page-title"><em>{chassisCode}</em> Specialists</h1>
        </div>
      </section>
      <div className="container">
        <div className="content">
          <div className="section-label">Verified specialist services</div>
          {specialists.length > 0 && (
            <div className="specialists-grid">
              {specialists.map((s, i) => (
                <div className="specialist-card" key={i}>
                  <div className="specialist-location">{s.location}</div>
                  <div className="specialist-name">{s.name}</div>
                  <div className="specialist-specialty">{s.specialty}</div>
                  <p className="specialist-desc">{s.desc}</p>
                  <a href={s.url} className="specialist-cta">{s.cta} →</a>
                </div>
              ))}
            </div>
          )}
          <div className="advertise-cta">
            <h3>Are you a {chassisCode} specialist?</h3>
            <p>Reach verified {chassisCode} owners and enthusiasts in your market. Geo-targeted advertising on SternBaureihe.</p>
            <a href="https://sternbaureihe.com/advertise/">List your shop →</a>
          </div>
        </div>
      </div>
    </>
  );
}
