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
const goBack = jest.fn();
const startRound = jest.fn();
const setMovie = jest.fn();
const t = jest.fn().mockImplementation((label: string, param?: string[]) => label + (param ? param[0] : ''));
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

  it('has the right event handlers', () => {
    const tree = renderer.create(
      <StartRound
        canGoBack={true}
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
    );

    const buttons = tree.root.findAllByType('button');
    buttons[0].props.onClick();
    expect(setMovie).toHaveBeenCalledTimes(1);
    expect(setMovie).toHaveBeenLastCalledWith(availableMovies[0]);

    buttons[1].props.onClick();
    expect(setMovie).toHaveBeenCalledTimes(2);
    expect(setMovie).toHaveBeenLastCalledWith(availableMovies[1]);

    buttons[2].props.onClick();
    expect(startRound).toHaveBeenCalledTimes(1);

    buttons[3].props.onClick();
    expect(goBack).toHaveBeenCalledTimes(1);
  });
});
