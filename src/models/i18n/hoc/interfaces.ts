import { ILang } from '@models/i18n/interfaces';

export interface ITranslate {
  (str: string, placeholders?: (string | number)[], langCode?: ILang['code']): string;
}
