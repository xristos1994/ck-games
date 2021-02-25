/**
 * Concatenate strings conditionally.
 * strConcat(separator: String) => (...items: [...(String | Number | Object)]) => String
 *
 * @param {String} [separator=' '] The separator to concatenate strings with.
 * @returns {function}
 * @eaxample

 * const concatWithWhitespace = strConcat();
 * concatWithWhitespace('a', { 'b': true }, { 'c': false }, 'd', 'e'); // -> 'a b d e'
 *
 * const concatWithUnderscore = strConcat('_');
 * concatWithUnderscore('a', { 'b': true }, { 'c': false }, 'd', 'e'); // ->'a_b_d_e'
 */
export const strConcat = separator => {
  return (...items) => {
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    const itemsLength = items.length;
    let result = "";

    if (!itemsLength) {
      return result;
    }

    for (let i = 0; i < itemsLength; i += 1) {
      const item = items[i];

      if (!item) {
        continue;
      }

      if (typeof item === "string" || typeof item === "number") {
        result += (result ? separator : "") + item;
      } else if (typeof item === "object") {
        for (let key in item) {
          if (hasOwnProperty.call(item, key) && item[key]) {
            result += (result ? separator : "") + key;
          }
        }
      }
    }

    return result;
  };
};
