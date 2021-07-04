export const vibrate = (pattern?: number | number[]): void => {
  if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
    console.log(222);
    window.navigator.vibrate(pattern || 200);
  }
};
