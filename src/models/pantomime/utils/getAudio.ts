import UIfx from "uifx";

const boomAudio = require("@sounds/boom.mp3").default;

export const getAudio = (audioKey: string): UIfx | undefined => {
  return {
    boom: new UIfx(boomAudio, {
      volume: 1,
    }),
  }[audioKey];
};
