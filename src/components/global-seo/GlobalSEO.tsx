import React, { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";

// TODO To add locale meta tags when internationalization is done
const GlobalSEO: FC = (): ReactElement => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="author" content="Christos Korompokis" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Greek" />
      <html lang="el" />
    </Helmet>
  );
};

export { GlobalSEO };
