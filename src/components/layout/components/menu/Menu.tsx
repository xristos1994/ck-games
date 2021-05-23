import React, { FC, ReactElement } from "react";
import { classnames } from "@utils/component-utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button } from "@components";
import { isMenuOpen } from "@models/layout/props";
import { selectedGame } from "@models/website/props";
import { setIsMenuOpen } from "@models/layout/actions";
import { IState } from "@models/interfaces";
import { ArrowUpIcon, ArrowDownIcon } from "@components/icons";
import { AvailableGames } from "@models/website/interfaces";
import { Link } from "gatsby";

const styles = require("./styles.module.css");

interface IProps {
  selectedGame: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const _Menu: FC<IProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  selectedGame,
}): ReactElement => {
  const homeButton = isMenuOpen && !!selectedGame && (
    <Link to={"/"}>
      <Button className={classnames(styles.homeButton)}>Home</Button>
    </Link>
  );

  const pantomimeMenu = isMenuOpen &&
    (selectedGame === AvailableGames.pantomime || !selectedGame) && (
      <h1>Pantomime</h1>
    );

  const tikTakBoomMenu = isMenuOpen &&
    (selectedGame === AvailableGames.tikTakBoom || !selectedGame) && (
      <h1>Tik-Tak-Boom</h1>
    );

  return (
    <div
      className={classnames(styles.menuContainer, {
        [styles.openMenu]: isMenuOpen,
      })}
    >
      <Button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={styles.menuButton}
      >
        {isMenuOpen ? (
          <ArrowDownIcon className={styles.arrowIcon} />
        ) : (
          <ArrowUpIcon className={styles.arrowIcon} />
        )}
      </Button>
      <div className={styles.menuContent}>
        <div className={styles.content}>
          {homeButton}
          {pantomimeMenu}
          {tikTakBoomMenu}
        </div>
      </div>
    </div>
  );
};

const Menu = connect(
  createStructuredSelector<
    IState,
    {
      isMenuOpen: IProps["isMenuOpen"];
      selectedGame: IProps["selectedGame"];
    },
    {
      isMenuOpen: IProps["isMenuOpen"];
      selectedGame: IProps["selectedGame"];
    }
  >({
    isMenuOpen,
    selectedGame,
  }),
  { setIsMenuOpen }
)(_Menu);

export { Menu };
