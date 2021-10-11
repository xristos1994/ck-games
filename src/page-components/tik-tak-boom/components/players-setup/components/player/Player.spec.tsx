import React, { MouseEventHandler, ReactChild } from 'react';
import renderer from 'react-test-renderer';
import { _Player as Player } from './Player';

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

const setPlayerById = (player: {id: number; name: string}) => void player;
const removePlayerById = (id: number) => void id;

describe('page-components/TikTakBoom/PlayersSetup', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <Player
        setPlayerById={() => setPlayerById({ id: 1, name: 'Name 1' })}
        removePlayerById={() => removePlayerById(1)}
        player={{
          id: 1,
          name: 'Name 1'
        }}
        canBeRemoved={false}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Player
        setPlayerById={() => setPlayerById({ id: 1, name: '' })}
        removePlayerById={() => removePlayerById(1)}
        player={{
          id: 1,
          name: ''
        }}
        canBeRemoved={false}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Player
        setPlayerById={() => setPlayerById({ id: 1, name: 'Name 1' })}
        removePlayerById={() => removePlayerById(1)}
        player={{
          id: 1,
          name: 'Name 1'
        }}
        canBeRemoved={true}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
