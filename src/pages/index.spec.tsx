import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from './index';
import EL_HomePage from './el/index';
import EN_HomePage from './en/index';

const Home = () => {
  return (
    <div>
      Home
    </div>
  );
};

jest.mock('@page-components/', () => ({
  __esModule: true,
  Home: Home
}));

describe('pages/Home', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <HomePage />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <EL_HomePage />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <EN_HomePage />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
