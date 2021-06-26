import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { classnames, compose } from '@utils/component-utils';
import { withTranslation, ITranslate } from '@models/i18n/hoc';
import { Button } from '@components';
import { teams, isTeamsSetupValid } from '@models/pantomime/props';
import { Team } from './components';
import { addTeam, teamsSetupSubmit } from '@models/pantomime/actions';
import { IState } from '@models/interfaces';

import styles from './styles.module.css';

interface IProps {
  teams: {
    id: number;
    score: number;
    name: string;
  }[];
  teamsSetupSubmit: () => void;
  addTeam: () => void;
  isTeamsSetupValid: boolean;
  t: ITranslate;
}

const _TeamsSetup: FC<IProps> = ({ teams, teamsSetupSubmit, addTeam, isTeamsSetupValid, t }): ReactElement => {
  return (
    <div className={classnames(styles.teamsSetupContainer)}>
      <div className={classnames(styles.teamsSetupTitle)}>{t('Team Setup')}</div>
      <div className={styles.teamsContainer}>
        {teams.map((team) => (
          <Team key={team.id} team={team} />
        ))}
      </div>
      <Button onClick={() => addTeam()} className={classnames(styles.addTeamButton)}>
        {t('Add Team')}
      </Button>

      <Button
        other={{ disabled: !isTeamsSetupValid }}
        onClick={() => teamsSetupSubmit()}
        className={classnames(styles.teamsSetupSubmitButton)}
      >
        {t('CONTINUE')}
      </Button>
    </div>
  );
};

const TeamsSetup = compose(
  connect(
    createStructuredSelector<
      IState,
      {
        teams: IProps['teams'];
        isTeamsSetupValid: IProps['isTeamsSetupValid'];
      },
      {
        teams: IProps['teams'];
        isTeamsSetupValid: IProps['isTeamsSetupValid'];
      }
    >({
      teams,
      isTeamsSetupValid
    }),
    { teamsSetupSubmit, addTeam }
  ),
  withTranslation
)(_TeamsSetup);

export { TeamsSetup };
