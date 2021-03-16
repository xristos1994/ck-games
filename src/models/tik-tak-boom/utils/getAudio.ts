import UIfx from "uifx";

const tikTakAudio = require("@sounds/tik-tak.mp3").default;
const boomAudio = require("@sounds/boom.mp3").default;

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
