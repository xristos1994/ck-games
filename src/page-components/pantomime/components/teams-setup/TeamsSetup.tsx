import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { ElevatedWithBlurBackGround, Button } from "@components";
import { teams, isTeamsSetupValid } from "@models/pantomime/props";
import { Team } from "./components";
import { addTeam, teamsSetupSubmit } from "@models/pantomime/actions";
import { IState } from "@models/interfaces";

const styles = require("./styles.module.css");

interface IProps {
  teams: {
    id: number;
    score: number;
    name: string;
  }[];
  teamsSetupSubmit: () => void;
  addTeam: () => void;
  isTeamsSetupValid: boolean;
}

const _TeamsSetup: FC<IProps> = ({
  teams,
  teamsSetupSubmit,
  addTeam,
  isTeamsSetupValid,
}): ReactElement => {
  return (
    <ElevatedWithBlurBackGround>
      <div className={classnames(styles.teamsSetupContainer)}>
        <div className={classnames(styles.teamsSetupTitle)}>Teams' Setup</div>
        <div className={styles.teamsContainer}>
          {teams.map(team => (
            <Team key={team.id} team={team} />
          ))}
        </div>
        <Button
          onClick={() => addTeam()}
          className={classnames(styles.addTeamButton)}
        >
          Add Team
        </Button>

        <Button
          other={{ disabled: !isTeamsSetupValid }}
          onClick={() => teamsSetupSubmit()}
          className={classnames(styles.teamsSetupSubmitButton)}
        >
          PROCEED
        </Button>
      </div>
    </ElevatedWithBlurBackGround>
  );
};

const TeamsSetup = connect(
  createStructuredSelector<
    IState,
    {
      teams: IProps["teams"];
      isTeamsSetupValid: IProps["isTeamsSetupValid"];
    },
    {
      teams: IProps["teams"];
      isTeamsSetupValid: IProps["isTeamsSetupValid"];
    }
  >({
    teams,
    isTeamsSetupValid,
  }),
  { teamsSetupSubmit, addTeam }
)(_TeamsSetup);

export { TeamsSetup };
