import React from 'react';
import renderer from 'react-test-renderer';
import { _Home as Home } from './Home';

const SEO = () => {
  return (
    <div>
      SEO
    </div>
  );
};

const AvailableGames = () => {
  return (
    <div>
      AvailableGames
    </div>
  );
};

jest.mock('./components/', () => ({
  __esModule: true,
  SEO: SEO,
  AvailableGames: AvailableGames
}));

const restartAllGames = jest.fn().mockImplementation(() => void 0);

describe('page-components/Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Home
        restartAllGames={restartAllGames}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
