import React, { MouseEventHandler, ReactChild } from 'react';
import renderer from 'react-test-renderer';
import { _AvailableTimeSetup as AvailableTimeSetup } from './AvailableTimeSetup';

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

jest.mock('@components', () => ({
  __esModule: true,
  Button: Button
}));

const availableTimes = [30, 60, 90, 120];
const t = (label: string, param?: string[]) => label + (param ? param[0] : '');
const setAvailableTime = () => void 0;
const availableTimeSetupSubmit = () => void 0;
const goBack = () => void 0;

describe('page-components/Pantomime/AvailableTimeSetup', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <AvailableTimeSetup
        availableTime={availableTimes[0]}
        canGoBack={true}
        availableTimes={availableTimes}
        goBack={goBack}
        setAvailableTime={setAvailableTime}
        availableTimeSetupSubmit={availableTimeSetupSubmit}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <AvailableTimeSetup
        availableTime={availableTimes[1]}
        canGoBack={true}
        availableTimes={availableTimes}
        goBack={goBack}
        setAvailableTime={setAvailableTime}
        availableTimeSetupSubmit={availableTimeSetupSubmit}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
