import React from 'react';
import renderer from 'react-test-renderer';
import { _ScoreBoard as ScoreBoard } from './ScoreBoard';

const t = (label: string, param?: string[]) => label + (param ? param[0] : '');

describe('page-components/TikTakBoom/ScoreBoard', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ScoreBoard
        players={[
          { id: 1, isActive: true, numOfBooms: 3, name: 'Player 1' },
          { id: 2, isActive: false, numOfBooms: 0, name: 'Player 2' },
          { id: 3, isActive: true, numOfBooms: 1, name: 'Player 3' },
          { id: 4, isActive: false, numOfBooms: 4, name: 'Player 4' },
          { id: 5, isActive: true, numOfBooms: 3, name: 'Player 5' }
        ]}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
