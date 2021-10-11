import React, { FC, ReactElement, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { classnames, compose } from '@utils/component-utils';
import { Button } from '@components';
import { setPlayerById, removePlayerById } from '@models/tik-tak-boom/actions';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./Player.module.css');

interface IProps {
  player: {
    id: number;
    name: string;
  };
  setPlayerById: (player: IProps['player']) => void;
  canBeRemoved: boolean;
  removePlayerById: (id: IProps['player']['id']) => void;
}

export const _Player: FC<IProps> = ({ player, setPlayerById, canBeRemoved, removePlayerById }): ReactElement => {
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
      {
        canBeRemoved ? (
          <Button onClick={removePlayer} className={classnames('main-button-hover-effect', styles.removePlayerButton)}>
            X
          </Button>
        ) : null
      }
    </div>
  );
};

const Player = compose(
  connect(
    null,
    { setPlayerById: setPlayerById, removePlayerById }
  )
)(_Player);

export { Player };
