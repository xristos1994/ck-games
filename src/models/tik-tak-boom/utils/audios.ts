import UIfx from "uifx";
import tikTakAudio from "../../../sounds/tik-tak.mp3"; //Alias "@sounds/tik-tak.mp3";
import boomAudio from "../../../sounds/boom.mp3"; //Alias "@sounds/boom.mp3";

interface Audios {
  tikTak: UIfx;
  boom: UIfx;
}

const ssrFakeAudio: Audios = {
  tikTak: { play: v => null, setVolume: v => null },
  boom: { play: v => null, setVolume: v => null },
};

export const audios: Audios =
  typeof window !== "undefined"
    ? {
        tikTak: new UIfx(tikTakAudio, {
          volume: 1,
        }),
        boom: new UIfx(boomAudio, {
          volume: 1,
        }),
      }
    : { ...ssrFakeAudio };
