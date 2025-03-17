//import Image from 'next/image';
'use client';
import { useEffect, useState } from 'react';
  

export default function NotFound() {
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
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Page Not Found
      </h1>
      <p className="mb-4">The page you are looking for does not exist. Have a kitty...</p>
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

    </section>
  )
}