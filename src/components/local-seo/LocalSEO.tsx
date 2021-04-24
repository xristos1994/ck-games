import React, { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";

interface IProps {
  title: string;
  canonicalUrl: string;
  description: string;
  keywords: string;
  ogImage: string;
}

// TODO To add locale meta tags when internationalization is done
const LocalSEO: FC<IProps> = ({
  title,
  canonicalUrl,
  description,
  keywords,
  ogImage,
}): ReactElement => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {title && <meta name="title" content={title} />}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph meta tags */}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {title && <meta property="og:type" content="website" />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
    </Helmet>
  );
};

export { LocalSEO };
