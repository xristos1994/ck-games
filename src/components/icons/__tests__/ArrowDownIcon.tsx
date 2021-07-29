import React from 'react';
import { ArrowDownIcon } from './../';
import renderer from 'react-test-renderer';

describe('components/icons/ArrowDownIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ArrowDownIcon />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
<svg
  height="100%"
  version="1.1"
  viewBox="0 0 512 512"
  width="100%"
  xmlns="http://www.w3.org/2000/svg"
>
  <polygon
    fill="currentColor"
    points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5"
  />
</svg>
`);
  });
});
