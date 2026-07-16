'use client';
import { useEffect, useRef } from 'react';

interface AdSlotProps {
  slotId: string;
  adUnitPath: string;
  sizes: googletag.GeneralSize;
  lazy?: boolean;
}

declare global {
  interface Window {
    googletag: googletag.Googletag;
    pbjs: any;
  }
}

export default function AdSlot({ slotId, adUnitPath, sizes, lazy = false }: AdSlotProps) {
  const ref = useRef<HTMLDivElement>(null);
  const defined = useRef(false);

  useEffect(() => {
    if (defined.current) return;
    defined.current = true;

    const define = () => {
      window.googletag = window.googletag || { cmd: [] };
      window.googletag.cmd.push(() => {
        window.googletag.defineSlot(adUnitPath, sizes, slotId)
          ?.addService(window.googletag.pubads());
        window.googletag.pubads().enableSingleRequest();
        window.googletag.enableServices();
        window.googletag.display(slotId);
      });
    };

    if (!lazy) {
      define();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          define();
        }
      },
      { rootMargin: '200px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [slotId, adUnitPath, sizes, lazy]);

  return (
    <div
      ref={ref}
      id={slotId}
      style={{ minHeight: Array.isArray(sizes[0]) ? (sizes[0] as number[])[1] : 90, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#161616', border: '0.5px solid #2a2a2a', borderRadius: '4px', margin: '0 0 16px 0' }}
    />
  );
}
