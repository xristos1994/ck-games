import React, { FC, ReactElement } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { lang } from "@models/i18n/props";
import { ILang } from "@models/i18n/interfaces";
import { IState } from "@models/interfaces";
import { availableLangs } from "@models/i18n/utils";
import { ITranslate } from "./interfaces";

const translationsEN = {
  CONTINUE: "CONTINUE",
  BACK: "BACK",
  "Player, it is your turn": "%0, it is your turn!",
};

const translationsEL = {
  CONTINUE: "ΣΥΝΕΧΕΙΑ",
  BACK: "ΠΙΣΩ",
  "Player, it is your turn": "%0, είναι η σειρά σου!",
};

interface IProps {
  t: ITranslate;

  lang: ILang;
}

const translate: IProps["t"] = (label, placeholders = [], langCode) => {
  const translations =
    langCode === availableLangs.en.code
      ? { ...translationsEN }
      : { ...translationsEL };
  let result = translations[label];

  placeholders.forEach((ph, idx) => {
    result = result.replace(`%${idx}`, ph);
  });

  return result;
};

const withTranslation = (WrappedComponent: FC<any>): FC<IProps> => {
  const _Component: FC<IProps> = ({ lang, ...props }) => {
    return (
      <WrappedComponent
        {...props}
        t={(label, placeholders) => translate(label, placeholders, lang.code)}
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
      lang,
    })
  )(_Component);

  return Component;
};

export { withTranslation };
