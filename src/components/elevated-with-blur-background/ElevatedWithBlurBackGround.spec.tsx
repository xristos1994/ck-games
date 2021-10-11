import React from 'react';
import renderer from 'react-test-renderer';
import { ElevatedWithBlurBackGround } from './ElevatedWithBlurBackGround';

describe('components/ElevatedWithBlurBackGround', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ElevatedWithBlurBackGround>
        Test Content
      </ElevatedWithBlurBackGround>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
