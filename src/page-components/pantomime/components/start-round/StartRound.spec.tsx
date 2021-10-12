import React, { MouseEventHandler, ReactChild } from 'react';
import renderer from 'react-test-renderer';
import { _StartRound as StartRound } from './StartRound';

const ScoreBoard = () => {
  return (
    <div>
      ScoreBoard
    </div>
  );
};

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

jest.mock('./../score-board', () => ({
  __esModule: true,
  ScoreBoard: ScoreBoard
}));

jest.mock('@components/', () => ({
  __esModule: true,
  Button: Button
}));

const teamNameThatPlaysNow = 'Team X';
const goBack = () => void 0;
const startRound = () => void 0;
const setMovie = (movie: string) => void movie;
const t = (label: string, param?: string[]) => label + (param ? param[0] : '');
const availableMovies: [string, string] = ['Movie 1', 'Movie 2'];

describe('page-components/Pantomime/StartRound', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <StartRound
        canGoBack={true}
        teamNameThatPlaysNow={teamNameThatPlaysNow}
        goBack={goBack}
        setMovie={setMovie}
        startRound={startRound}
        availableMovies={availableMovies}
        movie={availableMovies[0]}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <StartRound
        canGoBack={false}
        teamNameThatPlaysNow={teamNameThatPlaysNow}
        goBack={goBack}
        setMovie={setMovie}
        startRound={startRound}
        availableMovies={availableMovies}
        movie={availableMovies[1]}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
