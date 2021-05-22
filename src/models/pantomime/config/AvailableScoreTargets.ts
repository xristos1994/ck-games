interface IAvailableScoreTargets {
  default: number;
  allScoreTargets: number[];
}

export const AvailableScoreTargets: IAvailableScoreTargets = {
  allScoreTargets: [1, 5, 10, 15, 20],
  default: 10,
};
