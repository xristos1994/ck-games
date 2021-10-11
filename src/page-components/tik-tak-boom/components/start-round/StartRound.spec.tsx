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

const startRound = () => void 0;
const playerNameThatStartsRound = 'Player X';
const goBack = () => void 0;
const t = (label: string, param?: string[]) => label + (param ? param[0] : '');

describe('page-components/TikTakBoom/StartRound', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <StartRound
        startRound={startRound}
        playerNameThatStartsRound={playerNameThatStartsRound}
        canGoBack={true}
        goBack={goBack}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <StartRound
        startRound={startRound}
        playerNameThatStartsRound={playerNameThatStartsRound}
        canGoBack={false}
        goBack={goBack}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
