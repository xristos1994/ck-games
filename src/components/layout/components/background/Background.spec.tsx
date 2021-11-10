import React from 'react';
import renderer from 'react-test-renderer';
import { Background } from './Background';

describe('components/Background', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Background />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
