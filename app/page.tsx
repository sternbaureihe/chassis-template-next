import type { Metadata } from 'next';
import AdSlot from '../components/AdSlot';
export const dynamic = 'force-dynamic';

const chassisCode = process.env.CHASSIS_CODE || 'W124';
const chassisName = process.env.CHASSIS_NAME || 'Mercedes-Benz W124';
const productionYears = process.env.PRODUCTION_YEARS || '1984–1997';
const productionUnits = process.env.PRODUCTION_UNITS || '2.7M';
const variantCount = process.env.VARIANT_COUNT || '14';
const collectorIndex = process.env.COLLECTOR_INDEX || '9.2';
const heroTitle = process.env.HERO_TITLE || 'Built to Last Forever';
const heroSubtitle = process.env.HERO_SUBTITLE || 'The E-Class that defined a generation. Overengineered to Mercedes-Benz standards that no longer exist, the W124 remains the benchmark against which every Mercedes is measured.';
const overviewText = process.env.OVERVIEW_TEXT || 'The W124 was Mercedes-Benz at its most committed. Introduced in 1984 as the successor to the W123, it arrived over-engineered by any commercial standard.';
const collectorText = process.env.COLLECTOR_TEXT || 'The W124 market has strengthened consistently since 2018. Estate variants command a 25-40% premium over equivalent sedans in comparable condition.';
const specEngine = process.env.SPEC_ENGINE || '2.0L – 5.0L';
const specBody = process.env.SPEC_BODY || 'Sedan, Estate, Coupe, Cabriolet';
const specTopVariant = process.env.SPEC_TOP_VARIANT || 'E 500 (W124.036)';
const specTransmission = process.env.SPEC_TRANSMISSION || '4-speed auto / 5-speed manual';
const specSuccessor = process.env.SPEC_SUCCESSOR || 'W210';
const specPlatform = process.env.SPEC_PLATFORM || chassisCode;
const gamNetworkCode = process.env.GAM_NETWORK_CODE || 'PLACEHOLDER';

const siteUrl = process.env.SITE_URL || 'https://mb-w124.com';

let relatedChassis: Array<{ code: string; label: string; years: string }> = [];
try {
  relatedChassis = JSON.parse(process.env.RELATED_CHASSIS || '[]');
} catch {}

export const metadata: Metadata = {
  alternates: { canonical: siteUrl },
  openGraph: { url: siteUrl, title: `${chassisName} (${chassisCode}) — The Definitive Resource | SternBaureihe` },
  twitter: { title: `${chassisName} (${chassisCode}) — The Definitive Resource | SternBaureihe` },
};

const adUnitBase = gamNetworkCode !== 'PLACEHOLDER'
  ? `/${gamNetworkCode}/SternBaureihe/${chassisCode}`
  : null;

