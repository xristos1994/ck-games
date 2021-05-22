import React, { FC, ReactElement } from "react";
import { Link } from "gatsby";
import { FlatLogoIcon } from "@components/icons";

const styles = require("./styles.module.css");

const Header: FC = (): ReactElement => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoContainer}>
        <FlatLogoIcon className={styles.logo} />
      </Link>
    </header>
  );
};

export { Header };
