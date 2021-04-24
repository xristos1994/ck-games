import React, { FC, ReactElement } from "react";
import { GlobalSEO, LocalSEO } from "@components";
import { getCanonicalBaseUrl } from "@utils/general";

const title = "CK-Games: Pantomime";
const canonicalUrl = `${getCanonicalBaseUrl()}/pantomime`;
const description = "Have fun with your friend playing Pantomime.";
const keywords = "games, fun, friends, pantomime";
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
