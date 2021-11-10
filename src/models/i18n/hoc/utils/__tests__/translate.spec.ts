import { translate } from './../translate';
import * as translations from './../translations';

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
    code: 'el',
    label: 'Ελληνικά'
  }
};

jest.doMock('./../../../utils', () => ({
  __esModule: true,
  availableLangs: mockedAvailableLangs
}));

const mockedTranslationsEL = {
  label1: 'Label 1 in EL',
  label2: 'Label 2 %0 in EL',
  label3: 'Label 3 %0 %1 in EL'
};

const mockedTranslationsEN = {
  label1: 'Label 1 in EN',
  label2: 'Label 2 %0 in EN',
  label3: 'Label 3 %0 %1 in EN'
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
translations.translationsEL = mockedTranslationsEL;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
translations.translationsEN = mockedTranslationsEN;

describe('models/i18n/hoc/utils', () => {
  it('should should return the translated value', () => {
    expect(translate('label1', [], mockedAvailableLangs.el.code)).toBe('Label 1 in EL');
    expect(translate('label1', [], mockedAvailableLangs.en.code)).toBe('Label 1 in EN');
    expect(translate('label1', undefined, mockedAvailableLangs.en.code)).toBe('Label 1 in EN');

    expect(translate('label2', ['AAA'], mockedAvailableLangs.el.code)).toBe('Label 2 AAA in EL');
    expect(translate('label2', ['AAA'], mockedAvailableLangs.en.code)).toBe('Label 2 AAA in EN');

    expect(translate('label3', ['AAA', 'BBB'], mockedAvailableLangs.el.code)).toBe('Label 3 AAA BBB in EL');
    expect(translate('label3', ['AAA', 'BBB'], mockedAvailableLangs.en.code)).toBe('Label 3 AAA BBB in EN');

    expect(translate('label4', [], mockedAvailableLangs.en.code)).toBe('label4');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(translate(undefined, ['AAA', 'BBB'], mockedAvailableLangs.en.code)).toBe('');
  });
});