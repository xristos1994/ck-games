import React, { MouseEventHandler, ReactChild } from 'react';
import renderer from 'react-test-renderer';
import { _RoundInProgress as RoundInProgress } from './RoundInProgress';

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

const goToNextPlayer = () => void 0;
const goToPreviousPlayer = () => void 0;
const mode = { id: 'mode 1', name: 'mode name 1', description: 'mode description 1' };
const syllable = 'ABC';
const playerNameThatPlaysNow = 'Player 1';
const t = (label: string, param?: string[]) => label + (param ? param[0] : '');

describe('page-components/TikTakBoom/RoundInProgress', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <RoundInProgress
        goToNextPlayer={goToNextPlayer}
        goToPreviousPlayer={goToPreviousPlayer}
        mode={mode}
        syllable={syllable}
        playerNameThatPlaysNow={playerNameThatPlaysNow}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
