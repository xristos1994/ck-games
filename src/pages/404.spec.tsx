import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from './404';

describe('pages/404', () => {
  it('renders correctly', () => {
    const initialWindow = { ...global.window };

    global.window = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      location: {
        href: '/not-found'
      }
    };
    let tree = renderer.create(
      <NotFound />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.window = undefined;

    tree = renderer.create(
      <NotFound />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    global.window = { ...initialWindow };
  });
});
