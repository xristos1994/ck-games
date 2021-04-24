import React, { FC, ReactElement, ChangeEvent } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { Button } from "@components";
import { setTeamById, removeTeamById } from "@models/pantomime/actions";
import { teams } from "@models/pantomime/props";
import { IState } from "@models/interfaces";
const styles = require("./styles.module.css");

interface IProps {
  team: {
    id: number;
    score: number;
    name: string;
  };
  setTeamById: (team: IProps["team"]) => void;
  numOfTeams: number;
  removeTeamById: (id: IProps["team"]["id"]) => void;
}

const _Team: FC<IProps> = ({
  team,
  setTeamById,
  numOfTeams,
  removeTeamById,
}): ReactElement => {
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
        className={classnames(styles.teamNameInput, "largeText")}
        type="text"
        value={team.name}
        onChange={onChangeName}
        onBlur={onBlurName}
      />
      <Button
        other={{ disabled: numOfTeams === 2 }}
        onClick={removeTeam}
        className={classnames(
          styles.removeTeamButton,
          "normalText",
          "secondary"
        )}
      >
        Remove
      </Button>
    </div>
  );
};

const Team = connect(
  createStructuredSelector<
    IState,
    {
      numOfTeams: IProps["numOfTeams"];
    },
    {
      numOfTeams: IProps["numOfTeams"];
    }
  >({
    numOfTeams: (state: IState): IProps["numOfTeams"] => teams(state).length,
  }),
  { setTeamById: setTeamById, removeTeamById }
)(_Team);

export { Team };
