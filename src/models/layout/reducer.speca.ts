import { updateLang } from './../actions';
import { reducer, initialState } from './../reducer';

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

describe('models/i18n/reducer', () => {
  it('should update the state accordingly', () => {
    const tempState = { lang: mockedAvailableLangs.default };

    expect(reducer(tempState, updateLang(mockedAvailableLangs.en))).toMatchObject({ ...tempState, lang: mockedAvailableLangs.en });

    expect(reducer(tempState, updateLang(mockedAvailableLangs.el))).toMatchObject({ ...tempState, lang: mockedAvailableLangs.el });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(reducer(tempState, updateLang())).toMatchObject({ ...tempState, lang: mockedAvailableLangs.default });

    expect(reducer(tempState, { type: 'any test action type', payload: mockedAvailableLangs.en })).toMatchObject(tempState);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(reducer(undefined, { type: 'any test action type', payload: undefined })).toMatchObject(initialState);
  });
});