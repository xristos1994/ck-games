import UIfx from "uifx";
import tikTakAudio from "@sounds/tik-tak.mp3";
import boomAudio from "@sounds/boom.mp3";

const ssrFakeAudio = {
  tikTak: { play: () => {} },
  boom: { play: () => {} },
};

export const audios =
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
