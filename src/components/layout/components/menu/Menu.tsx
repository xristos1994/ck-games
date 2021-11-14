import React, { FC, ReactElement, useLayoutEffect } from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { classnames, compose } from '@utils/component-utils';
import { withTranslation, ITranslate } from '@models/i18n/hoc';
import { Button } from '@components';
import { isMenuOpen } from '@models/layout/props';
import { selectedGame } from '@models/website/props';
import { setIsMenuOpen } from '@models/layout/actions';
import { availableLangs, lang } from '@models/i18n/props';
// import { availableLangs as _availableLangs } from '@models/i18n//utils';
import { setLang } from '@models/i18n/actions';
import { IState } from '@models/interfaces';
import { ArrowUpIcon, ArrowDownIcon } from '@components/icons';
import { AvailableGames } from '@models/website/interfaces';
import { LangFlagMap } from '@models/i18n/utils';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const styles = require('./Menu.module.css');

interface IProps {
  selectedGame: string | null;
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  availableLangs: { code: string; label: string }[];
  lang: { code: string; label: string };
  setLang: (lang: IProps['lang']) => void;
  t: ITranslate;
}

export const _Menu: FC<IProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  selectedGame,
  availableLangs,
  lang,
  setLang,
  t
}): ReactElement => {
  const isSSR = typeof window === 'undefined';

  const h1Title = (
    <h1 className={styles.menuTitle}>
      {isSSR && !selectedGame
        ? t('Menu Title SSR')
        : (isMenuOpen || isSSR) && selectedGame === AvailableGames.pantomime
          ? t('Pantomime')
          : (isMenuOpen || isSSR) && selectedGame === AvailableGames.tikTakBoom
            ? t('Tik-Tak-Boom')
            : isMenuOpen && !selectedGame
              ? t('CK-Games')
              : null}
    </h1>
  );

  const pantomimeDescription = (
    <>
      <div className={styles.gameDescription}>
        {isSSR || (!selectedGame && isMenuOpen) ? <h2>{t('Pantomime')}</h2> : null}
      </div>
      <div className={styles.gameDescription} dangerouslySetInnerHTML={{ __html: t('Pantomime Description HTML') }} />
    </>
  );

  const tikTakBoomDescription = (
    <>
      <div className={styles.gameDescription}>
        {isSSR || (!selectedGame && isMenuOpen) ? <h2>{t('Tik-Tak-Boom')}</h2> : null}
      </div>
      <div
        className={styles.gameDescription}
        dangerouslySetInnerHTML={{ __html: t('Tik-Tak-Boom Description HTML') }}
      />
    </>
  );

  const gameDescription = (
    <>
      {isSSR || (isMenuOpen && (selectedGame === AvailableGames.tikTakBoom || !selectedGame))
        ? tikTakBoomDescription
        : null}
      {isMenuOpen && !selectedGame ? <hr /> : null}
      {isSSR || (isMenuOpen && (selectedGame === AvailableGames.pantomime || !selectedGame))
        ? pantomimeDescription
        : null}
    </>
  );

  const homeButton = isMenuOpen && !!selectedGame && (
    <Link to={'/'}>
      <Button className={classnames(styles.homeButton)}>{t('Home')}</Button>
    </Link>
  );

  return (
    <div
      className={classnames(styles.menuContainer, {
        [styles.openMenu]: isMenuOpen
      })}
    >
      {
        (isMenuOpen || !selectedGame) ? (
          <div className={styles.langSelector}>
            {availableLangs.map((_lang) => {
              const isSelectedLang = _lang.code === lang.code;
              return (
                <Button
                  other={{ disabled: isSelectedLang }}
                  ariaLabel={_lang.label}
                  onClick={() => setLang(_lang)}
                  key={_lang.code}
                  className={classnames(styles.lang, { [styles.selectedLang]: isSelectedLang })}
                >
                  <LangFlagMap langCode={_lang.code} />
                </Button>
              );
            })}
          </div>
        ) : null
      }

      <Button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={styles.menuButton}
        ariaLabel={isMenuOpen ? t('Close Menu') : t('Open Menu')}
      >
        {isMenuOpen ? <ArrowDownIcon className={styles.arrowIcon} /> : <ArrowUpIcon className={styles.arrowIcon} />}
      </Button>
      <div className={styles.menuContent}>
        <div className={styles.content}>
          {h1Title}
          {gameDescription}
          {homeButton}
        </div>
      </div>
    </div>
  );
};

const Menu = compose(
  connect(
    createStructuredSelector<
      IState,
      {
        isMenuOpen: IProps['isMenuOpen'];
        selectedGame: IProps['selectedGame'];
        availableLangs: IProps['availableLangs'];
        lang: IProps['lang'];
      },
      {
        isMenuOpen: IProps['isMenuOpen'];
        selectedGame: IProps['selectedGame'];
        availableLangs: IProps['availableLangs'];
        lang: IProps['lang'];
      }
    >({
      isMenuOpen,
      selectedGame,
      availableLangs,
      lang
    }),
    { setIsMenuOpen, setLang }
  ),
  withTranslation
)(_Menu);

export { Menu };
