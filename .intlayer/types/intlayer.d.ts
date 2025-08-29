/* eslint-disable */
import { Locales } from 'intlayer';
import _0op0E8BBtH77rkunELMe from './dashboard.ts';
import _M8Kkdyb8qGzCriJLiSKZ from './header.ts';
import _3cl2WWrf8SnL6U56Ejda from './hero.ts';
import _qkDEZfDqPGOdnOISNIgu from './sectionsTable.ts';
import _gTuv4pNu31VUBEBORroE from './sidebar.ts';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {
    "dashboard": typeof _0op0E8BBtH77rkunELMe;
    "header": typeof _M8Kkdyb8qGzCriJLiSKZ;
    "hero": typeof _3cl2WWrf8SnL6U56Ejda;
    "sectionsTable": typeof _qkDEZfDqPGOdnOISNIgu;
    "sidebar": typeof _gTuv4pNu31VUBEBORroE;
  }

  type DeclaredLocales = Locales.ENGLISH;
  type RequiredLocales = Locales.ENGLISH;
  type ExtractedLocales = Extract<Locales, RequiredLocales>;
  type ExcludedLocales = Exclude<Locales, RequiredLocales>;
  interface IConfigLocales<Content> extends Record<ExtractedLocales, Content>, Partial<Record<ExcludedLocales, Content>> {}
}