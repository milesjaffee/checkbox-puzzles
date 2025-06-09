import { notFound } from 'next/navigation';
import { getPageData } from '@/lib/getPageData'; // Your content fetcher

interface Params {
    locale: string;
    slug?: string[];
  }

  export default async function Page({ params }: { params: Params }) {
    const slug = params.slug?.join('/') || '';
    const pageData = await getPageData(params.locale, slug);
  
    if (!pageData) {
      notFound();
    }
  
    return (
      <main>
        {pageData.content}
      </main>
    );
  }