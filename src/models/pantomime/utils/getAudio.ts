import UIfx from 'uifx';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const endOfTimeAudio = require('@sounds/end_of_time.mp3').default;

export const getAudio = (audioKey: 'endOfTime'): UIfx | undefined => {
  return {
    endOfTime: new UIfx(endOfTimeAudio, {
      volume: 1
    })
  }[audioKey];
};
