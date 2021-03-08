import UIfx from "uifx";
import tikTakAudio from "@sounds/tik-tak.mp3";
import boomAudio from "@sounds/boom.mp3";

export const audios = {
  tikTak: new UIfx(tikTakAudio, {
    volume: 1,
  }),
  boom: new UIfx(boomAudio, {
    volume: 1,
  }),
};
