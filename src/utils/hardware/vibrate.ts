export const vibrate = (pattern?: number | number[]): void => {
  if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(pattern || 200);
  }
};
