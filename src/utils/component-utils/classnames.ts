import { strConcat } from "./../general"; // Alias "@utils/general";
/**
 * Join classnames together conditionally
 *
 * @param {...[String | Number | Object]} args
 * @returns {String}
 */
export const classnames = (
  ...classNames: (string | number | object)[]
): string => {
  const concatWithWhitespace = strConcat(" ");
  return (concatWithWhitespace as any)(...classNames);
};
