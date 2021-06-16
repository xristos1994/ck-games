import UIfx from "uifx";

const tikTakAudio = require("@sounds/tik-tak.mp3").default;
const boomAudio = require("@sounds/boom.mp3").default;

export const getAudio = (audioKey: "tikTak" | "boom"): UIfx | undefined => {
  //TODO  add remove polyfill if needed
  Array.prototype.forEach.call(document.querySelectorAll("audio"), audioElem =>
    audioElem.remove()
  );

  return {
    tikTak: new UIfx(tikTakAudio, {
      volume: 1,
    }),
    boom: new UIfx(boomAudio, {
      volume: 1,
    }),
  }[audioKey];
};
