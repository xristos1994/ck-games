import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button } from '@components';
import { classnames, compose } from '@utils/component-utils';
import { withTranslation, ITranslate } from '@models/i18n/hoc';
import { goToNextRound, setWhoLost } from '@models/tik-tak-boom/actions';
import { players } from '@models/tik-tak-boom/props';
import { IState } from '@models/interfaces';
import { BombIcon } from '@components/icons';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./EndRound.module.css');

interface IPlayer {
  id: number;
  isActive: boolean;
  numOfBooms: number;
  name: string;
  playsNow: boolean | null;
}
interface IProps {
  players: IPlayer[];
  goToNextRound: () => void;
  setWhoLost: (id: number) => void;
  t: ITranslate;
}

export const _EndRound: FC<IProps> = ({ players, goToNextRound, setWhoLost, t }): ReactElement => {
  const playerNow = players.find((player) => player.playsNow) as IPlayer;

  return (
    <div className={styles.endRoundContainer}>
      <div className={classnames(styles.whoLost)}>{t('Player, bomb exploded in your hands', [playerNow.name])}</div>
      <div className={styles.playersContainer}>
        {players.map((player) => (
          <Button
            key={player.id}
            other={{ disabled: !player.isActive }}
            className={classnames(styles.player, {
              [styles.playerNow]: playerNow.id === player.id,
              [styles.playerNotNow]: playerNow.id !== player.id
            })}
            onClick={() => {
              if (player.isActive) {
                setWhoLost(player.id);
              }
            }}
          >
            <>
              {playerNow.id === player.id ? <BombIcon className={styles.icon} /> : null}
              {player.name}
              {playerNow.id === player.id ? <BombIcon className={styles.icon} /> : null}
            </>
          </Button>
        ))}
      </div>
      <Button onClick={goToNextRound} className={classnames(styles.proceedButton)}>
        {t('CONTINUE')}
      </Button>
    </div>
  );
};

const EndRound = compose(
  connect(
    createStructuredSelector<
      IState,
      {
        players: IProps['players'];
      },
      {
        players: IProps['players'];
      }
    >({
      players
    }),
    { goToNextRound, setWhoLost }
  ),
  withTranslation
)(_EndRound);

export { EndRound };
