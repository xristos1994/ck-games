import { IState } from '@models/interfaces';
import { layoutStarted, isMenuOpen } from './../props';

describe('models/layout/props', () => {
  it('return the right values', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const tempState = {
      websiteRootReducer: {
        layout: {
          layoutStarted: 'layoutStarted',
          isMenuOpen: 'isMenuOpen'
        }
      }
    } as IState;

    expect(layoutStarted(tempState)).toEqual('layoutStarted');

    expect(isMenuOpen(tempState)).toEqual('isMenuOpen');
  });
});