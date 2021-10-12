import React from 'react';
import renderer from 'react-test-renderer';
import TikTakBoomPage from './tik-tak-boom';
import EL_TikTakBoomPage from './el/tik-tak-boom';
import EN_TikTakBoomPage from './en/tik-tak-boom';

const TikTakBoom = () => {
  return (
    <div>
      TikTakBoom
    </div>
  );
};

jest.mock('@page-components/', () => ({
  __esModule: true,
  TikTakBoom: TikTakBoom
}));

describe('pages/Home', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <TikTakBoomPage />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <EL_TikTakBoomPage />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <EN_TikTakBoomPage />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
