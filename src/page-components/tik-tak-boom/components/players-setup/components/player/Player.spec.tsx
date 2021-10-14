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

const setPlayerById = jest.fn();
const removePlayerById = jest.fn();

describe('page-components/TikTakBoom/PlayersSetup/Player', () => {
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
        setPlayerById={setPlayerById}
        removePlayerById={removePlayerById}
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
        setPlayerById={setPlayerById}
        removePlayerById={removePlayerById}
        player={{
          id: 1,
          name: 'Name 1'
        }}
        canBeRemoved={true}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has the right event handlers', () => {
    const playerName = 'Name 1';

    let tree = renderer.create(
      <Player
        setPlayerById={setPlayerById}
        removePlayerById={removePlayerById}
        player={{
          id: 1,
          name: playerName
        }}
        canBeRemoved={true}
      />
    );

    const removeButton = tree.root.findByType('button');
    removeButton.props.onClick();
    expect(removePlayerById).toHaveBeenCalledTimes(1);
    expect(removePlayerById).toHaveBeenLastCalledWith(1);

    let playerNameInput = tree.root.findByType('input');
    playerNameInput.props.onChange({ target: { value: playerName } });
    expect(setPlayerById).toHaveBeenCalledTimes(1);
    expect(setPlayerById).toHaveBeenLastCalledWith({ id: 1, name: playerName });

    playerNameInput.props.onBlur();
    expect(setPlayerById).toHaveBeenCalledTimes(1);

    tree = renderer.create(
      <Player
        setPlayerById={setPlayerById}
        removePlayerById={removePlayerById}
        player={{
          id: 1,
          name: playerName + '   '
        }}
        canBeRemoved={true}
      />
    );

    playerNameInput = tree.root.findByType('input');

    playerNameInput.props.onBlur();
    expect(setPlayerById).toHaveBeenCalledTimes(2);
    expect(setPlayerById).toHaveBeenLastCalledWith({ id: 1, name: playerName });
  });
});
