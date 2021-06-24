const localStoaragelangKey = 'lang';

export const getLocalStorageLang = (): string => {
  if (typeof localStorage === 'undefined') {
    return '';
  }
  return localStorage.getItem(localStoaragelangKey) || '';
};

export const setLocalStorageLang = (lang: string): void => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(localStoaragelangKey, lang);
  }
};
