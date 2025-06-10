import { use } from 'react';
import { notFound } from 'next/navigation';
import { getPageData } from '@/lib/getPageData'; // Your content fetcher

type Params = { locale: string; slug?: string[] };

  export default function Page({ params }: { params: Promise<Params> }) {
    const { locale, slug } = use(params); // Unwrap the async params
    const pageData = use(getPageData(locale, slug?.join('/') || ''));
  
    if (!pageData) {
      notFound();
    }
  
    return (
      <main>
        {pageData.content}
      </main>
    );
  }