import { getRandomInteger } from "@utils/general";
import { Modes, Syllables } from "./../config";

export const findModeAndSyllable = () => {
  const result = {};
  const modeKeys = Object.keys(Modes);
  result.mode = Modes[modeKeys[getRandomInteger(0, modeKeys.length - 1)]];

  if (result.mode.id === Modes.tik.id) {
    result.syllable =
      Syllables.start[getRandomInteger(0, Syllables.start.length - 1)];
  } else if (result.mode.id === Modes.tak.id) {
    result.syllable =
      Syllables.end[getRandomInteger(0, Syllables.end.length - 1)];
  } else {
    result.syllable =
      Syllables.everywhere[
        getRandomInteger(0, Syllables.everywhere.length - 1)
      ];
  }

  return result;
};
