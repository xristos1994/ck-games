import { strConcat } from "@utils/general";
/**
 * Join classnames together conditionally
 *
 * @param {...[String | Number | Object]} args
 * @returns {String}
 */
export const classnames = (
  ...classNames: (string | number | Record<string, string | number>)[]
): string => {
  const concatWithWhitespace = strConcat(" ");
  return (concatWithWhitespace as any)(...classNames);
};
