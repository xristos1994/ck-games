import { getLocalStorageLang, setLocalStorageLang, localStoaragelangKey } from './../localStorageLang';

describe('models/i18n/utils/localStorageLang/getLocalStorageLang', () => {
  it('should get language code from localStorage', () => {
    const initialLocalStorage = { ...global.localStorage };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.localStorage = undefined;

    expect(getLocalStorageLang()).toBe('');

    global.localStorage = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getItem: (key) => {
        if (key === localStoaragelangKey) {
          return 'en';
        }

        return undefined;
      }
    };

    expect(getLocalStorageLang()).toBe('en');

    global.localStorage = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getItem: () => {
        return undefined;
      }
    };

    expect(getLocalStorageLang()).toBe('');

    global.localStorage = { ...initialLocalStorage };
  });

  it('should set language code to localStorage', () => {
    const initialLocalStorage = { ...global.localStorage };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.localStorage = undefined;

    setLocalStorageLang('en');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.localStorage = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getItem: (key) => {
        return global.localStorage[key];
      }
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.localStorage = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getItem: (key) => {
        return global.localStorage[key];
      },

      setItem: (key, value) => {
        global.localStorage[key] = value;
      }
    };

    setLocalStorageLang('en');
    expect(localStorage.getItem(localStoaragelangKey)).toBe('en');

    expect(localStorage.getItem(localStoaragelangKey)).toBeUndefined;

    setLocalStorageLang('en');
    expect(getLocalStorageLang()).toBe('en');

    global.localStorage = { ...initialLocalStorage };
  });
});