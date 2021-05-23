import React, { FC, ReactElement } from "react";
import { classnames } from "@utils/component-utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button } from "@components";
import { isMenuOpen } from "@models/layout/props";
import { setIsMenuOpen } from "@models/layout/actions";
import { IState } from "@models/interfaces";
import { ArrowUpIcon, ArrowDownIcon } from "@components/icons";

const styles = require("./styles.module.css");

interface IProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const _Menu: FC<IProps> = ({ isMenuOpen, setIsMenuOpen }): ReactElement => {
  return (
    <div
      className={classnames(styles.menu, {
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
    </div>
  );
};

const Menu = connect(
  createStructuredSelector<
    IState,
    {
      isMenuOpen: IProps["isMenuOpen"];
    },
    {
      isMenuOpen: IProps["isMenuOpen"];
    }
  >({
    isMenuOpen,
  }),
  { setIsMenuOpen }
)(_Menu);

export { Menu };
