import { startCore } from './../actions';
import { reducer, initialState } from './../reducer';

describe('@core/models/reducer', () => {
  it('should update the state accordingly', () => {
    const tempState = {
      coreStarted: false,
      dummyStateKey: 'dummyStateValue'
    };

    expect(reducer(tempState, startCore())).toMatchObject({ ...tempState, coreStarted: true });
    expect(reducer(tempState, { type: 'any test action type', payload: undefined })).toMatchObject(initialState);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(reducer(undefined, { type: 'any test action type', payload: undefined })).toMatchObject(initialState);
  });
});