export const strConcat = (separator?: string): ((items: (string | number | Record<string, boolean>)[]) => string) => {
  const _seperator = separator || ' ';
  return (...items: (string | number | Record<never, boolean>)[]): string => {
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const itemsLength = items.length;
    let result = '';

    if (!itemsLength) {
      return result;
    }

    for (let i = 0; i < itemsLength; i += 1) {
      const item = items[i];

      if (!item) {
        continue;
      }

      if (typeof item === 'string' || typeof item === 'number') {
        result += (result ? _seperator : '') + item;
      } else if (typeof item === 'object') {
        for (const key in item) {
          if (hasOwnProperty.call(item, key) && item[key]) {
            result += (result ? _seperator : '') + key;
          }
        }
      }
    }

    return result;
  };
};
