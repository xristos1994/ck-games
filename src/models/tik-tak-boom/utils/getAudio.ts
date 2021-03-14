import UIfx from "uifx";

const tikTakAudio = require("../../../sounds/tik-tak.mp3").default; //Alias "@sounds/tik-tak.mp3";
const boomAudio = require("../../../sounds/boom.mp3").default; //Alias "@sounds/boom.mp3";

export const getAudio = (audioKey: string): UIfx | undefined => {
  return {
    tikTak: new UIfx(tikTakAudio, {
      volume: 1,
    }),
    boom: new UIfx(boomAudio, {
      volume: 1,
    }),
  }[audioKey];
};
