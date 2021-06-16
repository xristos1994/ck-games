import React, { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { compose } from "@utils/component-utils";
import { withTranslation, ITranslate } from "@models/i18n/hoc";

interface IProps {
  t: ITranslate;
}

// TODO To add locale meta tags when internationalization is done
const _GlobalSEO: FC<IProps> = ({ t }): ReactElement => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="author" content={t("Meta Author")} />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content={t("Meta Content")} />
      <html lang={t("html lang")} />
    </Helmet>
  );
};

const GlobalSEO = compose(withTranslation)(_GlobalSEO);

export { GlobalSEO };
