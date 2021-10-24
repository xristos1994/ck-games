import { IState } from '@models/interfaces';
import { websiteStarted, selectedGame } from './../props';

describe('models/website/props', () => {
  it('return the right values', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const tempState = {
      websiteRootReducer: {
        website: {
          websiteStarted: 'websiteStarted',
          selectedGame: 'selectedGame'
        }
      }
    } as IState;

    expect(websiteStarted(tempState)).toEqual('websiteStarted');
    expect(selectedGame(tempState)).toEqual('selectedGame');
  });
});