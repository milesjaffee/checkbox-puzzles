'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { localeKeys, defaultLocale } from '@/locales';

interface LocalizedLinkProps extends LinkProps {
    children: React.ReactNode;
}

export default function LocalizedLinkButton({ href, children, ...props }: LocalizedLinkProps) {
    const params = useParams() as { locale?: string };
    let locale = params.locale ?? 'en'; // fallback to 'en' if missing
    if (!Array.isArray(localeKeys) || !localeKeys.some((key) => key === locale)) {
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
            <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-start bg-foreground text-background gap-2 hover:bg-[#38383877] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer w-full">
            {children}
            </button>
        </Link>
    );
}
