import React, { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { lang } from "@models/i18n/props";
import { ILang } from "@models/i18n/interfaces";
import { IState } from "@models/interfaces";
import { availableLangs } from "@models/i18n/utils";
import { ITranslate } from "./interfaces";

const translationsEN = {
  "Meta Author": "Christos Korompokis",
  "Meta Content": "English",
  "html lang": "en",
  "Menu Title SSR": "CK-Games pantomime Tik-Tak-Boom",
  "CK-Games": "CK-Games",
  Pantomime: "Pantomime",
  "Tik-Tak-Boom": "Tik-Tak-Boom",
  CONTINUE: "CONTINUE",
  BACK: "BACK",
  "Player, it is your turn": "%0, it is your turn!",
  "Pantomime Description HTML": `
        <p>
          Gather your friend and have fun playing
          <strong> Pantomime</strong>.
        </p>
        <p>
          Pantomime is a game with a lot of fun that is included in
          <strong> CK-Games</strong>. The goal is to describe movies to your
          teamates without talking.
        </p>
        <h2>How to play Pantomime?</h2>
        <ul>
          <li>
            Create<strong> two or more teams</strong>.
          </li>
          <li>
            Choose the<strong> winning score</strong>.
            <br />
            If for instance, you choose five (5) as winning score, then, the game
            will be completed when one of the teams reaches these five wins and
            all team have played the same number of rounds. It's possible to end
            up with draw.
          </li>
          <li>
            Choose the<strong> time</strong> that every team will have available
            in order to find the required movie.
          </li>
          <li>
            Before a team starts its round, the other teams have to
            <strong> choose one (1)</strong> of the two (2) available movies
          </li>
          <li>
            When it is your team's turn to play, then one of the players of your team
            have to <strong> describe </strong> the movie that appears in the screen
            <strong> without talking</strong>.<br />
            If you find the movie, then you win a point, otherwise, sorry.
          </li>
          <li>
            When one or more teams reach the winning score, then the game ends.
          </li>
        </ul>
      `,
  "Tik-Tak-Boom Description HTML": `
        <p>
          Gather your friends and have fun playing
          <strong> Tik-Tak-Boom</strong>.
        </p>
        <p>
        Tik-Tak-Boom is a game with a lot of fun that is included in
        <strong> CK-Games</strong>. The goal is to say the appropriate
        word before bomb explodes in your hands.
        </p>
        <h2>How to play Tik-Tak-Boom?</h2>
        <ul>
          <li>Insert all players' name</li>
          <li>
            Choose the <strong> winning score</strong>
            <br />
            If for instance, you choose five (5) as winning score, then the game
            will be completed when on player reaches the five (5) wins. Dray is
            not a possible scenario.
          </li>
          <li>
            When it is your turn, you have to<strong> tell the appropriate word </strong>
            and press the button in order to pass the bomb to the next player.
            The word that you are supposed to say must include the syllable you see
            on your screen in the appropriate position. <br />
            If "Tik..." is on the screen, then the word must start with the selected syllable. <br />
            If "...Tak" is on the screen, then the word must end with the selected syllable. <br />
            If "Tik...Tak" is on the screen, then the word must just contains the selected syllable. <br />
          </li>
          <li>
            When the bomb explodes in one of the players' hands, then this player
            <strong> stops participating in the game until the round is completed</strong>.
            <br />
            The round is completed when only one player has been left and this player
            is the one that wins the point.
          </li>
          <li>
            When a player reaches the winning score, the game is completed.
          </li>
        </ul>
    `,
  Home: "Home",
  "Team, it is your turn": "%0, it is your turn!",
  "Game Completed": "Game Completed",
  "Restart Game": "Restart Game",
  "Player, bomb exploded in your hands": "%0, bomb exploded in your hands!",
  "Player Setup": "Players' Setup",
  "Add Player": "Add Player",
  "Next Player": "Next Player",
  "Previous Player": "Previous Player",
  "Tik Mode Description": "Word must start with the selected syllable",
  "Tak Mode Description": "Word must end with the selected syllable",
  "Tik...Tak Mode Description": "Word must just contain the selected syllable",
  Scoreboard: "Scoreboard",
  "Choose Winning Score": "Choose Winning Score",
  "Tik-Tak-Boom Meta Title": "CK-Games: Tik-Tak-Boom",
  "Tik-Tak-Boom Meta Canonical Pathname": "en/tik-tak-boom/",
  "Tik-Tak-Boom Meta Description":
    "Have fun with your friend playing Tik-Tak-Boom",
  "Tik-Tak-Boom Meta Keywords":
    "game, entartainment, fun, win, lose, draw, tik-tak-boom, tik, tak, boom, bomb",
  "Choose Available Time": "Choose Available Time",
  Seconds: "Seconds",
  "Movie Not Found": "Movie Not Found!",
  "Movie Found": "Movie Found!",
  "Team, your turn completed": "%0, your turn completed!",
  "Pantomime Meta Title": "CK-Games: Pantomime",
  "Pantomime Meta Canonical Pathname": "en/pantomime/",
  "Pantomime Meta Description": "Have fun with your friend playing Pantomime.",
  "Pantomime Meta Keywords":
    "game, entertainment, fun, friends, company, pantomime, mime, movie, win, lose, draw",
  "Team Setup": "Teams' setup",
  "Add Team": "Add Team",
  "Home Meta Title": "CK-Games",
  "Home Meta Canonical Pathname": "en",
  "Home Meta Description":
    "You choose how you will have fun with your friends. Play Pantomime or Tik-Tak-Boom.",
  "Home Meta Keywords":
    "games, entertainment, fun, friends, company, pantomime, mime, movie, win, lose, draw, tik-tak-boom, tik, tak, boom, bomb",
};

const translationsEL = {
  "Meta Author": "Χρίστος Κορομπόκης",
  "Meta Content": "Greek",
  "html lang": "el",
  "Menu Title SSR": "CK-Games Παντομίμα Tik-Tak-Boom",
  "CK-Games": "CK-Games",
  Pantomime: "Παντομίμα",
  "Tik-Tak-Boom": "Tik-Tak-Boom",
  CONTINUE: "ΣΥΝΕΧΕΙΑ",
  BACK: "ΠΙΣΩ",
  "Player, it is your turn": "%0, είναι η σειρά σου!",
  "Pantomime Description HTML": `
        <p>
          Μάζεψε τους φίλους σου και διασκεδάστε παίζοντας
          <strong> Παντομίμα</strong>.
        </p>
        <p>
          H Παντομίμα είναι ένα ξεκαρδιστικό παιχνίδι που περιλαμβάνεται στα
          <strong> CK-Games</strong>. Σκοπός είναι να περιγράψεις ταινίες
          στους συμπαίκτες σου χωρίς να μιλήσεις.
        </p>
        <h2>Πώς παίζεται η Παντομίμα;</h2>
        <ul>
          <li>
            Χωριστείτε σε<strong> δύο ή περισσότερες ομάδες</strong>
          </li>
          <li>
            Επιλέξτε το<strong> σκορ νίκης</strong>
            <br />
            Αν για παράδειγμα επιλέξετε τις πέντε (5) νίκες, τότε το παιχνίδι θα
            ολοκληρωθεί όταν μία από τις ομάδες φτάσει στις 5 νίκες και όλες οι
            ομάδες έχουν παίξει τον ίδιο αριθμό γύρων. Το ενδεχόμενο της ισοπαλίας
            είναι υπαρκτό.
          </li>
          <li>
            Επιλέξτε τον<strong> χρόνο</strong> που θα έχει η κάθε ομάδα στη
            διάθεσή της για να βρεί τη ζητούμενη ταινία
          </li>
          <li>
            Πριν διαγωνιστεί η κάθε ομάδα, οι αντίπαλες ομάδες
            <strong> επιλέγουν μία (1)</strong> από τις δύο (2) διαθέσιμες ταινίες.
          </li>
          <li>
            Όταν έρχεται η σειρά της ομάδας σου, τότε ένας παίκτης αναλαμβάνει να
            <strong> πειγράψει</strong> την ταινία που βλέπει στην οθόνη
            <strong> χωρίς να μιλήσει.</strong> <br />
            Αν τη βρείτε τότε κερδίζετε έναν πόντο, αν όχι τότε κρίμα.
          </li>
          <li>
            Όταν μία ή περισσότερες ομάδες φτάσει το σκορ νίκης, το παιχνίδι
            ολοκληρώνεται.
          </li>
        </ul>
      `,
  "Tik-Tak-Boom Description HTML": `
        <p>
          Μάζεψε τους φίλους σου και διασκεδάστε παίζοντας
          <strong> Tik-Tak-Boom</strong>.
        </p>
        <p>
          To Tik-Tak-Boom είναι ένα ξεκαρδιστικό παιχνίδι που περιλαμβάνεται στα
          <strong> CK-Games</strong>. όπου σκοπός είναι να πεις την κατάλληλη λέξη
          πρωτού σκάσει η βόμβα στα χέρια σου.
        </p>
        <h2>Πώς παίζεται το Tik-Tak-Boom;</h2>
        <ul>
          <li>Καταχωρίστε τα ονόματά σας.</li>
          <li>
            Επιλέξτε το<strong> σκορ νίκης</strong>.
            <br />
            Αν για παράδειγμα επιλέξετε τις πέντε (5) νίκες, τότε το παιχνίδι θα
            ολοκληρωθεί όταν ένας από τους παίκτες φτάσει στις 5 νίκες. Το
            ενδεχόμενο της ισοπαλίας δεν είναι υπαρκτό.
          </li>
          <li>
            Όταν έρχεται η σειρά σου, τότε πρέπει να
            <strong> πεις την κατάλληλη λέξη</strong> και να πατήσεις στο κουμπί
            ώστε να παίξει ο επόμενος παίκτης. H λέξη που θα πεις πρέπει να
            περιλαμβάνει τη συλλαβή που βλέπεις στην οθόνη και στην κατάλληλη
            θέση. <br />
            Αν στην οθόνη αναγράφεται το "Tik..." τότε η λέξη πρέπει να ξεκινάει από
            την επιλεγμενη συλλαβή. <br />
            Αν στην οθόνη αναγράφεται το "...Tak" τότε η λέξη πρέπει να τελειώνει με
            την επιλεγμενη συλλαβή. <br />
            Αν στην οθόνη αναγράφεται το "Tik...Tak" τότε η λέξη πρέπει απλά να
            περιλαμβάνει την επιλεγμενη συλλαβή. <br />
          </li>
          <li>
            Όταν η βόμβα σκάσει στα χέρια ενός παίκτη τότε, ο παίκτης
            <strong> δε συμμετέχει στο παιχνίδι μέχρι να ολοκληρωθεί ο γύρος</strong>
            . <br />Ο γύρος ολοκληρώνεται όταν μείνει μόνο ένας παίκτης, ο οποίος
            είναι αυτός που κερδίζει και τον πόντο.
          </li>
          <li>
            Όταν ένας παίκτης φτάσει το σκορ νίκης, το παιχνίδι ολοκληρώνεται.
          </li>
        </ul>
    `,
  Home: "Αρχική",
  "Team, it is your turn": "%0, είναι η σειρά σας!",
  "Game Completed": "Το Παιχνίδι Ολοκληρώθηκε",
  "Restart Game": "Επανεκκίνηση Παιχνιδιού",
  "Player, bomb exploded in your hands": "%0, η βόμβα έσκασε στα χέρια σου!",
  "Player Setup": "Εισαγωγή Παικτών",
  "Add Player": "Προσθήκη Παίκτη",
  "Next Player": "Επόμενος Παίκτης",
  "Previous Player": "Προηγούμενος Παίκτης",
  "Tik Mode Description": "Η λέξη πρέπει να ξεκινά με την επιλεγμένη συλλαβή",
  "Tak Mode Description":
    "Η λέξη πρέπει να τελειώνει με την επιλεγμένη συλλαβή",
  "Tik...Tak Mode Description":
    "Η λέξη πρέπει απλά να περιέχει την επιλεγμένη συλλαβή",
  Scoreboard: "Βαθμολογία",
  "Choose Winning Score": "Επιλέξτε το σκορ νίκης",
  "Tik-Tak-Boom Meta Title": "CK-Games: Tik-Tak-Boom",
  "Tik-Tak-Boom Meta Canonical Pathname": "tik-tak-boom/",
  "Tik-Tak-Boom Meta Description":
    "Διασκέδασε με την παρέα σου παίζοντας Tik-Tak-Boom.",
  "Tik-Tak-Boom Meta Keywords":
    "παιχνίδι, διασκέδαση, νίκη, ήττα, ισοπαλία, tik-tak-boom, tik, tak, boom, βόμβα",
  "Choose Available Time": "Επιλέξτε τον διαθέσιμο χρόνο",
  Seconds: "Δευτερόλεπτα",
  "Movie Not Found": "Η Ταινία Δε Βρέθηκε!",
  "Movie Found": "Η Ταινία Βρέθηκε!",
  "Team, your turn completed": "%0, η σειρά σας ολοκληρώθηκε!",
  "Pantomime Meta Title": "CK-Games: Παντομίμα",
  "Pantomime Meta Canonical Pathname": "pantomime/",
  "Pantomime Meta Description":
    "Διασκέδασε με την παρέα σου παίζοντας Παντομίμα.",
  "Pantomime Meta Keywords":
    "παιχνίδι, διασκέδαση, φίλοι, παρέα, παντομίμα, μίμηση, ταινία, νίκη, ήττα, ισοπαλία",
  "Team Setup": "Εισαγωγή Ομάδων",
  "Add Team": "Προσθήκη Ομάδας",
  "Home Meta Title": "CK-Games",
  "Home Meta Canonical Pathname": "",
  "Home Meta Description":
    "Εσύ επιλέγεις πως θα διασκεδάσεις με την παρέα σου. Παίξτε Παντομίμα ή Tik-Tak-Boom.",
  "Home Meta Keywords":
    "παιχνίδι, διασκέδαση, φίλοι, παρέα, παντομίμα, μίμηση, ταινία, νίκη, ήττα, ισοπαλία, tik-tak-boom, tik, tak, boom, βόμβα",
};

interface IProps {
  t: ITranslate;

  lang: ILang;
}

const translate: IProps["t"] = (label, placeholders = [], langCode) => {
  const translations =
    langCode === availableLangs.en.code
      ? { ...translationsEN }
      : { ...translationsEL };
  let result = translations[label] || label || "";

  placeholders.forEach((ph, idx) => {
    result = result.replace(`%${idx}`, ph);
  });

  return result;
};

const withTranslation = (WrappedComponent: FC<any>): FC<IProps> => {
  const _Component: FC<IProps> = props => {
    return (
      <WrappedComponent
        {...props}
        t={(label, placeholders) =>
          translate(label, placeholders, props.lang.code)
        }
      />
    );
  };

  const Component = connect(
    createStructuredSelector<
      IState,
      {
        lang: ILang;
      },
      {
        lang: ILang;
      }
    >({
      lang,
    })
  )(_Component);

  return Component;
};

export { withTranslation };
