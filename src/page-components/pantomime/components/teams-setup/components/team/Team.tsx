import React, { FC, ReactElement, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { classnames, compose } from '@utils/component-utils';
import { Button } from '@components';
import { setTeamById, removeTeamById } from '@models/pantomime/actions';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./Team.module.css');

interface IProps {
  team: {
    id: number;
    name: string;
  };
  setTeamById: (team: IProps['team']) => void;
  canBeRemoved: boolean;
  removeTeamById: (id: IProps['team']['id']) => void;
}

export const _Team: FC<IProps> = ({ team, setTeamById, canBeRemoved, removeTeamById }): ReactElement => {
  const onChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setTeamById({ ...team, name: e.target.value });
  };

  const onBlurName = (): void => {
    if (team.name.trim() !== team.name) {
      setTeamById({ ...team, name: team.name.trim() });
    }
  };

  const removeTeam = (): void => {
    removeTeamById(team.id);
  };

  return (
    <div className={styles.teamContainer}>
      <input
        key="name"
        className={classnames(styles.teamNameInput)}
        type="text"
        value={team.name}
        onChange={onChangeName}
        onBlur={onBlurName}
      />
      {
        canBeRemoved ? (
          <Button onClick={removeTeam} className={classnames(styles.removeTeamButton)}>
            X
          </Button>
        ) : null
      }
    </div>
  );
};

const Team = compose(
  connect(
    null,
    { setTeamById: setTeamById, removeTeamById }
  )
)(_Team);

export { Team };
