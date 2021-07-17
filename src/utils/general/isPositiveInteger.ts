export const isPositiveInteger = (value: string | number): boolean => {
  if (typeof value !== 'string' && typeof value !== 'number') {
    return false;
  }

  let _value = String(value);

  _value = _value.trim();
  if (!_value) {
    return false;
  }
  _value = _value.replace(/^0+/, '') || '0';
  const n = Math.floor(Number(_value));
  return n !== Infinity && String(n) === _value && n > 0;
};
