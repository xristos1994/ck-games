export const classnames = (...args: (string | Record<string, unknown>)[]): string => {
  const argsLength = args.length;
  const separator = ' ';
  let result = '';

  if (!argsLength) {
    return result;
  }

  for (let i = 0; i < argsLength; i += 1) {
    const arg = args[i];

    if (!arg) {
      continue;
    }

    if (typeof arg === 'string') {
      result += (result ? separator : '') + arg;
    } else if (typeof arg === 'object' && Object.prototype.toString.call(arg) === '[object Object]') {
      for (const key in arg) {
        if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
          result += (result ? separator : '') + key;
        }
      }
    }
  }

  return result;
};
