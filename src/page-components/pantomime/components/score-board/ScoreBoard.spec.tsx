import React from 'react';
import renderer from 'react-test-renderer';
import { _ScoreBoard as ScoreBoard } from './ScoreBoard';

const t = (label: string, param?: string[]) => label + (param ? param[0] : '');

describe('page-components/Pantomime/ScoreBoard', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ScoreBoard
        teams={[
          { id: 1, score: 1, name: 'Player 1' },
          { id: 2, score: 2, name: 'Player 2' },
          { id: 3, score: 3, name: 'Player 3' },
          { id: 4, score: 0, name: 'Player 4' },
          { id: 5, score: 2, name: 'Player 5' }
        ]}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
