import en from '@/locales/en'
import es from '@/locales/es'

const translations = {
  en,
  es,
} as const

export function getTranslation(locale: string) {
  const t = translations[locale as keyof typeof translations] ?? translations.en
  return t
}