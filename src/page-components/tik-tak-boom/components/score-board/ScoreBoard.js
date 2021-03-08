import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { players } from "@models/tik-tak-boom/props";
import * as styles from "./styles.module.css";

const _ScoreBoard = ({ players }) => {
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
  createStructuredSelector({
    players: state =>
      [...players(state)].sort((p1, p2) =>
        p1.numOfBooms < p2.numOfBooms
          ? 1
          : p1.numOfBooms > p2.numOfBooms
          ? -1
          : 0
      ),
  })
)(_ScoreBoard);

export { ScoreBoard };
