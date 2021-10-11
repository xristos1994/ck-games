import React from 'react';
import { UkFlagIcon } from './../';
import renderer from 'react-test-renderer';

describe('components/icons/UkFlagIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<UkFlagIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
