import UIfx from "uifx";

const endOfTimeAudio = require("@sounds/end_of_time.mp3").default;

export const getAudio = (audioKey: "endOfTime"): UIfx | undefined => {
  return {
    endOfTime: new UIfx(endOfTimeAudio, {
      volume: 1,
    }),
  }[audioKey];
};
