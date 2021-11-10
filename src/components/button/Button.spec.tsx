import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from './Button';

describe('components/Button', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <Button>
        Test Label
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Button className="Test-class-name">
        Test Label
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Button className="Test-class-name" other={{ disabled: true }}>
        Test Label
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Button className="Test-class-name" other={{ disabled: true }} onClick={() => console.log('Button Clicked')}>
        Test Label
      </Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
