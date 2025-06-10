import locales from '@/locales';

const translations = {locales} as const

export function getTranslation(locale: string) {
  const t = translations.locales[locale as keyof typeof translations.locales] ?? translations.locales.en
  return t
}