import { availableLangs } from './availableLangs';

export const getlangFromPathname = (pathname?: string): string => {
  let tempPathname = pathname || '';

  if (typeof window !== 'undefined') {
    tempPathname = window.location.pathname;
  }

  const pathNameParams = tempPathname.split('/');

  return (
    Object.keys(availableLangs)
      .filter((lang) => lang !== 'default')
      .find((lang) => pathNameParams.includes(lang)) || ''
  );
};
