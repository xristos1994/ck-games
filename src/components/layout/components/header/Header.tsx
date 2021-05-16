import React, { FC, ReactElement } from "react";
import { Link } from "gatsby";
import Logo from "@images/svg/flatLogo.svg";

const styles = require("./styles.module.css");

const Header: FC = (): ReactElement => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </Link>
    </header>
  );
};

export { Header };
