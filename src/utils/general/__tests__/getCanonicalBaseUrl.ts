import { getCanonicalBaseUrl } from './..';

describe('utils/general/getCanonicalBaseUrl', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it('returns the right url depending on env', () => {
    process.env = { ...OLD_ENV, NODE_ENV: 'development' };
    expect(getCanonicalBaseUrl()).toContain('http://localhost');

    process.env = { ...OLD_ENV, NODE_ENV: 'production' };
    expect(getCanonicalBaseUrl()).toBe('https://ck-games.netlify.app');
  });
});
