import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`[%PageSeoTitle%]`}</title>
    </Helmet>
  );
};

export { SEO };
