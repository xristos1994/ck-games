import React from 'react';
import renderer from 'react-test-renderer';
import { _GlobalSEO } from './GlobalSEO';

describe('components/GlobalSEO', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <_GlobalSEO t={(label) => label}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
