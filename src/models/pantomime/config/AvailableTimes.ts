interface IAvailableTimes {
  default: number;
  allTimes: number[];
}

export const AvailableTimes: IAvailableTimes = {
  allTimes: [30, 60, 90, 120],
  default: 60,
};
