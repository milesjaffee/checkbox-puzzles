import fs from 'fs';
import path from 'path';

const localesDir = path.join(process.cwd(), 'locales');

const translations = Object.fromEntries(
  fs
    .readdirSync(localesDir)
    .filter((file) => file.endsWith('.ts'))
    .map((file) => {
      const locale = file.replace('.ts', '');
      const modulePath = path.join(localesDir, file);
      const translation = require(modulePath).default;
      return [locale, translation];
    })
) as Record<string, any>;

export function getTranslation(locale: string) {
  return translations[locale] ?? translations.en;
}
