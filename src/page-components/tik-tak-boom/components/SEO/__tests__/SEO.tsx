import React from 'react';
import renderer from 'react-test-renderer';
import { _SEO as SEO } from './../SEO';

const GlobalSEO = () => {
  return (
    <div>
      GlobalSEO
    </div>
  );
};

const LocalSEO = (
  { title, canonicalUrl, description, keywords, ogImage, alternateLangLinks }:
  { title: string; canonicalUrl: string; description: string; keywords: string; ogImage: string; alternateLangLinks: { langCode: string; link: string }[]; }
) => {
  return (
    <div>
      {title}
      {canonicalUrl}
      {canonicalUrl}
      {description}
      {keywords}
      {ogImage}
      {alternateLangLinks.map(({ langCode, link }) => `${langCode} - ${link}`)}
    </div>
  );
};

jest.mock('./../../../../../utils/general', () => ({
  __esModule: true,
  getCanonicalBaseUrl: () => 'https://ck-test.com'
}));

jest.mock('./../../../../../components/', () => ({
  __esModule: true,
  GlobalSEO: GlobalSEO,
  LocalSEO: LocalSEO
}));

const t = (label: string, param?: string[]) => label + (param ? param[0] : '');

describe('page-components/TikTakBoom/StartRound', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <SEO
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t={t}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
