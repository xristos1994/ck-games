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

const setIfMovieFound = jest.fn().mockImplementation((arg0: boolean) => void arg0);
const movie = 'Movie name';
const clockRemainingTime = 15;
const teamNameThatPlaysNow = 'Team name';
const t = jest.fn().mockImplementation((label: string, param?: string[]) => label + (param ? param[0] : ''));

describe('page-components/Pantomime/RoundInProgress', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <RoundInProgress
        setIfMovieFound={setIfMovieFound}
        movie={movie}
        clockRemainingTime={clockRemainingTime}
        teamNameThatPlaysNow={teamNameThatPlaysNow}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has the right event handlers', () => {
    const tree = renderer.create(
      <RoundInProgress
        setIfMovieFound={setIfMovieFound}
        movie={movie}
        clockRemainingTime={clockRemainingTime}
        teamNameThatPlaysNow={teamNameThatPlaysNow}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    );

    const buttons = tree.root.findAllByType('button');
    buttons[0].props.onClick();
    expect(setIfMovieFound).toHaveBeenCalledTimes(1);
    expect(setIfMovieFound).toHaveBeenLastCalledWith(true);

    buttons[1].props.onClick();
    expect(setIfMovieFound).toHaveBeenCalledTimes(2);
    expect(setIfMovieFound).toHaveBeenLastCalledWith(false);
  });
});
