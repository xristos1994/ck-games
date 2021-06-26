import { availableLangs } from './availableLangs';

export const findLangInArray = (array: string[]): string => {
  return (
    Object.keys(availableLangs)
      .filter((lang) => lang !== 'default')
      .find((lang) => array.includes(lang)) || ''
  );
};
