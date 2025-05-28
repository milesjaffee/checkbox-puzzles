'use client';
import { useI18n } from '@/locales/client'; // adjust import path
import { useEffect, useState } from 'react';
import "@/app/globals.css";
import LocalizedLink from '@/app/components/LocalizedLink';


export default function NotFound() {

    const t = useI18n();

  const [catUrl, setCatUrl] = useState<string | null>(null);

  const fetchCat = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      setCatUrl(data[0].url);
    } catch (error) {
      console.error('Failed to fetch cat image:', error);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div>
      
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {t("notfound.title")}
      </h1>
      <p className="mb-4">{t('notfound.message', {link: <a href="https://thecatapi.com/" className="text-sky-600">thecatapi.com</a> })} </p>
      <p className="mb-4">{t('notfound.gameLink', { link: 
        <LocalizedLink href="/"><span className="text-sky-600">{t('notfound.here')}</span></LocalizedLink>
      })}</p>
      {catUrl ? (
        <img
          src={catUrl}
          alt="Random cat"
          style={{
            maxWidth: '100%',
            height: '400px',
            borderRadius: '12px',
            border: '2px solid #ccc'
          }}
        />
      ) : (
        <p>Loading cat...</p>
      )}
                
    
 </div>

  );
}