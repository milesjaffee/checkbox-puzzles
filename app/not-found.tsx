'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootNotFoundRedirect() {
  const router = useRouter();

  useEffect(() => {
    const locale = navigator.language.startsWith('es') ? 'es' : 'en';
    router.replace(`/${locale}/404`);
  }, [router]);

  return null;
}