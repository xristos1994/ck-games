import React from 'react';
import renderer from 'react-test-renderer';
import { _AvailableGames as AvailableGames } from './AvailableGames';

jest.mock('./config', () => ({
  __esModule: true,
  availableGames: [
    { name: 'Tik-Tak-Boom', url: '/tik-tak-boom' },
    { name: 'Pantomime', url: '/pantomime' }
  ]
}));

describe('page-components/home/AvailableGames', () => {
  it('renders correctly', () => {
    global.window = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      location: {
        pathname: ''
      }
    };

    const t = (name: string) => name;

    const tree = renderer.create(<AvailableGames t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
