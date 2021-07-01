import React, { FC, ReactElement, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { classnames, compose } from '@utils/component-utils';
import { Button } from '@components';
import { setPlayerById, removePlayerById } from '@models/tik-tak-boom/actions';
import { players } from '@models/tik-tak-boom/props';
import { IState } from '@models/interfaces';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./styles.module.css');

interface IProps {
  player: {
    id: number;
    isActive: boolean;
    name: string;
  };
  setPlayerById: (player: IProps['player']) => void;
  numOfPlayers: number;
  removePlayerById: (id: IProps['player']['id']) => void;
}

const _Player: FC<IProps> = ({ player, setPlayerById, numOfPlayers, removePlayerById }): ReactElement => {
  const onChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setPlayerById({ ...player, name: e.target.value });
  };

  const onBlurName = (): void => {
    if (player.name.trim() !== player.name) {
      setPlayerById({ ...player, name: player.name.trim() });
    }
  };

  const removePlayer = (): void => {
    removePlayerById(player.id);
  };

  return (
    <div className={styles.playerContainer}>
      <input
        key="name"
        className={classnames(styles.playerNameInput)}
        type="text"
        value={player.name}
        onChange={onChangeName}
        onBlur={onBlurName}
      />
      {numOfPlayers === 2 ? null : (
        <Button onClick={removePlayer} className={classnames('main-button-hover-effect', styles.removePlayerButton)}>
          X
        </Button>
      )}
    </div>
  );
};

const Player = compose(
  connect(
    createStructuredSelector<
      IState,
      {
        numOfPlayers: IProps['numOfPlayers'];
      },
      {
        numOfPlayers: IProps['numOfPlayers'];
      }
    >({
      numOfPlayers: (state: IState): IProps['numOfPlayers'] => players(state).length
    }),
    { setPlayerById: setPlayerById, removePlayerById }
  )
)(_Player);

export { Player };
