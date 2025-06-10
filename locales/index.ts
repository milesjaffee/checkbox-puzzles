// locales/index.ts
const locales = {
    en: () => import('./en'),
    es: () => import('./es'),
    de: () => import('./de'),
    tp: () => import('./tp'),
  };
  
  export default locales;
  export const defaultLocale = 'en';
export const localeKeys = Object.keys(locales) as Array<keyof typeof locales>;
  