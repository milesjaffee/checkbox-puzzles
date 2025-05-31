'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname, useParams } from 'next/navigation';

interface LocalizedLinkProps extends LinkProps {
    children: React.ReactNode;
}

export default function LocalizedLink({ href, children, ...props }: LocalizedLinkProps) {
    const params = useParams() as { locale?: string };
    let locale = params.locale ?? 'en'; // fallback to 'en' if missing
    if (!['en', 'es', 'tp'].includes(locale)) {
        locale = 'en';
    }

    // If href is a string, check if it's an external link
    let localizedHref = typeof href === 'string' ? href : href.pathname || '';
    const isExternalLink = localizedHref.startsWith('http://') || localizedHref.startsWith('https://') || localizedHref.startsWith('//');

    if (!isExternalLink) {
        // If href is not an external link, prepend locale if it's not already there
        if (!localizedHref.startsWith(`/${locale}`)) {
            localizedHref = `/${locale}${localizedHref.startsWith('/') ? '' : '/'}${localizedHref}`;
        }
    }

    return (
        <Link href={localizedHref} {...props}>
            {children}
        </Link>
    );
}
