import React from 'react';
import { ArrowUpIcon } from './../';
import renderer from 'react-test-renderer';

describe('components/icons/ArrowUpIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ArrowUpIcon />).toJSON();
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
    points="396.6,352 416,331.3 256,160 96,331.3 115.3,352 256,201.5"
  />
</svg>
`);
  });
});
