'use client';
import { useEffect, useRef } from 'react';

interface AdSlotProps {
  slotId: string;
  adUnitPath: string;
  sizes: [number, number][];
  lazy?: boolean;
}

export default function AdSlot({ slotId, adUnitPath, sizes, lazy = false }: AdSlotProps) {
  const ref = useRef<HTMLDivElement>(null);
  const defined = useRef(false);

  useEffect(() => {
    if (defined.current) return;
    defined.current = true;

    const define = () => {
      const gtag = (window as any).googletag;
      if (!gtag) return;
      gtag.cmd = gtag.cmd || [];
      gtag.cmd.push(() => {
        gtag.defineSlot(adUnitPath, sizes, slotId)
          ?.addService(gtag.pubads());
        gtag.pubads().enableSingleRequest();
        gtag.enableServices();
        gtag.display(slotId);
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

  const minHeight = sizes[0] ? sizes[0][1] : 90;

  return (
    <div
      ref={ref}
      id={slotId}
      style={{
        minHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#161616',
        border: '0.5px solid #2a2a2a',
        borderRadius: '4px',
        margin: '0 0 16px 0'
      }}
    />
  );
}