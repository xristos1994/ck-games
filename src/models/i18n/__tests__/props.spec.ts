import { IState } from '@models/interfaces';
import { availableLangs, lang } from './../props';

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

jest.doMock('./../utils', () => ({
  __esModule: true,
  availableLangs: mockedAvailableLangs
}));

describe('models/i18n/props', () => {
  it('return the right values', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const tempState = {
      websiteRootReducer: {
        i18n: {
          lang: mockedAvailableLangs.en
        }
      }
    } as IState;

    expect(availableLangs(tempState)).toMatchObject([
      { code: 'en', label: 'English' },
      { code: 'el', label: 'Ελληνικά' }
    ]);

    expect(lang(tempState)).toMatchObject(mockedAvailableLangs.en);
  });
});