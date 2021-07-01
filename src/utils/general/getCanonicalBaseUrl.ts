export const getCanonicalBaseUrl = (): string => {
  return process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://ck-games.netlify.app';
};
