import React, { MouseEventHandler, ReactChild } from 'react';
import renderer from 'react-test-renderer';
import { _EndRound as EndRound } from './EndRound';

const Button = (
  { children, onClick, className='' } :
  { children: ReactChild | ReactChild[]; onClick: MouseEventHandler<HTMLButtonElement>; className: string }
) => {
  return (
    <button onClick={onClick} className={className || undefined}>
      {children}
    </button>
  );
};

jest.mock('@components/', () => ({
  __esModule: true,
  Button: Button
}));

const ScoreBoard = () => {
  return (
    <div>
      ScoreBoard
    </div>
  );
};

jest.mock('./../score-board', () => ({
  __esModule: true,
  ScoreBoard: ScoreBoard
}));

const teams = [
  { id: 1, score: 1, name: 'Team 1', playsNow: true, movieFound: true },
  { id: 2, score: 2, name: 'Team 2', playsNow: false, movieFound: false },
  { id: 3, score: 1, name: 'Team 3', playsNow: false, movieFound: false }
];
const goToNextRound = () => void 0;
const setIfMovieFound = (found: boolean) => void found;
const t = (label: string, param?: string[]) => label + (param ? param[0] : '');

describe('page-components/Pantomime/EndRound', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <EndRound
        teams={teams}
        goToNextRound={goToNextRound}
        setIfMovieFound={setIfMovieFound}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <EndRound
        teams={teams.map(team => ({ ...team, movieFound: false }))}
        goToNextRound={goToNextRound}
        setIfMovieFound={setIfMovieFound}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
