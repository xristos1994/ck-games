import React from 'react';
import { ArrowDownIcon } from './../';
import renderer from 'react-test-renderer';

describe('components/icons/ArrowDownIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ArrowDownIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
