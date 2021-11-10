import { startLayout, updateIsMenuOpen } from './../actions';
import { reducer, initialState } from './../reducer';

describe('models/layout/reducer', () => {
  it('should update the state accordingly', () => {
    const tempState = {
      layoutStarted: false,
      isMenuOpen: false
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(reducer(tempState, startLayout())).toMatchObject({ ...tempState, layoutStarted: true });

    expect(reducer(tempState, updateIsMenuOpen(true))).toMatchObject({ ...tempState, isMenuOpen: true });
    expect(reducer(tempState, updateIsMenuOpen(false))).toMatchObject({ ...tempState, isMenuOpen: false });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(reducer(tempState, updateIsMenuOpen())).toMatchObject({ ...tempState, isMenuOpen: false });

    expect(reducer(tempState, { type: 'any test action type', payload: true })).toMatchObject(tempState);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(reducer(undefined, { type: 'any test action type', payload: undefined })).toMatchObject(initialState);
  });
});