import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "./../../../../utils/component-utils"; // Alias "@utils/component-utils";
import { players } from "./../../../../models/tik-tak-boom/props"; // Alias "@models/tik-tak-boom/props";
import { IState } from "./../../../../models/interfaces"; // Alias @models/interfaces
const styles = require("./styles.module.css");

interface IProps {
  players: {
    id: number;
    isActive: boolean;
    numOfBooms: number;
    name: string;
  }[];
}

const _ScoreBoard: FC<IProps> = ({ players }): ReactElement => {
  return (
    <div className={classnames(styles.scoreBoardContainer, "second-bg-color")}>
      <div
        className={classnames(
          styles.scoreBoardTitle,
          "extraLargeText",
          "main-color"
        )}
      >
        Score board
      </div>
      <div className={classnames(styles.scoreBoard, "largeText", "main-color")}>
        {players.map((player, index) => [
          <div
            key={`index_${player.id}`}
            className={classnames("main-border-color", {
              [styles.inactive]: !player.isActive,
            })}
          >
            {index + 1}.
          </div>,
          <div
            key={`name_${player.id}`}
            className={classnames("main-border-color", {
              [styles.inactive]: !player.isActive,
            })}
          >
            {player.name}
          </div>,
          <div
            key={`score_${player.id}`}
            className={classnames("main-border-color", {
              [styles.inactive]: !player.isActive,
            })}
          >
            {player.numOfBooms}
          </div>,
        ])}
      </div>
    </div>
  );
};

const ScoreBoard = connect(
  createStructuredSelector<
    IState,
    {
      players: IProps["players"];
    },
    {
      players: IProps["players"];
    }
  >({
    players: (state: IState): IProps["players"] =>
      [...players(state)]
        .sort((p1, p2) =>
          p1.numOfBooms < p2.numOfBooms
            ? 1
            : p1.numOfBooms > p2.numOfBooms
            ? -1
            : 0
        )
        .map(({ id, isActive, numOfBooms, name }) => ({
          id,
          isActive,
          numOfBooms,
          name,
        })),
  })
)(_ScoreBoard);

export { ScoreBoard };
