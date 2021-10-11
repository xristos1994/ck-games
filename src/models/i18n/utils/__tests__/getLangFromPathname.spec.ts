import { getLangFromPathname } from './../';

describe('models/i18n/utils/getLangFromPathname', () => {
  it('should get language code either from parameter or from window location pathname', () => {
    jest.mock('./../availableLangs', () => ({
      en: {
        code: 'en',
        label: 'English'
      },
      el: {
        code: 'el',
        label: 'Ελληνικά'
      },
      default: {
        code: 'el',
        label: 'Ελληνικά'
      }
    }));

    const initialWindow = { ...global.window };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.window = undefined;

    expect(getLangFromPathname()).toBe('');
    expect(getLangFromPathname('')).toBe('');
    expect(getLangFromPathname('/en-test/')).toBe('');

    expect(getLangFromPathname('/en')).toBe('en');
    expect(getLangFromPathname('/en/test')).toBe('en');
    expect(getLangFromPathname('/en/')).toBe('en');

    global.window = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      location: {
        pathname: ''
      }
    };

    expect(getLangFromPathname()).toBe('');
    expect(getLangFromPathname('')).toBe('');
    expect(getLangFromPathname('/en-test/')).toBe('');

    expect(getLangFromPathname('/en')).toBe('');
    expect(getLangFromPathname('/en/test')).toBe('');
    expect(getLangFromPathname('/en/')).toBe('');

    global.window = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      location: {
        pathname: '/en-test/'
      }
    };

    expect(getLangFromPathname()).toBe('');
    expect(getLangFromPathname('')).toBe('');
    expect(getLangFromPathname('/en-test/')).toBe('');

    expect(getLangFromPathname('/en')).toBe('');
    expect(getLangFromPathname('/en/test')).toBe('');
    expect(getLangFromPathname('/en/')).toBe('');

    global.window = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      location: {
        pathname: '/el'
      }
    };

    expect(getLangFromPathname()).toBe('el');
    expect(getLangFromPathname('')).toBe('el');
    expect(getLangFromPathname('/en-test/')).toBe('el');

    expect(getLangFromPathname('/en')).toBe('el');
    expect(getLangFromPathname('/en/test')).toBe('el');
    expect(getLangFromPathname('/en/')).toBe('el');

    global.window = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      location: {
        pathname: '/el/test'
      }
    };

    expect(getLangFromPathname()).toBe('el');
    expect(getLangFromPathname('')).toBe('el');
    expect(getLangFromPathname('/en-test/')).toBe('el');

    expect(getLangFromPathname('/en')).toBe('el');
    expect(getLangFromPathname('/en/test')).toBe('el');
    expect(getLangFromPathname('/en/')).toBe('el');

    global.window = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      location: {
        pathname: '/el/'
      }
    };

    expect(getLangFromPathname()).toBe('el');
    expect(getLangFromPathname('')).toBe('el');
    expect(getLangFromPathname('/en-test/')).toBe('el');

    expect(getLangFromPathname('/en')).toBe('el');
    expect(getLangFromPathname('/en/test')).toBe('el');
    expect(getLangFromPathname('/en/')).toBe('el');

    global.window = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      location: {
        pathname: 'el'
      }
    };

    expect(getLangFromPathname()).toBe('el');
    expect(getLangFromPathname('')).toBe('el');
    expect(getLangFromPathname('/en-test/')).toBe('el');

    expect(getLangFromPathname('/en')).toBe('el');
    expect(getLangFromPathname('/en/test')).toBe('el');
    expect(getLangFromPathname('/en/')).toBe('el');

    global.window = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      location: {
        pathname: '/notExistingLangCode'
      }
    };

    expect(getLangFromPathname()).toBe('');
    expect(getLangFromPathname('')).toBe('');
    expect(getLangFromPathname('/en-test/')).toBe('');

    expect(getLangFromPathname('/en')).toBe('');
    expect(getLangFromPathname('/en/test')).toBe('');
    expect(getLangFromPathname('/en/')).toBe('');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.window = undefined;

    expect(getLangFromPathname()).toBe('');
    expect(getLangFromPathname('')).toBe('');
    expect(getLangFromPathname('/notExistingLangCode-test/')).toBe('');

    expect(getLangFromPathname('/notExistingLangCode')).toBe('');
    expect(getLangFromPathname('/notExistingLangCode/test')).toBe('');
    expect(getLangFromPathname('/notExistingLangCode/')).toBe('');

    global.window = { ...initialWindow };
  });
});