import React, { FC, ReactElement } from 'react';
import { GlobalSEO, LocalSEO } from '@components';
import { compose } from '@utils/component-utils';
import { withTranslation, ITranslate } from '@models/i18n/hoc';
import { getCanonicalBaseUrl } from '@utils/general';

interface IProps {
  t: ITranslate;
}

const ogImage = `${getCanonicalBaseUrl()}${
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('@images/og/tikTakBoom.png').default
}`;

export const _SEO: FC<IProps> = ({ t }): ReactElement => {
  const title = t('Tik-Tak-Boom Meta Title');
  const canonicalUrl = `${getCanonicalBaseUrl()}/${t('Tik-Tak-Boom Meta Canonical Pathname')}`;
  const description = t('Tik-Tak-Boom Meta Description');
  const keywords = t('Tik-Tak-Boom Meta Keywords');
  const alternateLangLinks = [
    {
      langCode: 'el',
      link: `${getCanonicalBaseUrl()}/el/${t('Tik-Tak-Boom Meta Canonical Pathname')
        .replace('en/', '')
        .replace('el/', '')}`
    },
    {
      langCode: 'en',
      link: `${getCanonicalBaseUrl()}/en/${t('Tik-Tak-Boom Meta Canonical Pathname')
        .replace('en/', '')
        .replace('el/', '')}`
    }
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
