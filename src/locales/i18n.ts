import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { getStringItem } from '@/utils/storage';

import en_US from './lang/en_US';
import ru_RU from './lang/ru_RU';

import { LocalEnum, StorageEnum } from '#/enum';

const defaultLng = getStringItem(StorageEnum.I18N) || (LocalEnum.ru_RU as string);
i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    lng: defaultLng, // localstorage -> i18nextLng: en_US
    fallbackLng: LocalEnum.en_US,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en_US: { translation: en_US },
      ru_RU: { translation: ru_RU },
    },
  });

export default i18n;
export const { t } = i18n;
