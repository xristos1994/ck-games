import { strConcat } from '@utils/general';
/**
 * Join classnames together conditionally
 *
 * @param {...[String | Number | Object]} args
 * @returns {String}
 */
export const classnames = (...classNames: (string | number | Record<string, unknown>)[]): string => {
  const concatWithWhitespace = strConcat(' ');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return concatWithWhitespace(...classNames);
};
