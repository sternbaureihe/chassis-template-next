const currentYear = new Date().getFullYear();

interface FooterProps {
  chassisCode: string;
  siteUrl: string;
}

export default function Footer({ chassisCode, siteUrl }: FooterProps) {
  return (
    <>
      <style>{`
        footer { background:#161616; border-top:0.5px solid #2a2a2a; margin-top:4rem; }
        .footer-inner { max-width:1200px; margin:0 auto; padding:2.5rem 1.5rem; display:grid; grid-template-columns:1fr 1fr 1fr; gap:2rem; }
        .footer-brand p { font-family:'DM Sans',sans-serif; font-size:11px; font-weight:500; letter-spacing:0.14em; color:#c8c5bd; text-transform:uppercase; margin-bottom:8px; }
        .footer-brand span { color:#3a3a3a; margin:0 5px; }
        .footer-tagline { font-family:'Playfair Display',serif; font-style:italic; font-size:14px; color:#444; margin-bottom:12px; }
        .footer-domain { font-family:'JetBrains Mono',monospace; font-size:12px; color:#333; letter-spacing:0.06em; }
        .footer-col h4 { font-family:'JetBrains Mono',monospace; font-size:11px; color:#444; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:12px; font-weight:400; }
        .footer-col a { display:block; font-size:14px; color:#666; padding:3px 0; transition:color 0.2s; }
        .footer-col a:hover { color:#c8c5bd; }
        .footer-bottom { border-top:0.5px solid #222; padding:1rem 1.5rem; max-width:1200px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; }
        .footer-bottom-left { font-family:'JetBrains Mono',monospace; font-size:11px; color:#333; letter-spacing:0.08em; text-transform:uppercase; }
        .footer-bottom-right { display:flex; gap:16px; }
        .footer-bottom-right a { font-size:13px; color:#444; transition:color 0.2s; }
        .footer-bottom-right a:hover { color:#888; }
        @media (max-width:768px) { .footer-inner{grid-template-columns:1fr;gap:1.5rem;} .footer-bottom{flex-direction:column;align-items:flex-start;} }
      `}</style>
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <p>Stern<span>·</span>Baureihe</p>
            <div className="footer-tagline">Every Star Has a Story.</div>
            <div className="footer-domain">{siteUrl.replace('https://', '')}</div>
          </div>
          <div className="footer-col">
            <h4>This Chassis</h4>
            <a href="/history">History</a>
            <a href="/specs">Specifications</a>
            <a href="/guides">Owner Guides</a>
            <a href="/recalls">Recall Database</a>
            <a href="/market">Market Data</a>
          </div>
          <div className="footer-col">
            <h4>Community</h4>
            <a href="/classifieds">Classifieds</a>
            <a href="/registry">Owner Registry</a>
            <a href="/specialists">Find a Specialist</a>
            <a href="/merch">Merchandise</a>
            <a href="https://sternbaureihe.com">SternBaureihe Hub</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            SternBaureihe · {chassisCode} · Part of the Stern Network · © {currentYear}
          </div>
          <div className="footer-bottom-right">
            <a href="https://sternbaureihe.com/advertise/">Advertise</a>
            <a href="https://sternbaureihe.com/about/">About</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
