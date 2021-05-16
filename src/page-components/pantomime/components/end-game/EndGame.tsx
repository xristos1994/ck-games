import React, { FC, ReactElement } from "react";
import { Link } from "gatsby";
import { connect } from "react-redux";
import { classnames } from "@utils/component-utils";
import { Button } from "@components";
import { restartGame } from "@models/pantomime/actions";
import { ScoreBoard } from "./../score-board"; // Alias "page-components/pantomime/components";
const styles = require("./styles.module.css");

interface IProps {
  restartGame: () => void;
}

const _EndGame: FC<IProps> = ({ restartGame }): ReactElement => {
  return (
    <div className={styles.endGameContainer}>
      <div className={classnames(styles.gameEndTitle, "extraLargeText")}>
        Game Completed
      </div>
      <ScoreBoard />
      <Button
        onClick={() => restartGame()}
        className={classnames(styles.restartButton, "extraLargeText")}
      >
        Restart Game
      </Button>
      <Link to={"/"}>
        <Button className={classnames(styles.homeButton, "largeText")}>
          Home
        </Button>
      </Link>
    </div>
  );
};

const EndGame = connect(null, { restartGame })(_EndGame);

export { EndGame };
