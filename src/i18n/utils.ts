import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return (ui[lang] as typeof ui[typeof defaultLang])[key] || ui[defaultLang][key];
  };
}

/** Prefix a path with the language segment (skips prefix for the default lang). */
export function localePath(lang: keyof typeof ui, path: string) {
  if (lang === defaultLang) return path;
  if (path === '/') return `/${lang}`;
  return `/${lang}${path}`;
}

/** Return the equivalent path on a different language, preserving the current page. */
export function switchLangPath(url: URL, targetLang: keyof typeof ui) {
  const currentLang = getLangFromUrl(url);
  let path = url.pathname;
  if (currentLang !== defaultLang) {
    path = path.slice(`/${currentLang}`.length) || '/';
  }
  return localePath(targetLang, path);
}
