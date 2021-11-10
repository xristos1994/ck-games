import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { lang } from '@models/i18n/props';
import { ILang } from '@models/i18n/interfaces';
import { IState } from '@models/interfaces';
import { ITranslate } from './interfaces';
import { translate } from './utils/translate';

interface IProps {
  t: ITranslate;

  lang: ILang;
}

const withTranslation = (WrappedComponent: FC<IProps>): FC<IProps> => {
  const _Component: FC<IProps> = (props) => {
    return (
      <WrappedComponent
        {...props}
        t={(label: string, placeholders?: (string | number)[]) => translate(label, placeholders, props.lang.code)}
      />
    );
  };

  const Component = connect(
    createStructuredSelector<
      IState,
      {
        lang: ILang;
      },
      {
        lang: ILang;
      }
    >({
      lang
    })
  )(_Component);

  return Component;
};

export { withTranslation };
