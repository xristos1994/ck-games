import React from 'react';
import { BombIcon } from './../';
import renderer from 'react-test-renderer';

describe('components/icons/BombIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BombIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
