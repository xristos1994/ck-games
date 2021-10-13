import { testEpic } from '@utils/test-utils';
import { noAction } from '@models/pantomime/actions';
import { updateLang, setLang, initI18n } from './../actions';
import { startI18nEpic, initI18nEpic, setLangEpic } from './../epics';
import { Action } from '@core/actions';
import * as utils from './../utils';

const mockedAvailableLangs = {
  en: {
    code: 'en',
    label: 'English'
  },
  el: {
    code: 'el',
    label: 'Ελληνικά'
  },
  default: {
    code: 'default',
    label: 'Default Lang'
  }
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
utils.availableLangs = mockedAvailableLangs;

const getLocalStorageLang = jest.spyOn(utils, 'getLocalStorageLang');
const getLangFromPathname = jest.spyOn(utils, 'getLangFromPathname');
const setLocalStorageLang = jest.spyOn(utils, 'setLocalStorageLang');

describe('models/i18n/epics/startI18nEpic', () => {
  it('should trigger the right actions', (done) => {
    testEpic(
      startI18nEpic,
      null,
      null,
      [initI18n()],
      done
    );
  });
});

describe('models/i18n/epics/initI18nEpic', () => {
  it('should trigger the right actions with lang from path', (done) => {
    getLocalStorageLang.mockReturnValue('');
    getLangFromPathname.mockReturnValue('en');

    testEpic(
      initI18nEpic,
      initI18n(),
      null,
      [setLang(mockedAvailableLangs.en)],
      done
    );
  });

  it('should trigger the right actions with lang from localStorage', (done) => {
    getLocalStorageLang.mockReturnValue('en');
    getLangFromPathname.mockReturnValue('');

    testEpic(
      initI18nEpic,
      initI18n(),
      null,
      [setLang(mockedAvailableLangs.en)],
      done
    );
  });

  it('should trigger the right actions with default lang', (done) => {
    getLocalStorageLang.mockReturnValueOnce('Not existing lang');
    getLangFromPathname.mockReturnValueOnce('');

    testEpic(
      initI18nEpic,
      initI18n(),
      null,
      [setLang(mockedAvailableLangs.default)],
      done
    );
  });

  it('should trigger no actions', (done) => {
    testEpic(
      initI18nEpic,
      Action('TEST', 'DUMMY_ACTION')(),
      null,
      [],
      done
    );
  });
});

describe('models/i18n/epics/setLangEpic', () => {
  it('should trigger the right actions', (done) => {
    setLocalStorageLang.mockImplementation(jest.fn());

    testEpic(
      setLangEpic,
      setLang(mockedAvailableLangs.en),
      null,
      [updateLang(mockedAvailableLangs.en)],
      done
    );

    expect(setLocalStorageLang).toHaveBeenCalledTimes(1);
    expect(setLocalStorageLang).toHaveBeenCalledWith(mockedAvailableLangs.en.code);
  });

  it('should trigger no actions', (done) => {
    testEpic(
      setLangEpic,
      Action('TEST', 'DUMMY_ACTION')(),
      null,
      [],
      done
    );
  });
});

