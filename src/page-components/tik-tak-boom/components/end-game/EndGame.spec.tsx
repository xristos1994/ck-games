import React, { MouseEventHandler, ReactChild } from 'react';
import renderer from 'react-test-renderer';
import { _EndGame as EndGame } from './EndGame';

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

const restartGame = () => void 0;
const t = (label: string, param?: string[]) => label + (param ? param[0] : '');

describe('page-components/TikTakBoom/EndGame', () => {
  it('renders correctly', () => {
    const initialWindow = { ...global.window };

    global.window = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      location: {
        pathname: ''
      }
    };

    const tree = renderer.create(
      <EndGame
        restartGame={restartGame}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    global.window = { ...initialWindow };
  });
});