export default function HomePage() {
  return (
    <>
      <style>{`
        .hero { padding:52px 0 40px; border-bottom:0.5px solid #2a2a2a; }
        .chassis-tag { font-family:'JetBrains Mono',monospace; font-size:13px; color:#6e6c67; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:12px; }
        .hero-title { font-family:'Playfair Display',serif; font-size:clamp(2.2rem,5vw,3.5rem); font-weight:700; color:#e8e6e1; line-height:1.1; margin-bottom:10px; }
        .hero-title em { color:#c8c5bd; font-style:normal; }
        .hero-sub { font-size:17px; color:#888; line-height:1.7; max-width:560px; margin-bottom:24px; }
        .hero-tagline { font-family:'Playfair Display',serif; font-size:15px; font-style:italic; color:#6e6c67; border-left:2px solid #1A2744; padding-left:12px; }
        .stats { display:grid; grid-template-columns:repeat(4,1fr); border-top:0.5px solid #2a2a2a; border-bottom:0.5px solid #2a2a2a; }
        .stat { padding:20px 24px; border-right:0.5px solid #2a2a2a; }
        .stat:last-child { border-right:none; }
        .stat-label { font-family:'JetBrains Mono',monospace; font-size:12px; color:#444; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:6px; }
        .stat-value { font-family:'JetBrains Mono',monospace; font-size:22px; font-weight:500; color:#c8c5bd; }
        .stat-unit { font-size:11px; color:#555; margin-left:3px; }
        .body-grid { display:grid; grid-template-columns:1fr 280px; border-bottom:0.5px solid #2a2a2a; }
        .body-main { padding:40px 0; border-right:0.5px solid #2a2a2a; padding-right:40px; }
        .body-aside { padding:40px 0 40px 32px; }
        .section-label { font-family:'JetBrains Mono',monospace; font-size:12px; color:#1A2744; letter-spacing:0.12em; text-transform:uppercase; margin-bottom:16px; padding-bottom:8px; border-bottom:0.5px solid #2a2a2a; }
        .body-text { font-size:16px; color:#aaa; line-height:1.85; margin-bottom:32px; }
        .specs-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:#2a2a2a; border:0.5px solid #2a2a2a; border-radius:4px; overflow:hidden; margin-bottom:32px; }
        .spec-item { background:#1a1a1a; padding:12px 16px; }
        .spec-key { font-family:'JetBrains Mono',monospace; font-size:12px; color:#444; letter-spacing:0.07em; text-transform:uppercase; margin-bottom:4px; }
        .spec-val { font-family:'JetBrains Mono',monospace; font-size:14px; color:#c8c5bd; font-weight:500; }
        .ad-slot-wrapper { background:#161616; border:0.5px solid #2a2a2a; border-radius:4px; margin-bottom:16px; overflow:hidden; }
        .related { background:#161616; border:0.5px solid #2a2a2a; border-radius:4px; padding:16px; margin-bottom:16px; }
        .related-title { font-family:'JetBrains Mono',monospace; font-size:12px; color:#444; letter-spacing:0.09em; text-transform:uppercase; margin-bottom:12px; }
        .related-item { font-size:14px; color:#777; padding:6px 0; border-bottom:0.5px solid #1e1e1e; display:flex; justify-content:space-between; }
        .related-item:last-child { border-bottom:none; }
        .related-item span { font-family:'JetBrains Mono',monospace; font-size:10px; color:#444; }
        .related-item a { color:#777; transition:color 0.2s; }
        .related-item a:hover { color:#c8c5bd; }
        .email-capture { background:#161616; border:0.5px solid #2a2a2a; border-radius:4px; padding:20px; margin-top:16px; }
        .email-capture h4 { font-family:'Playfair Display',serif; font-size:16px; color:#c8c5bd; margin-bottom:6px; }
        .email-capture p { font-size:11px; color:#666; margin-bottom:12px; line-height:1.5; }
        .email-form { display:flex; flex-direction:column; gap:8px; }
        .email-input { background:#1e1e1e; border:0.5px solid #333; border-radius:3px; padding:8px 12px; font-size:14px; color:#c8c5bd; font-family:'DM Sans',sans-serif; width:100%; }
        .email-input::placeholder { color:#444; }
        .email-submit { background:#1A2744; border:none; border-radius:3px; padding:8px 12px; font-family:'JetBrains Mono',monospace; font-size:12px; color:#c8c5bd; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; transition:background 0.2s; }
        .email-submit:hover { background:#243860; }
        .cta-strip { padding:2rem 0; display:flex; gap:12px; flex-wrap:wrap; }
        .cta-btn { font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:0.08em; text-transform:uppercase; padding:10px 20px; border-radius:3px; transition:all 0.2s; }
        .cta-primary { background:#1A2744; color:#c8c5bd; }
        .cta-primary:hover { background:#243860; color:#e8e6e1; }
        .cta-secondary { border:0.5px solid #2a2a2a; color:#777; }
        .cta-secondary:hover { border-color:#444; color:#c8c5bd; }
        @media (max-width:900px) {
          .body-grid { grid-template-columns:1fr; }
          .body-main { border-right:none; padding-right:0; border-bottom:0.5px solid #2a2a2a; padding-bottom:2rem; }
          .body-aside { padding-left:0; }
          .stats { grid-template-columns:repeat(2,1fr); }
          .stat:nth-child(2) { border-right:none; }
          .stat:nth-child(3) { border-top:0.5px solid #2a2a2a; }
        }
        @media (max-width:480px) {
          .hero { padding:32px 0 28px; }
          .stats { grid-template-columns:repeat(2,1fr); }
          .specs-grid { grid-template-columns:1fr; }
        }
      `}</style>

      <section className="hero">
        <div className="container">
          <div className="chassis-tag">Mercedes-Benz · Chassis {chassisCode} · {productionYears}</div>
          <h1 className="hero-title">The <em>{chassisCode}</em> —<br />{heroTitle}</h1>
          <p className="hero-sub">{heroSubtitle}</p>
          <div className="hero-tagline">Every Star Has a Story.</div>
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <div className="stat-label">Production</div>
          <div className="stat-value">{productionUnits}<span className="stat-unit">units</span></div>
        </div>
        <div className="stat">
          <div className="stat-label">Years</div>
          <div className="stat-value" style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '16px', paddingTop: '3px' }}>{productionYears}</div>
        </div>
        <div className="stat">
          <div className="stat-label">Variants</div>
          <div className="stat-value">{variantCount}<span className="stat-unit">body</span></div>
        </div>
        <div className="stat">
          <div className="stat-label">Collector Index</div>
          <div className="stat-value">{collectorIndex}<span className="stat-unit">/ 10</span></div>
        </div>
      </section>

      <div className="container">
        <div className="body-grid">
          <div className="body-main">
            <div className="section-label">Chassis overview</div>
            <p className="body-text">{overviewText}</p>

            {adUnitBase && (
              <div className="ad-slot-wrapper">
                <AdSlot
                  slotId={`sb-${chassisCode}-mr1`}
                  adUnitPath={`${adUnitBase}/content_rectangle_1`}
                  sizes={[[300, 250]]}
                  lazy={true}
                />
              </div>
            )}

            <div className="section-label">Key specifications</div>
            <div className="specs-grid">
              <div className="spec-item"><div className="spec-key">Platform</div><div className="spec-val">{specPlatform}</div></div>
              <div className="spec-item"><div className="spec-key">Body styles</div><div className="spec-val">{specBody}</div></div>
              <div className="spec-item"><div className="spec-key">Engine range</div><div className="spec-val">{specEngine}</div></div>
              <div className="spec-item"><div className="spec-key">Top variant</div><div className="spec-val">{specTopVariant}</div></div>
              <div className="spec-item"><div className="spec-key">Transmission</div><div className="spec-val">{specTransmission}</div></div>
              <div className="spec-item"><div className="spec-key">Successor</div><div className="spec-val">{specSuccessor}</div></div>
            </div>

            <div className="section-label">Collector notes</div>
            <p className="body-text">{collectorText}</p>

            {adUnitBase && (
              <div className="ad-slot-wrapper">
                <AdSlot
                  slotId={`sb-${chassisCode}-mr2`}
                  adUnitPath={`${adUnitBase}/content_rectangle_2`}
                  sizes={[[300, 250]]}
                  lazy={true}
                />
              </div>
            )}

            <div className="cta-strip">
              <a href="/guides" className="cta-btn cta-primary">Buyer&apos;s Guide →</a>
              <a href="/specs" className="cta-btn cta-secondary">Full Specifications</a>
              <a href="/classifieds" className="cta-btn cta-secondary">View Classifieds</a>
              <a href="/market" className="cta-btn cta-secondary">Market Data</a>
            </div>
          </div>

          <div className="body-aside">
            <div className="section-label">Advertising</div>

            {adUnitBase ? (
              <div className="ad-slot-wrapper">
                <AdSlot
                  slotId={`sb-${chassisCode}-atf`}
                  adUnitPath={`${adUnitBase}/atf_leaderboard`}
                  sizes={[[728, 90], [320, 50]]}
                  lazy={false}
                />
              </div>
            ) : (
              <div style={{ background: '#161616', border: '0.5px solid #2a2a2a', borderRadius: '4px', padding: '18px', marginBottom: '16px' }}>
                <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '12px', color: '#333', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Advertisement</div>
                <div style={{ fontSize: '13px', color: '#555' }}>Ad inventory coming soon</div>
              </div>
            )}

            {relatedChassis.length > 0 && (
              <div className="related">
                <div className="related-title">Related chassis</div>
                {relatedChassis.map((c) => (
                  <div className="related-item" key={c.code}>
                    <a href={`https://mb-${c.code.toLowerCase()}.com`}>{c.code} — {c.label}</a>
                    <span>{c.years}</span>
                  </div>
                ))}
              </div>
            )}

            {adUnitBase && (
              <div className="ad-slot-wrapper">
                <AdSlot
                  slotId={`sb-${chassisCode}-btf`}
                  adUnitPath={`${adUnitBase}/btf_skyscraper`}
                  sizes={[[160, 600], [300, 250]]}
                  lazy={true}
                />
              </div>
            )}

            <div className="email-capture">
              <h4>Get the {chassisCode} Buyer&apos;s Guide</h4>
              <p>Free PDF — what to look for, what to avoid, current market values.</p>
              <div className="email-form">
                <input className="email-input" type="email" placeholder="your@email.com" />
                <button className="email-submit" type="button">Send me the guide →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}