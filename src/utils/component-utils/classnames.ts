import { strConcat } from '@utils/general';
/**
 * Join classnames together conditionally
 *
 * @param {...[String | Number | Object]} args
 * @returns {String}
 */
export const classnames = (
  ...classNames: (string | number | Record<string, unknown>)[]
): string => {
  const concatWithWhitespace = strConcat(' ');
  return concatWithWhitespace(...classNames);
};
