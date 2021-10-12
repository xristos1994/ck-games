import React from 'react';
import renderer from 'react-test-renderer';
import PantomimePage from './pantomime';
import EL_PantomimePage from './el/pantomime';
import EN_PantomimePage from './en/pantomime';

const Pantomime = () => {
  return (
    <div>
      Pantomime
    </div>
  );
};

jest.mock('@page-components/', () => ({
  __esModule: true,
  Pantomime: Pantomime
}));

describe('pages/Home', () => {
  it('renders correctly', () => {
    let tree = renderer.create(
      <PantomimePage />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <EL_PantomimePage />
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <EN_PantomimePage />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
