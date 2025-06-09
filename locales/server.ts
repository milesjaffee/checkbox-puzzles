import en from '@/locales/en'
import es from '@/locales/es'
import tp from '@/locales/tp'

const translations = {
  en,
  es,
  tp,
} as const

export function getTranslation(locale: string) {
  const t = translations[locale as keyof typeof translations] ?? translations.en
  return t
}