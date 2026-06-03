import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import NProgressHandler from '../components/NProgress';

const chassisCode = process.env.CHASSIS_CODE || 'W124';
const chassisName = process.env.CHASSIS_NAME || 'Mercedes-Benz W124';
const siteUrl = process.env.SITE_URL || 'https://mb-w124.com';

export const metadata: Metadata = {
  title: {
    default: `${chassisName} (${chassisCode}) — The Definitive Resource | SternBaureihe`,
    template: `%s — ${chassisName} | SternBaureihe`,
  },
  description: `The definitive resource for the Mercedes-Benz ${chassisCode}. History, specifications, collector guides, market data, and specialist services for ${chassisName} owners and enthusiasts.`,
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: `SternBaureihe — ${chassisCode}`,
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/styles/global.css" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: `SternBaureihe — ${chassisName}`,
              url: siteUrl,
              description: `The definitive resource for the Mercedes-Benz ${chassisCode}.`,
              publisher: {
                '@type': 'Organization',
                name: 'SternBaureihe',
                url: 'https://sternbaureihe.com',
              },
            }),
          }}
        />
      </head>
      <body>
        <NProgressHandler />
        <Nav chassisCode={chassisCode} />
        <main>{children}</main>
        <Footer chassisCode={chassisCode} siteUrl={siteUrl} />
      </body>
    </html>
  );
}
