import type { Metadata } from 'next';

const chassisCode = process.env.CHASSIS_CODE || 'W124';
const chassisName = process.env.CHASSIS_NAME || 'Mercedes-Benz W124';
const productionYears = process.env.PRODUCTION_YEARS || '1984–1997';
const siteUrl = process.env.SITE_URL || 'https://mb-w124.com';

export const metadata: Metadata = {
  title: `${chassisCode} Owner Registry`,
  alternates: { canonical: `${siteUrl}/registry` },
};

export default function RegistryPage() {
  return (
    <>
      <style>{`
        .page-hero{padding:48px 0 36px;border-bottom:0.5px solid #2a2a2a}
        .page-label{font-family:'JetBrains Mono',monospace;font-size:10px;color:#444;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px}
        .page-title{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700;color:#e8e6e1}
        .page-title em{color:#c8c5bd;font-style:normal}
        .content{padding:40px 0;display:grid;grid-template-columns:1fr 320px;gap:48px}
        .section-label{font-family:'JetBrains Mono',monospace;font-size:12px;color:#1A2744;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:16px;padding-bottom:8px;border-bottom:0.5px solid #2a2a2a}
        .registry-intro{font-size:14px;color:#aaa;line-height:1.85;margin-bottom:2rem}
        .registry-form{background:#161616;border:0.5px solid #2a2a2a;border-radius:4px;padding:24px}
        .registry-form h3{font-family:'Playfair Display',serif;font-size:18px;color:#c8c5bd;margin-bottom:6px}
        .registry-form p{font-size:12px;color:#666;margin-bottom:20px}
        .form-group{margin-bottom:14px}
        .form-label{font-family:'JetBrains Mono',monospace;font-size:9px;color:#555;letter-spacing:0.08em;text-transform:uppercase;display:block;margin-bottom:6px}
        .form-input{width:100%;background:#1e1e1e;border:0.5px solid #333;border-radius:3px;padding:8px 12px;font-size:13px;color:#c8c5bd;font-family:'DM Sans',sans-serif}
        .form-input::placeholder{color:#444}
        .pricing{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px}
        .price-tier{background:#1a1a1a;border:0.5px solid #2a2a2a;border-radius:3px;padding:14px}
        .price-tier.featured{border-color:#1A2744}
        .price-tier-label{font-family:'JetBrains Mono',monospace;font-size:9px;color:#555;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:6px}
        .price-tier-price{font-family:'JetBrains Mono',monospace;font-size:18px;color:#c8c5bd;margin-bottom:4px}
        .price-tier-desc{font-size:11px;color:#555;line-height:1.4}
        .submit-btn{width:100%;background:#1A2744;border:none;border-radius:3px;padding:12px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c8c5bd;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;transition:background 0.2s}
        .submit-btn:hover{background:#243860}
        .benefits{background:#161616;border:0.5px solid #2a2a2a;border-radius:4px;padding:20px}
        .benefits h4{font-family:'JetBrains Mono',monospace;font-size:9px;color:#444;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:12px;font-weight:400}
        .benefits ul{list-style:none;padding:0}
        .benefits li{font-size:12px;color:#666;padding:5px 0;border-bottom:0.5px solid #1e1e1e}
        .benefits li:last-child{border-bottom:none}
        .benefits li::before{content:"→ ";color:#1A2744;font-family:'JetBrains Mono',monospace}
        @media(max-width:768px){.content{grid-template-columns:1fr}.pricing{grid-template-columns:1fr}}
      `}</style>
      <section className="page-hero">
        <div className="container">
          <div className="page-label">Mercedes-Benz · {chassisCode} · {productionYears}</div>
          <h1 className="page-title"><em>{chassisCode}</em> Owner Registry</h1>
        </div>
      </section>
      <div className="container">
        <div className="content">
          <div>
            <div className="section-label">About the registry</div>
            <p className="registry-intro">The SternBaureihe {chassisCode} registry documents surviving examples of the {chassisName} worldwide. Register your car to contribute to the historical record, connect with other owners, and receive the {chassisCode} owner newsletter.</p>
            <div className="section-label">Register your {chassisCode}</div>
            <div className="registry-form">
              <h3>Register your {chassisName}</h3>
              <p>Basic registration is free. Premium membership unlocks the owner newsletter, market alerts, and registry badge.</p>
              <div className="pricing">
                <div className="price-tier">
                  <div className="price-tier-label">Basic</div>
                  <div className="price-tier-price">Free</div>
                  <div className="price-tier-desc">Registry listing, VIN documented</div>
                </div>
                <div className="price-tier featured">
                  <div className="price-tier-label">Premium</div>
                  <div className="price-tier-price">$15<span style={{ fontSize: '11px', color: '#555' }}>/yr</span></div>
                  <div className="price-tier-desc">Newsletter, market alerts, registry badge</div>
                </div>
              </div>
              <div className="form-group"><label className="form-label">Year</label><input className="form-input" type="text" placeholder="e.g. 1992" /></div>
              <div className="form-group"><label className="form-label">Variant</label><input className="form-input" type="text" placeholder="e.g. 300E Sedan" /></div>
              <div className="form-group"><label className="form-label">VIN (optional)</label><input className="form-input" type="text" placeholder="17-character VIN" /></div>
              <div className="form-group"><label className="form-label">Country</label><input className="form-input" type="text" placeholder="e.g. United States" /></div>
              <div className="form-group"><label className="form-label">Your email</label><input className="form-input" type="email" placeholder="your@email.com" /></div>
              <button className="submit-btn" type="button">Register my {chassisCode} →</button>
            </div>
          </div>
          <div>
            <div className="benefits">
              <h4>Premium member benefits</h4>
              <ul>
                <li>Monthly {chassisCode} owner newsletter</li>
                <li>Market value alerts</li>
                <li>Registry member badge</li>
                <li>Early access to classified listings</li>
                <li>Priority specialist referrals</li>
                <li>Recall and technical bulletin alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
