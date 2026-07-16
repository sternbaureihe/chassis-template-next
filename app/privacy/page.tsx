import type { Metadata } from 'next';

const chassisCode = process.env.CHASSIS_CODE || 'W124';
const chassisName = process.env.CHASSIS_NAME || 'Mercedes-Benz W124';
const siteUrl = process.env.SITE_URL || 'https://mb-w124.com';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${chassisName} enthusiast resource site.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  const domain = siteUrl.replace('https://', '');
  const today = new Date().toISOString().split('T')[0];
  return (
    <>
      <style>{`
        .legal { max-width: 760px; margin: 0 auto; padding: 48px 24px; }
        .legal h1 { font-family: 'Playfair Display', serif; font-size: 2rem; color: #e8e6e1; margin-bottom: 8px; }
        .legal .meta { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #555; margin-bottom: 40px; }
        .legal h2 { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #1A2744; letter-spacing: 0.1em; text-transform: uppercase; margin: 32px 0 12px; }
        .legal p, .legal li { font-size: 15px; color: #888; line-height: 1.8; margin-bottom: 12px; }
        .legal ul { padding-left: 20px; }
        .legal a { color: #1A2744; }
      `}</style>
      <div className="legal">
        <h1>Privacy Policy</h1>
        <div className="meta">Last updated: {today} · {domain}</div>

        <h2>1. Introduction</h2>
        <p>This Privacy Policy describes how {domain} ("we," "us," or "our") collects, uses, and shares information about you when you visit our website. This site is operated as part of the SternBaureihe publisher network, owned by Audacities Media & Advertising LLC.</p>

        <h2>2. Information We Collect</h2>
        <p>We collect information you provide directly to us and information collected automatically when you visit our site, including:</p>
        <ul>
          <li>Log data (IP address, browser type, pages visited, time and date)</li>
          <li>Cookie and tracking data from advertising partners</li>
          <li>Email address if you subscribe to our newsletter</li>
        </ul>

        <h2>3. Advertising and Cookies</h2>
        <p>We serve programmatic advertising through Google Ad Manager and work with multiple Supply Side Platforms (SSPs). These partners may use cookies, web beacons, and similar technologies to collect information about your browsing activity to serve you relevant advertisements.</p>
        <p>We participate in the IAB Transparency and Consent Framework (TCF v2.3). You can manage your consent preferences at any time through our consent management platform.</p>
        <p>Our advertising partners include but are not limited to: Google, Criteo, PubMatic, OpenX, Index Exchange, TripleLift, Equativ, Magnite, Teads, Amazon Publisher Services, Xandr, Sharethrough, Sovrn, GumGum, Kargo, 33Across, Yieldmo, Seedtag, Undertone, Freestar, Nexxen, InMobi, Smaato, SpotX, Adform, SmartyAds, Geniee, ConnectAd, Setupad, Vistar Media, and Rubicon. For a full list, visit <a href="https://sternbaureihe.com/ad-partners">sternbaureihe.com/ad-partners</a>.</p>

        <h2>4. How We Use Information</h2>
        <ul>
          <li>To serve and optimize advertising</li>
          <li>To analyze site traffic and improve our content</li>
          <li>To send newsletters if you have subscribed</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>5. Your Rights</h2>
        <p>Depending on your location, you may have rights including access, correction, deletion, and opt-out of sale of personal data. California residents have rights under CCPA. EU/UK residents have rights under GDPR.</p>
        <p>To exercise your rights, contact us at: privacy@sternbaureihe.com</p>

        <h2>6. Data Retention</h2>
        <p>We retain personal data for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>

        <h2>7. Third Party Links</h2>
        <p>Our site may contain links to third party websites. We are not responsible for the privacy practices of those sites.</p>

        <h2>8. Children's Privacy</h2>
        <p>Our site is not directed to children under 13. We do not knowingly collect personal information from children under 13.</p>

        <h2>9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.</p>

        <h2>10. Contact Us</h2>
        <p>If you have questions about this Privacy Policy, contact us at privacy@sternbaureihe.com or write to: Audacities Media & Advertising LLC, Henderson, NV 89002.</p>
      </div>
    </>
  );
}