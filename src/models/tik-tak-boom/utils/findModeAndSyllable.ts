import { getRandomInteger } from '@utils/general';
import { Modes, SyllablesEL, SyllablesEN } from '@models/tik-tak-boom/config';
import { ISyllables } from '@models/tik-tak-boom/config/interfaces';
import { ISyllable, IMode } from '@models/tik-tak-boom/interfaces';
import { availableLangs } from '@models/i18n/utils';

interface IResult {
  mode: IMode;
  syllable: ISyllable;
}

const getSyllable = (mode: IMode, syllables: ISyllables): string => {
  let syllable = '';
  if (mode && mode.id === Modes.tik.id) {
    syllable = syllables.start[getRandomInteger(0, syllables.start.length - 1)];
  } else if (mode && mode.id === Modes.tak.id) {
    syllable = syllables.end[getRandomInteger(0, syllables.end.length - 1)];
  } else {
    syllable
      = syllables.everywhere[
        getRandomInteger(0, syllables.everywhere.length - 1)
      ];
  }

  return syllable;
};

export const findModeAndSyllable: () => IResult = () => {
  const modeKeys = Object.keys(Modes);

  const result: IResult = {
    mode: Modes[modeKeys[0]],
    syllable: ''
  };

  result.mode = Modes[modeKeys[getRandomInteger(0, modeKeys.length - 1)]];

  const syllableEL = getSyllable(result.mode, SyllablesEL);
  const syllableEN = getSyllable(result.mode, SyllablesEN);

  result.syllable = JSON.stringify({
    [availableLangs.en.code]: syllableEN,
    [availableLangs.el.code]: syllableEL
  });

  return result;
};
