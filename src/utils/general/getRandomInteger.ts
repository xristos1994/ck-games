export const getRandomInteger = (min: number, max: number, maxInclusive?: boolean): number => {
  if (typeof min !== 'number' || typeof max !== 'number' || min > max || (min === max && !maxInclusive)) {
    return -1;
  }

  const _maxInclusive = maxInclusive == null ? true : !!maxInclusive;

  const _min = Math.ceil(min);
  const _max = Math.floor(max);
  return _maxInclusive
    ? Math.floor(Math.random() * (_max - _min + 1) + _min)
    : Math.floor(Math.random() * (_max - _min) + _min);
};
