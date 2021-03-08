export const getRandomInteger = (min, max, maxInclusive = true) => {
  const _min = Math.ceil(min);
  const _max = Math.floor(max);
  return maxInclusive
    ? Math.floor(Math.random() * (_max - _min + 1) + _min)
    : Math.floor(Math.random() * (_max - _min) + _min);
};
