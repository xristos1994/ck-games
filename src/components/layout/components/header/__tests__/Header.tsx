import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from './../Header';

const FlatLogoIcon = () => {
  return (
    <div>
      FlatLogoIcon
    </div>
  );
};

jest.mock('./../../../../icons', () => ({
  __esModule: true,
  FlatLogoIcon: FlatLogoIcon
}));

describe('components/Header', () => {
  it('renders correctly', () => {
    global.window = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      location: {
        pathname: ''
      }
    };

    const tree = renderer.create(
      <Header />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
