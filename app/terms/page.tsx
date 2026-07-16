import type { Metadata } from 'next';

const chassisCode = process.env.CHASSIS_CODE || 'W124';
const siteUrl = process.env.SITE_URL || 'https://mb-w124.com';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for this Mercedes-Benz chassis enthusiast resource.',
  robots: { index: true, follow: true },
};

export default function TermsOfService() {
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
        <h1>Terms of Service</h1>
        <div className="meta">Last updated: {today} · {domain}</div>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this site.</p>

        <h2>2. Description of Service</h2>
        <p>This site provides editorial content about Mercedes-Benz vehicles including specifications, history, market data, and enthusiast resources. Content is provided for informational purposes only.</p>

        <h2>3. Intellectual Property</h2>
        <p>All content on this site, including text, graphics, and data, is owned by Audacities Media & Advertising LLC or its content suppliers and is protected by applicable intellectual property laws. Mercedes-Benz is a registered trademark of Mercedes-Benz Group AG. This site is not affiliated with or endorsed by Mercedes-Benz Group AG.</p>

        <h2>4. Disclaimer of Warranties</h2>
        <p>This site is provided "as is" without warranties of any kind, either express or implied. We do not warrant that the information on this site is accurate, complete, or current. Vehicle specifications, market values, and technical data should be verified independently before making purchasing decisions.</p>

        <h2>5. Limitation of Liability</h2>
        <p>Audacities Media & Advertising LLC shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this site.</p>

        <h2>6. Advertising</h2>
        <p>This site displays third-party advertisements. We are not responsible for the content of advertisements or the products and services they promote.</p>

        <h2>7. User Conduct</h2>
        <p>You agree not to use this site to transmit any unlawful, harmful, or objectionable content, or to attempt to gain unauthorized access to any part of the site.</p>

        <h2>8. Governing Law</h2>
        <p>These Terms shall be governed by the laws of the State of Nevada, without regard to conflict of law provisions.</p>

        <h2>9. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms at any time. Continued use of the site after changes constitutes acceptance of the new Terms.</p>

        <h2>10. Contact</h2>
        <p>Questions about these Terms: legal@sternbaureihe.com · Audacities Media & Advertising LLC, Henderson, NV 89002.</p>
      </div>
    </>
  );
}