import React, { MouseEventHandler, ReactChild } from 'react';
import renderer from 'react-test-renderer';
import { _Team as Team } from './Team';

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

const setTeamById = jest.fn();
const removeTeamById = jest.fn();

describe('page-components/Pantomime/TeamsSetup/Team', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <Team
        setTeamById={setTeamById}
        removeTeamById={removeTeamById}
        team={{
          id: 1,
          name: 'Name 1'
        }}
        canBeRemoved={false}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Team
        setTeamById={setTeamById}
        removeTeamById={removeTeamById}
        team={{
          id: 1,
          name: ''
        }}
        canBeRemoved={false}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Team
        setTeamById={setTeamById}
        removeTeamById={removeTeamById}
        team={{
          id: 1,
          name: 'Name 1'
        }}
        canBeRemoved={true}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has the right event handlers', () => {
    const teamName = 'Name 1';

    let tree = renderer.create(
      <Team
        setTeamById={setTeamById}
        removeTeamById={removeTeamById}
        team={{
          id: 1,
          name: teamName
        }}
        canBeRemoved={true}
      />
    );

    const removeButton = tree.root.findByType('button');
    removeButton.props.onClick();
    expect(removeTeamById).toHaveBeenCalledTimes(1);
    expect(removeTeamById).toHaveBeenLastCalledWith(1);

    let teamNameInput = tree.root.findByType('input');
    teamNameInput.props.onChange({ target: { value: teamName } });
    expect(setTeamById).toHaveBeenCalledTimes(1);
    expect(setTeamById).toHaveBeenLastCalledWith({ id: 1, name: teamName });

    teamNameInput.props.onBlur();
    expect(setTeamById).toHaveBeenCalledTimes(1);

    tree = renderer.create(
      <Team
        setTeamById={setTeamById}
        removeTeamById={removeTeamById}
        team={{
          id: 1,
          name: teamName + '    '
        }}
        canBeRemoved={true}
      />
    );

    teamNameInput = tree.root.findByType('input');

    teamNameInput.props.onBlur();
    expect(setTeamById).toHaveBeenCalledTimes(2);
    expect(setTeamById).toHaveBeenLastCalledWith({ id: 1, name: teamName });
  });
});
