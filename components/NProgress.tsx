'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';

export default function NProgressHandler() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.configure({ showSpinner: false, trickleSpeed: 150, minimum: 0.1 });
  }, []);

  useEffect(() => {
    NProgress.done();
  }, [pathname]);

  return null;
}
