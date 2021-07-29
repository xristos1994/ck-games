import React from 'react';
import { GreekFlagIcon } from './../';
import renderer from 'react-test-renderer';

describe('components/icons/GreekFlagIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<GreekFlagIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
