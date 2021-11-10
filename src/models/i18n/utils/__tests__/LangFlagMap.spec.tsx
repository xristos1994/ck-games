import React from 'react';
import { LangFlagMap } from './../LangFlagMap';
import renderer from 'react-test-renderer';

const GreekFlagIcon = () => {
  return (
    <div>
      GreekFlagIcon
    </div>
  );
};

const UkFlagIcon = () => {
  return (
    <div>
      UkFlagIcon
    </div>
  );
};

jest.mock('@components/icons/', () => ({
  __esModule: true,
  GreekFlagIcon: GreekFlagIcon,
  UkFlagIcon: UkFlagIcon
}));

describe('models/i18n/utils//LangFlagMap', () => {
  it('renders correctly', () => {
    let tree = renderer.create(<LangFlagMap langCode="en" />).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(<LangFlagMap langCode="el" />).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(<LangFlagMap langCode="notExistingCode" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
