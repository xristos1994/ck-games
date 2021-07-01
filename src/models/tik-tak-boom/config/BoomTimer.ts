interface IBoomTimer {
  minSeconds: number;
  maxSeconds: number;
}

export const BoomTimer: IBoomTimer = {
  minSeconds: 15,
  maxSeconds: 50
};
