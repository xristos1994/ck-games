import React, { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";

const SEO: FC = (): ReactElement => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`Tik Tak Boom`}</title>
    </Helmet>
  );
};

export { SEO };