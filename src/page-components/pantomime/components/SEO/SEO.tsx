import React, { FC, ReactElement } from "react";
import { GlobalSEO, LocalSEO } from "@components";
import { getCanonicalBaseUrl } from "@utils/general";

const title = "CK-Games: Παντομίμα";
const canonicalUrl = `${getCanonicalBaseUrl()}/pantomime/`;
const description = "Διασκέδασε με την παρέα σου παίζοντας παντομίμα.";
const keywords =
  "παιχνίδι, διασκέδαση, φίλοι, παρέα, παντομίμα, μίμηση, ταινία, νίκη, ήττα, ισοπαλία";
const ogImage = `${getCanonicalBaseUrl()}${
  require("@images/og/pantomime.png").default
}`;

const SEO: FC = (): ReactElement => {
  return (
    <>
      <GlobalSEO />
      <LocalSEO {...{ title, canonicalUrl, description, keywords, ogImage }} />
    </>
  );
};

export { SEO };
