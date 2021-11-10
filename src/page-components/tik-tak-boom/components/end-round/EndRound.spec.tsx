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

const players = [
  { id: 1, isActive: false, numOfBooms: 1, name: 'Player 1', playsNow: false },
  { id: 2, isActive: true, numOfBooms: 0, name: 'Player 2', playsNow: false },
  { id: 3, isActive: true, numOfBooms: 1, name: 'Player 3', playsNow: true },
  { id: 4, isActive: true, numOfBooms: 0, name: 'Player 4', playsNow: false }
];
const goToNextRound = jest.fn();
const setWhoLost = jest.fn();
const t = jest.fn().mockImplementation((label: string, param?: string[]) => label + (param ? param[0] : ''));

describe('page-components/TikTakBoom/EndRound', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <EndRound
        players={players}
        goToNextRound={goToNextRound}
        setWhoLost={setWhoLost}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has the right event handlers', () => {
    const tree = renderer.create(
      <EndRound
        players={players}
        goToNextRound={goToNextRound}
        setWhoLost={setWhoLost}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    );

    const buttons = tree.root.findAllByType('button');
    buttons[0].props.onClick();
    expect(setWhoLost).toHaveBeenCalledTimes(0);

    buttons[1].props.onClick();
    expect(setWhoLost).toHaveBeenCalledTimes(1);
    expect(setWhoLost).toHaveBeenLastCalledWith(players[1].id);

    buttons[2].props.onClick();
    expect(setWhoLost).toHaveBeenCalledTimes(2);
    expect(setWhoLost).toHaveBeenLastCalledWith(players[2].id);

    buttons[3].props.onClick();
    expect(setWhoLost).toHaveBeenCalledTimes(3);
    expect(setWhoLost).toHaveBeenLastCalledWith(players[3].id);

    buttons[4].props.onClick();
    expect(goToNextRound).toHaveBeenCalledTimes(1);
  });
});
