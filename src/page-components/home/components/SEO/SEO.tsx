import React, { FC, ReactElement } from "react";
import { GlobalSEO, LocalSEO } from "@components";
import { getCanonicalBaseUrl } from "@utils/general";

const title = "CK-Games";
const canonicalUrl = `${getCanonicalBaseUrl()}/`;
const description =
  "Εσύ επιλέγεις πως θα διασκεδάσεις με την παρέα σου. Παίξτε Παντομίμα ή Tik-Tak-Boom.";
const keywords =
  "παιχνίδι, διασκέδαση, φίλοι, παρέα, παντομίμα, μίμηση, ταινία, νίκη, ήττα, ισοπαλία, tik-tak-boom, tik, tak, boom, βόμβα";
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
