import React, { MouseEventHandler, ReactChild } from 'react';
import renderer from 'react-test-renderer';
import { _TeamsSetup as TeamsSetup } from './TeamsSetup';

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

const Team = ({ team, canBeRemoved }: { team: { id: number; name: string }, canBeRemoved: boolean }) => {
  const { id, name } = team;

  return (
    <div>
      {`${id}_${name}_${canBeRemoved}`}
    </div>
  );
};

jest.mock('./components/', () => ({
  __esModule: true,
  Team: Team
}));

const t = (label: string, param?: string[]) => label + (param ? param[0] : '');
const teamsSetupSubmit = () => void 0;
const addTeam = () => void 0;

describe('page-components/Pantomime/TeamsSetup', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <TeamsSetup
        isTeamsSetupValid={true}
        teamsSetupSubmit={teamsSetupSubmit}
        addTeam={addTeam}
        teams={[
          { id: 1, name: 'Name 1' },
          { id: 2, name: 'Name 2' },
          { id: 3, name: 'Name 3' }
        ]}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <TeamsSetup
        isTeamsSetupValid={false}
        teamsSetupSubmit={teamsSetupSubmit}
        addTeam={addTeam}
        teams={[
          { id: 1, name: 'Name 1' },
          { id: 2, name: '' },
          { id: 3, name: 'Name 3' }
        ]}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
