import React, { FC, ReactElement } from "react";
import { GlobalSEO, LocalSEO } from "@components";
import { getCanonicalBaseUrl } from "@utils/general";

const title = "CK-Games";
const canonicalUrl = getCanonicalBaseUrl();
const description =
  "You can choose how you will have fun with your friend. Pantomime or Tik-Tak-Boom?";
const keywords = "games, fun, friends, pantomime, tik-tak-boom";
const ogImage = `${getCanonicalBaseUrl()}${
  require("@images/og/home.png").default
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
