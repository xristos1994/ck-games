import { availableLangs } from '@models/i18n/utils';
import { ITranslate } from './../interfaces';
import { translationsEN, translationsEL } from './translations';

export const translate: ITranslate = (label, placeholders = [], langCode) => {
  const translations = langCode === availableLangs.en.code ? { ...translationsEN } : { ...translationsEL };
  let result = translations[label] || label || '';

  placeholders.forEach((ph, idx) => {
    result = result.replace(`%${idx}`, ph as string);
  });

  return result;
};