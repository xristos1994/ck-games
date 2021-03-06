import React, { FC, ReactElement } from 'react';
import { GlobalSEO, LocalSEO } from '@components';
import { getCanonicalBaseUrl } from '@utils/general';
import { compose } from '@utils/component-utils';
import { withTranslation, ITranslate } from '@models/i18n/hoc';

interface IProps {
  t: ITranslate;
}

const ogImage = `${getCanonicalBaseUrl()}${
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('@images/og/home.png').default
}`;

export const _SEO: FC<IProps> = ({ t }): ReactElement => {
  const title = t('Home Meta Title');
  const canonicalUrl = `${getCanonicalBaseUrl()}/${t('Home Meta Canonical Pathname')}`;
  const description = t('Home Meta Description');
  const keywords = t('Home Meta Keywords');
  const alternateLangLinks = [
    { langCode: 'el', link: `${getCanonicalBaseUrl()}/el` },
    { langCode: 'en', link: `${getCanonicalBaseUrl()}/en` }
  ];

  return (
    <>
      <GlobalSEO />
      <LocalSEO {...{ title, canonicalUrl, description, keywords, ogImage, alternateLangLinks }} />
    </>
  );
};

const SEO = compose(withTranslation)(_SEO);

export { SEO };
