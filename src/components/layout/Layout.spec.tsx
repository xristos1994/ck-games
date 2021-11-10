import React from 'react';
import renderer from 'react-test-renderer';
import { Layout } from './Layout';

const Background = () => {
  return (
    <div>
      Background
    </div>
  );
};

const Header = () => {
  return (
    <div>
      Header
    </div>
  );
};

const Menu = () => {
  return (
    <div>
      Menu
    </div>
  );
};

jest.mock('./components/', () => ({
  __esModule: true,
  Background: Background,
  Header: Header,
  Menu: Menu
}));

describe('components/Layout', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Layout>
        Test Content
      </Layout>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
