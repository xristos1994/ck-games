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
  const isSSR = typeof window === "undefined";

  const h1Title = (
    <h1 className={styles.menuTitle}>
      {isSSR
        ? "CK-Games Pantomime Tik-Tak-Boom"
        : isMenuOpen && selectedGame === AvailableGames.pantomime
        ? "Pantomime"
        : isMenuOpen && selectedGame === AvailableGames.tikTakBoom
        ? "Tik-Tak-Boom"
        : isMenuOpen && !selectedGame
        ? "CK-Games"
        : null}
    </h1>
  );

  const pantomimeDescription = (
    <div className={styles.gameDescription}>
      {isSSR || (!selectedGame && isMenuOpen) ? <h2>Παντομίμα</h2> : null}
      <p>
        Μάζεψε τους φίλους σου και διασκεδάστε παίζοντας{" "}
        <strong>Παντομίμα</strong>.
      </p>
      <p>
        H Παντομίμα είναι ένα ξεκαρδιστικό παιχνίδι που περιλαμβάνεται στα
        <strong>CK-Games</strong>. όπου σκοπός είναι να περιγράψεις ταινίες
        στους συμπαίκτες σου χωρίς να μιλήσεις.
      </p>
      <h2>Πώς παίζεται η Παντομίμα?</h2>
      <ul>
        <li>
          Χωριστείτε σε <strong>δύο ή περισσότερες ομάδες</strong>
        </li>
        <li>
          Επιλέξτε το <strong>σκορ νίκης</strong>
          <br />
          Αν για παράδειγμα επιλέξετε τις πέντε (5) νίκες, τότε το παιχνίδι θα
          ολοκληρωθεί όταν μία από τις ομάδες φτάσει στις 5 νίκες και όλες οι
          ομάδες έχουν παίξει τον ίδιο αριθμό γύρων. Το ενδεχόμενο της ισοπαλίας
          είναι υπαρκτό.
        </li>
        <li>
          Επιλέξτε τον <strong>χρόνο</strong> που θα έχει η κάθε ομάδα στη
          διάθεσή της για να βρεί τη ζητούμενη ταινία
        </li>
        <li>
          Πριν διαγωνιστεί η κάθε ομάδα, οι αντίπαλες ομάδες{" "}
          <strong>επιλέγουν μία (1)</strong> από τις δύο (2) διαθέσιμες ταινίες.
        </li>
        <li>
          Όταν έρχεται η σειρά της ομάδας σου, τότε ένας παίκτης αναλαμβάνει να
          <strong>πειγράψει</strong> την ταινία που βλέπει στην οθόνη{" "}
          <strong>χωρίς να μιλήσει.</strong> <br />
          Αν τη βρείτε τότε κερδίζετε έναν πόντο, αν όχι τότε κρίμα.
        </li>
        <li>
          Όταν μία ή περισσότερες ομάδες φτάσει το σκορ νίκης, το παιχνίδι
          ολοκληρώνεται.
        </li>
      </ul>
    </div>
  );

  const tikTakBoomDescription = (
    <div className={styles.gameDescription}>
      {isSSR || (!selectedGame && isMenuOpen) ? <h2>Τικ-Τακ-Μπουμ</h2> : null}
      <p>
        Μάζεψε τους φίλους σου και διασκεδάστε παίζοντας{" "}
        <strong>Τικ-Τακ-Μπουμ</strong>.
      </p>
      <p>
        To Τικ-Τακ-Μπουμ είναι ένα ξεκαρδιστικό παιχνίδι που περιλαμβάνεται στα
        <strong>CK-Games</strong>. όπου σκοπός είναι να πεις την κατάλληλη λέξη
        πρωτού σκάσει η βόμβα στα χέρια σου.
      </p>
      <h2>Πώς παίζεται το Τικ-Τακ-Μπουμ?</h2>
      <ul>
        <li>Καταχωρίστε τα ονόματά σας</li>
        <li>
          Επιλέξτε το <strong>σκορ ήττας</strong>
          <br />
          Αν για παράδειγμα επιλέξετε τις πέντε (5) νίκες, τότε το παιχνίδι θα
          ολοκληρωθεί όταν ένας από τους παίκτες φτάσει στις 5 νίκες. Το
          ενδεχόμενο της ισοπαλίας δεν είναι υπαρκτό.
        </li>
        <li>
          Όταν έρχεται η σειρά σου, τότε πρέπει να{" "}
          <strong>πεις την κατάλληλη λέξη</strong> και να πατήσεις στο κουμπί
          ώστε να παίξει ο επόμενος παίκτης. H λέξη που θα πεις πρέπει να
          περιλαμβάνει τη συλλαβή που βλέπεις στην οθόνη και στην κατάλληλη
          θέση. <br />
          Αν στην οθόνη αναγράφεται το "Τικ" τότε η λέξη πρέπει να ξεκινάει απ'ο
          την επιλεγμενη συλλαβή. <br />
          Αν στην οθόνη αναγράφεται το "Τακ" τότε η λέξη πρέπει να τελειώνει με
          την επιλεγμενη συλλαβή. <br />
          Αν στην οθόνη αναγράφεται το "Μπουμ" τότε η λέξη πρέπει απλά να
          περιλαμβάνει την επιλεγμενη συλλαβή. <br />
        </li>
        <li>
          Όταν η βόμβα σκάσει στα χέρια ενός παίκτη τότε, ο παίκτης{" "}
          <strong>
            δε συμμετέχει στο παιχνίδι μέχρι να ολοκληρωθεί ο γύρος
          </strong>
          . <br />Ο γύρος ολοκληρώνεται όταν μείνει μόνο ένας παίκτης, ο οποίος
          είναι αυτός που κερδίζει και τον πόντο.
        </li>
        <li>
          Όταν ένας παίκτης φτάσει το σκορ νίκης, το παιχνίδι ολοκληρώνεται.
        </li>
      </ul>
    </div>
  );

  const gameDescription = (
    <>
      {isSSR ||
      (isMenuOpen &&
        (selectedGame === AvailableGames.tikTakBoom || !selectedGame))
        ? tikTakBoomDescription
        : null}
      {isMenuOpen && !selectedGame ? <hr /> : null}
      {isSSR ||
      (isMenuOpen &&
        (selectedGame === AvailableGames.pantomime || !selectedGame))
        ? pantomimeDescription
        : null}
    </>
  );

  const homeButton = isMenuOpen && !!selectedGame && (
    <Link to={"/"}>
      <Button className={classnames(styles.homeButton)}>Αρχική</Button>
    </Link>
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
          {h1Title}
          {gameDescription}
          {homeButton}
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
