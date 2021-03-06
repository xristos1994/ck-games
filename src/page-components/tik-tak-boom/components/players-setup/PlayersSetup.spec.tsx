import React, { MouseEventHandler, ReactChild } from 'react';
import renderer from 'react-test-renderer';
import { _PlayersSetup as PlayersSetup } from './PlayersSetup';

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

const Player = ({ player, canBeRemoved }: { player: { id: number; name: string }, canBeRemoved: boolean }) => {
  const { id, name } = player;

  return (
    <div>
      {`${id}_${name}_${canBeRemoved}`}
    </div>
  );
};

jest.mock('./components/', () => ({
  __esModule: true,
  Player: Player
}));

const t = jest.fn().mockImplementation((label: string, param?: string[]) => label + (param ? param[0] : ''));
const playersSetupSubmit = jest.fn();
const addPlayer = jest.fn();

describe('page-components/TikTakBoom/PlayersSetup', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <PlayersSetup
        isPlayersSetupValid={true}
        playersSetupSubmit={playersSetupSubmit}
        addPlayer={addPlayer}
        players={[
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
      <PlayersSetup
        isPlayersSetupValid={false}
        playersSetupSubmit={playersSetupSubmit}
        addPlayer={addPlayer}
        players={[
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

  it('has the right event handlers', () => {
    const tree = renderer.create(
      <PlayersSetup
        isPlayersSetupValid={false}
        playersSetupSubmit={playersSetupSubmit}
        addPlayer={addPlayer}
        players={[
          { id: 1, name: 'Name 1' },
          { id: 2, name: '' },
          { id: 3, name: 'Name 3' }
        ]}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    );

    const buttons = tree.root.findAllByType('button');
    buttons[0].props.onClick();
    buttons[0].props.onClick();
    expect(addPlayer).toHaveBeenCalledTimes(2);

    buttons[1].props.onClick();
    expect(playersSetupSubmit).toHaveBeenCalledTimes(1);
  });
});
