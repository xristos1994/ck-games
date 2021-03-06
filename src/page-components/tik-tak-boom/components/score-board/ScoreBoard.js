import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { classnames } from "@utils/component-utils";
import { players } from "@models/tik-tak-boom/props";
import styles from "./styles.module.css";

const _ScoreBoard = ({ players }) => {
  return (
    <div className={styles.scoreBoardContainer}>
      <table className={styles.scoreBoard}>
        <caption className={styles.scoreBoardTitle}>Score board</caption>
        <tbody>
          {[...players]
            .sort((p1, p2) =>
              p1.numOfBooms < p2.numOfBooms
                ? 1
                : p1.numOfBooms > p2.numOfBooms
                ? -1
                : 0
            )

            .map((player, index) => (
              <tr
                key={player.id}
                className={classnames(styles.playerRow, {
                  [styles.inactive]: !player.isActive,
                })}
              >
                <td key="index" className={styles.indexCell}>
                  {index + 1}.
                </td>
                <td key="name" className={styles.nameCell}>
                  {player.name}
                </td>
                <td key="score" className={styles.scoreCell}>
                  {player.numOfBooms}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const ScoreBoard = connect(
  createStructuredSelector({
    players,
  })
)(_ScoreBoard);

export { ScoreBoard };
