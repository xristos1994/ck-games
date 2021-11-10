import React, { FC, ReactElement } from 'react';
import { Link } from 'gatsby';
import { FlatLogoIcon } from '@components/icons';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./Header.module.css');

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
