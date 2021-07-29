import React from 'react';
import { FlatLogoIcon } from './../';
import renderer from 'react-test-renderer';

describe('components/icons/FlatLogoIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FlatLogoIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
