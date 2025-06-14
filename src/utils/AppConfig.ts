import type { LocalizationResource } from '@clerk/types';
import type { LocalePrefixMode } from 'next-intl/routing';
import { enUS, frFR } from '@clerk/localizations';

const localePrefix: LocalePrefixMode = 'as-needed';

// Update this configuration file based on your project information
export const AppConfig = {
  name: 'Gestionnaire de projet (ESGI)',
  locales: ['en', 'fr'],
  defaultLocale: 'fr',
  localePrefix,
};

const supportedLocales: Record<string, LocalizationResource> = {
  en: enUS,
  fr: frFR,
};

export const ClerkLocalizations = {
  defaultLocale: frFR,
  supportedLocales,
};
