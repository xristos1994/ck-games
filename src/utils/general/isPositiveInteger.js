export const isPositiveInteger = value => {
  value = value.trim();
  if (!value) {
    return false;
  }
  value = value.replace(/^0+/, "") || "0";
  var n = Math.floor(Number(value));
  return n !== Infinity && String(n) === value && n > 0;
};
