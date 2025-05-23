'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname, useParams } from 'next/navigation';

interface LocalizedLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function LocalizedLink({ href, children, ...props }: LocalizedLinkProps) {
  const params = useParams() as { locale?: string };
  const locale = params.locale ?? 'en'; // fallback to 'en' if missing

  // If href is a string, prepend locale if it's not already there
  let localizedHref = typeof href === 'string' ? href : href.pathname || '';

  if (!localizedHref.startsWith(`/${locale}`)) {
    localizedHref = `/${locale}${localizedHref.startsWith('/') ? '' : '/'}${localizedHref}`;
  }

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
}
