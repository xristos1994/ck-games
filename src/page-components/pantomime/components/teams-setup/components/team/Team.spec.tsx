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

const setTeamById = (team: {id: number; name: string}) => void team;
const removeTeamById = (id: number) => void id;

describe('page-components/Pantomime/TeamsSetup/Team', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <Team
        setTeamById={() => setTeamById({ id: 1, name: 'Name 1' })}
        removeTeamById={() => removeTeamById(1)}
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
        setTeamById={() => setTeamById({ id: 1, name: '' })}
        removeTeamById={() => removeTeamById(1)}
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
        setTeamById={() => setTeamById({ id: 1, name: 'Name 1' })}
        removeTeamById={() => removeTeamById(1)}
        team={{
          id: 1,
          name: 'Name 1'
        }}
        canBeRemoved={true}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
