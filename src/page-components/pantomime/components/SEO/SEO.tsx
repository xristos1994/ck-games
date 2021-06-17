import React, { FC, ReactElement } from "react";
import { GlobalSEO, LocalSEO } from "@components";
import { compose } from "@utils/component-utils";
import { withTranslation, ITranslate } from "@models/i18n/hoc";
import { getCanonicalBaseUrl } from "@utils/general";

interface IProps {
  t: ITranslate;
}

const ogImage = `${getCanonicalBaseUrl()}${
  require("@images/og/pantomime.png").default
}`;

const _SEO: FC<IProps> = ({ t }): ReactElement => {
  const title = t("Pantomime Meta Title");
  const canonicalUrl = `${getCanonicalBaseUrl()}/${t(
    "Pantomime Meta Canonical Pathname"
  )}`;
  const description = t("Pantomime Meta Description");
  const keywords = t("Pantomime Meta Keywords");

  return (
    <>
      <GlobalSEO />
      <LocalSEO {...{ title, canonicalUrl, description, keywords, ogImage }} />
    </>
  );
};

const SEO = compose(withTranslation)(_SEO);

export { SEO };
