import React from 'react';
import { ArrowUpIcon } from './../';
import renderer from 'react-test-renderer';

describe('components/icons/ArrowUpIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ArrowUpIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
