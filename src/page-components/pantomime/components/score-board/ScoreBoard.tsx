import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { teams } from "@models/pantomime/props";
import { IState } from "@models/interfaces";
const styles = require("./styles.module.css");

interface IProps {
  teams: {
    id: number;
    score: number;
    name: string;
  }[];
}

const _ScoreBoard: FC<IProps> = ({ teams }): ReactElement => {
  return (
    <div className={classnames(styles.scoreBoardContainer)}>
      <div className={classnames(styles.scoreBoardTitle)}>Score board</div>
      <div className={classnames(styles.scoreBoard)}>
        {teams.map((team, index) => [
          <div key={`index_${team.id}`}>{index + 1}.</div>,
          <div key={`name_${team.id}`}>{team.name}</div>,
          <div key={`score_${team.id}`}>{team.score}</div>,
        ])}
      </div>
    </div>
  );
};

const ScoreBoard = connect(
  createStructuredSelector<
    IState,
    {
      teams: IProps["teams"];
    },
    {
      teams: IProps["teams"];
    }
  >({
    teams: (state: IState): IProps["teams"] =>
      [...teams(state)]
        .sort((t1, t2) =>
          t1.score < t2.score ? 1 : t1.score > t2.score ? -1 : 0
        )
        .map(({ id, score, name }) => ({
          id,
          score,
          name,
        })),
  })
)(_ScoreBoard);

export { ScoreBoard };
