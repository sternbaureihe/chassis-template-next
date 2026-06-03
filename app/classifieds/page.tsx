import type { Metadata } from 'next';
export const dynamic = 'force-dynamic';


const chassisCode = process.env.CHASSIS_CODE || 'W124';
const chassisName = process.env.CHASSIS_NAME || 'Mercedes-Benz W124';
const productionYears = process.env.PRODUCTION_YEARS || '1984–1997';
const siteUrl = process.env.SITE_URL || 'https://mb-w124.com';

export const metadata: Metadata = {
  title: `${chassisCode} Classifieds — Buy & Sell`,
  alternates: { canonical: `${siteUrl}/classifieds` },
};

export default function ClassifiedsPage() {
  return (
    <>
      <style>{`
        .page-hero{padding:48px 0 36px;border-bottom:0.5px solid #2a2a2a}
        .page-label{font-family:'JetBrains Mono',monospace;font-size:10px;color:#444;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px}
        .page-title{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700;color:#e8e6e1}
        .page-title em{color:#c8c5bd;font-style:normal}
        .content{padding:40px 0;display:grid;grid-template-columns:1fr 280px;gap:40px}
        .section-label{font-family:'JetBrains Mono',monospace;font-size:12px;color:#1A2744;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:16px;padding-bottom:8px;border-bottom:0.5px solid #2a2a2a}
        .listing-form{background:#161616;border:0.5px solid #2a2a2a;border-radius:4px;padding:24px}
        .listing-form h3{font-family:'Playfair Display',serif;font-size:18px;color:#c8c5bd;margin-bottom:6px}
        .listing-form p{font-size:12px;color:#666;margin-bottom:20px;line-height:1.5}
        .form-group{margin-bottom:14px}
        .form-label{font-family:'JetBrains Mono',monospace;font-size:9px;color:#555;letter-spacing:0.08em;text-transform:uppercase;display:block;margin-bottom:6px}
        .form-input{width:100%;background:#1e1e1e;border:0.5px solid #333;border-radius:3px;padding:8px 12px;font-size:13px;color:#c8c5bd;font-family:'DM Sans',sans-serif}
        .form-input::placeholder{color:#444}
        .form-textarea{width:100%;background:#1e1e1e;border:0.5px solid #333;border-radius:3px;padding:8px 12px;font-size:13px;color:#c8c5bd;font-family:'DM Sans',sans-serif;min-height:100px;resize:vertical}
        .price-note{font-family:'JetBrains Mono',monospace;font-size:9px;color:#444;margin-top:8px}
        .submit-btn{width:100%;background:#1A2744;border:none;border-radius:3px;padding:12px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#c8c5bd;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;transition:background 0.2s;margin-top:8px}
        .submit-btn:hover{background:#243860}
        .listings-empty{background:#161616;border:0.5px solid #2a2a2a;border-radius:4px;padding:40px;text-align:center}
        .listings-empty h3{font-family:'Playfair Display',serif;font-size:18px;color:#c8c5bd;margin-bottom:8px}
        .listings-empty p{font-size:13px;color:#666}
        .aside-info{background:#161616;border:0.5px solid #2a2a2a;border-radius:4px;padding:18px;margin-bottom:16px}
        .aside-label{font-family:'JetBrains Mono',monospace;font-size:9px;color:#333;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px}
        .aside-info p{font-size:12px;color:#666;line-height:1.6}
        .aside-info ul{padding-left:16px;margin-top:8px}
        .aside-info li{font-size:12px;color:#666;padding:3px 0}
        @media(max-width:768px){.content{grid-template-columns:1fr}}
      `}</style>
      <section className="page-hero">
        <div className="container">
          <div className="page-label">Mercedes-Benz · {chassisCode} · {productionYears}</div>
          <h1 className="page-title"><em>{chassisCode}</em> Classifieds</h1>
        </div>
      </section>
      <div className="container">
        <div className="content">
          <div>
            <div className="section-label">Active listings</div>
            <div className="listings-empty">
              <h3>No listings yet.</h3>
              <p>Be the first to list your {chassisName} on SternBaureihe.</p>
            </div>
            <div className="section-label" style={{ marginTop: '2rem' }}>List your {chassisCode}</div>
            <div className="listing-form">
              <h3>List your {chassisName}</h3>
              <p>$99 per listing · 90-day duration · Reaches verified enthusiasts across the SternBaureihe network.</p>
              <div className="form-group">
                <label className="form-label">Year</label>
                <input className="form-input" type="text" placeholder="e.g. 1992" />
              </div>
              <div className="form-group">
                <label className="form-label">Variant</label>
                <input className="form-input" type="text" placeholder="e.g. 300E Sedan" />
              </div>
              <div className="form-group">
                <label className="form-label">Mileage</label>
                <input className="form-input" type="text" placeholder="e.g. 142,000 miles" />
              </div>
              <div className="form-group">
                <label className="form-label">Asking price (USD)</label>
                <input className="form-input" type="text" placeholder="e.g. 18,500" />
              </div>
              <div className="form-group">
                <label className="form-label">Location</label>
                <input className="form-input" type="text" placeholder="City, State" />
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea className="form-textarea" placeholder="Describe the car — service history, condition, recent work..." />
              </div>
              <div className="form-group">
                <label className="form-label">Your email</label>
                <input className="form-input" type="email" placeholder="your@email.com" />
              </div>
              <div className="price-note">Listing fee: $99 · You will be redirected to payment after submission.</div>
              <button className="submit-btn" type="button">Submit listing →</button>
            </div>
          </div>
          <div className="aside">
            <div className="aside-info">
              <div className="aside-label">Why list here</div>
              <p>SternBaureihe reaches chassis-specific enthusiasts — the most qualified buyers for your car.</p>
              <ul>
                <li>90-day listing duration</li>
                <li>Verified buyer audience</li>
                <li>Photos auto-optimized</li>
                <li>Shared to SternBaureihe hub</li>
                <li>$99 flat fee, no commission</li>
              </ul>
            </div>
            <div className="aside-info">
              <div className="aside-label">Photo guidelines</div>
              <p>Include exterior (all 4 sides), interior, engine bay, undercarriage, and any known issues. Maximum 20 photos, JPG or PNG only.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}