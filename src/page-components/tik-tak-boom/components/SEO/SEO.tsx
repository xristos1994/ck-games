import React, { FC, ReactElement } from "react";
import { GlobalSEO, LocalSEO } from "@components";
import { getCanonicalBaseUrl } from "@utils/general";

const title = "CK-Games: Tik-Tak-Boom";
const canonicalUrl = `${getCanonicalBaseUrl()}/tik-tak-boom`;
const description = "Have fun with your friend playing Tik-Tak-Boom.";
const keywords = "games, fun, friends, tik-tak-boom";
const ogImage = `${getCanonicalBaseUrl()}${
  require("@images/og/tikTakBoom.png").default
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
