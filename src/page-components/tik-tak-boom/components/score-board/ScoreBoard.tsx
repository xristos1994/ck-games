import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { classnames, compose } from '@utils/component-utils';
import { withTranslation, ITranslate } from '@models/i18n/hoc';
import { players } from '@models/tik-tak-boom/props';
import { IState } from '@models/interfaces';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./ScoreBoard.module.css');

interface IProps {
  players: {
    id: number;
    isActive: boolean;
    numOfBooms: number;
    name: string;
  }[];
  t: ITranslate;
}

export const _ScoreBoard: FC<IProps> = ({ players, t }): ReactElement => {
  return (
    <div className={classnames(styles.scoreBoardContainer)}>
      <div className={classnames(styles.scoreBoardTitle)}>{t('Scoreboard')}</div>
      <div className={classnames(styles.scoreBoard)}>
        {players.map((player, index) => [
          <div
            key={`index_${player.id}`}
            className={classnames({
              [styles.inactive]: !player.isActive
            })}
          >
            {index + 1}.
          </div>,
          <div
            key={`name_${player.id}`}
            className={classnames({
              [styles.inactive]: !player.isActive
            })}
          >
            {player.name}
          </div>,
          <div
            key={`score_${player.id}`}
            className={classnames({
              [styles.inactive]: !player.isActive
            })}
          >
            {player.numOfBooms}
          </div>
        ])}
      </div>
    </div>
  );
};

const ScoreBoard = compose(
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
      players: (state: IState): IProps['players'] =>
        [...players(state)]
          .sort((p1, p2) => (p1.numOfBooms < p2.numOfBooms ? 1 : p1.numOfBooms > p2.numOfBooms ? -1 : 0))
          .map(({ id, isActive, numOfBooms, name }) => ({
            id,
            isActive,
            numOfBooms,
            name
          }))
    })
  ),
  withTranslation
)(_ScoreBoard);

export { ScoreBoard };
