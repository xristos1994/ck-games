/* eslint-disable @typescript-eslint/no-explicit-any */
type ArityOneFn = (arg: any) => any;

export const compose = (...fns: ArityOneFn[]): ArityOneFn => {
  if (fns.length === 0) {
    return (fn: any) => fn;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return fns.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
};
