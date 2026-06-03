'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Overview' },
  { href: '/history', label: 'History' },
  { href: '/specs', label: 'Specs' },
  { href: '/guides', label: 'Guides' },
  { href: '/specialists', label: 'Specialists' },
  { href: '/market', label: 'Market' },
  { href: '/classifieds', label: 'Classifieds' },
];

interface NavProps {
  chassisCode: string;
}

export default function Nav({ chassisCode }: NavProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        nav { background:#161616; border-bottom:0.5px solid #2a2a2a; position:sticky; top:0; z-index:100; }
        .nav-inner { max-width:1200px; margin:0 auto; padding:0 1.5rem; display:flex; align-items:center; justify-content:space-between; height:56px; }
        .nav-brand-top { font-family:'DM Sans',sans-serif; font-size:14px; font-weight:500; letter-spacing:0.14em; color:#c8c5bd; text-transform:uppercase; }
        .nav-brand-top span { color:#3a3a3a; margin:0 5px; }
        .nav-links { display:flex; align-items:center; gap:0; list-style:none; }
        .nav-link { font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; letter-spacing:0.07em; text-transform:uppercase; color:#666; padding:0 14px; height:56px; display:flex; align-items:center; border-bottom:2px solid transparent; transition:color 0.2s,border-color 0.2s; }
        .nav-link:hover { color:#c8c5bd; }
        .nav-link.active { color:#c8c5bd; border-bottom-color:#1A2744; }
        .nav-cta { font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:#1A2744; border:0.5px solid #1A2744; padding:6px 14px; border-radius:3px; transition:all 0.2s; white-space:nowrap; }
        .nav-cta:hover { background:#1A2744; color:#e8e6e1; }
        .hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; padding:4px; background:none; border:none; }
        .hamburger span { width:22px; height:1px; background:#888; display:block; }
        .mobile-menu { display:none; background:#161616; border-top:0.5px solid #2a2a2a; padding:1rem 1.5rem; }
        .mobile-menu.open { display:block; }
        .mobile-link { display:block; font-family:'DM Sans',sans-serif; font-size:16px; color:#888; padding:10px 0; border-bottom:0.5px solid #222; letter-spacing:0.05em; }
        .mobile-link:last-child { border-bottom:none; }
        .mobile-link.active { color:#c8c5bd; }
        @media (max-width:900px) { .nav-links{display:none;} .nav-cta-desktop{display:none;} .hamburger{display:flex;} }
        @media (max-width:480px) { .nav-inner{padding:0 1rem;} }
      `}</style>
      <nav>
        <div className="nav-inner">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span className="nav-brand-top">Stern<span>·</span>Baureihe</span>
          </Link>
          <ul className="nav-links">
            {navLinks.map(link => {
              const isActive = link.href === '/' ? pathname === '/' : pathname?.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link href={link.href} className={`nav-link${isActive ? ' active' : ''}`}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/classifieds" className="nav-cta nav-cta-desktop">
            List Your {chassisCode} →
          </Link>
          <button className="hamburger" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className={`mobile-link${pathname === link.href ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/classifieds" className="mobile-link" style={{ color: '#1A2744', marginTop: '8px' }} onClick={() => setMenuOpen(false)}>
            List Your {chassisCode} →
          </Link>
        </div>
      </nav>
    </>
  );
}
