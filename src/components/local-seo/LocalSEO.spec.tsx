import React from 'react';
import renderer from 'react-test-renderer';
import { LocalSEO } from './LocalSEO';

describe('components/GlobalSEO', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <LocalSEO
        title="title"
        canonicalUrl="canonicalUrl"
        description="description"
        keywords="keywords"
        ogImage="ogImage"
        alternateLangLinks={[
          { langCode: 'EN', link: 'EN_link' },
          { langCode: 'EL', link: 'EL_link' }
        ]}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <LocalSEO
        title="title"
        canonicalUrl="canonicalUrl"
        description="description"
        keywords="keywords"
        ogImage="ogImage"
        alternateLangLinks={[]}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
