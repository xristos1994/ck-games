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
const t = jest.fn().mockImplementation((label: string, param?: string[]) => label + (param ? param[0] : ''));
const setAvailableTime = jest.fn();
const availableTimeSetupSubmit = jest.fn();
const goBack = jest.fn();

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

  it('has the right event handlers', () => {
    const tree = renderer.create(
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
    );

    const selectOptions = tree.root.findByType('select');
    selectOptions.props.onChange({ target: { value: availableTimes[0] } });
    expect(setAvailableTime).toHaveBeenCalledTimes(1);
    expect(setAvailableTime).toHaveBeenLastCalledWith(availableTimes[0]);
  });
});
