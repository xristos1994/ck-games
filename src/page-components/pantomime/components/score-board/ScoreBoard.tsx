import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { classnames, compose } from '@utils/component-utils';
import { withTranslation, ITranslate } from '@models/i18n/hoc';
import { teams } from '@models/pantomime/props';
import { IState } from '@models/interfaces';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./ScoreBoard.module.css');

interface IProps {
  teams: {
    id: number;
    score: number;
    name: string;
  }[];
  t: ITranslate;
}

export const _ScoreBoard: FC<IProps> = ({ teams, t }): ReactElement => {
  const sortedTeams = [...teams]
    .sort((t1, t2) => (t1.score < t2.score ? 1 : t1.score > t2.score ? -1 : 0))
    .map(({ id, score, name }) => ({
      id,
      score,
      name
    }));

  return (
    <div className={classnames(styles.scoreBoardContainer)}>
      <div className={classnames(styles.scoreBoardTitle)}>{t('Scoreboard')}</div>
      <div className={classnames(styles.scoreBoard)}>
        {sortedTeams.map((team, index) => [
          <div key={`index_${team.id}`}>{index + 1}.</div>,
          <div key={`name_${team.id}`}>{team.name}</div>,
          <div key={`score_${team.id}`}>{team.score}</div>
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
        teams: IProps['teams'];
      },
      {
        teams: IProps['teams'];
      }
    >({
      teams
    })
  ),
  withTranslation
)(_ScoreBoard);

export { ScoreBoard };
