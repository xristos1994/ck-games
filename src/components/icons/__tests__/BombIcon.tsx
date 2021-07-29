import React from 'react';
import { BombIcon } from './../';
import renderer from 'react-test-renderer';

describe('components/icons/BombIcon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BombIcon />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
<svg
  height="100%"
  version="1.1"
  viewBox="0 0 512 512"
  width="100%"
  xmlns="http://www.w3.org/2000/svg"
>
  <g
    id="_x31_28_x2C__bomb_x2C__explosive_x2C__explosion"
  >
    <g
      id="XMLID_13839_"
    >
      <path
        d="M318.326,136.566c-1.98-0.585-3.338-2.404-3.338-4.468v-29.454h-45.01V77.219    c0-15.759-12.82-28.58-28.579-28.58h-26.716c-15.759,0-28.58,12.821-28.58,28.58v21.08c-3.781,4.384-20.876,19.985-58.18-2.397    c-2.207-1.324-5.069-0.608-6.393,1.599s-0.608,5.069,1.599,6.393c14.568,8.741,27.933,13.129,39.919,13.128    c4.917,0,9.604-0.739,14.044-2.219c11.865-3.955,17.322-11.98,17.548-12.32c0.51-0.766,0.783-1.665,0.783-2.585V77.219    c0-10.62,8.64-19.26,19.26-19.26h26.716c10.62,0,19.261,8.64,19.261,19.26v25.425h-35.63v25.212h49.609    c2.574,0,4.66,2.086,4.66,4.66s-2.086,4.66-4.66,4.66h-53.171c-70.218,21.757-117.376,85.762-117.376,159.364    c0,91.985,74.835,166.821,166.82,166.821s166.821-74.836,166.821-166.821C437.732,223.155,388.631,157.372,318.326,136.566z     M381.455,343.998c-11,26.403-36.59,62.035-96.023,81.845c-0.488,0.163-0.984,0.241-1.475,0.241c-1.951,0-3.768-1.234-4.419-3.188    c-0.813-2.442,0.505-5.08,2.947-5.895c45.046-15.015,75.45-40.782,90.368-76.588c11.068-26.565,9.006-48.78,8.984-49.002    c-0.256-2.561,1.611-4.844,4.172-5.101c2.563-0.256,4.844,1.613,5.102,4.174C391.211,291.484,393.42,315.284,381.455,343.998z"
        id="XMLID_13840_"
      />
      <path
        d="M104.803,66.786l18.639,9.319c0.669,0.334,1.38,0.493,2.08,0.493c1.709,0,3.355-0.944,4.172-2.577    c1.151-2.302,0.218-5.101-2.084-6.251l-18.639-9.32c-2.302-1.151-5.101-0.218-6.251,2.084    C101.568,62.836,102.501,65.635,104.803,66.786z"
        id="XMLID_13843_"
      />
      <path
        d="M102.227,99.896c0-2.573-2.086-4.66-4.66-4.66H78.928c-2.573,0-4.66,2.086-4.66,4.66    s2.086,4.66,4.66,4.66h18.639C100.141,104.556,102.227,102.47,102.227,99.896z"
        id="XMLID_13844_"
      />
      <path
        d="M120.374,125.771c-1.151-2.303-3.952-3.235-6.251-2.084l-18.639,9.319    c-2.302,1.151-3.235,3.95-2.084,6.252c0.816,1.633,2.461,2.577,4.171,2.577c0.7,0,1.412-0.158,2.08-0.493l18.639-9.32    C120.592,130.873,121.525,128.073,120.374,125.771z"
        id="XMLID_13845_"
      />
    </g>
  </g>
  <g
    id="Layer_1"
  />
</svg>
`);
  });
});
