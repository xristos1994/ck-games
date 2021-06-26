import UIfx from 'uifx';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tikTakAudio = require('@sounds/tik-tak.mp3').default;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const boomAudio = require('@sounds/boom.mp3').default;

export const getAudio = (audioKey: 'tikTak' | 'boom'): UIfx | undefined => {
  document.querySelectorAll('audio').forEach((audioElem) => audioElem.remove());

  return {
    tikTak: new UIfx(tikTakAudio, {
      volume: 1
    }),
    boom: new UIfx(boomAudio, {
      volume: 1
    })
  }[audioKey];
};
