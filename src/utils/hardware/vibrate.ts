export const vibrate = (pattern?: number | number[]): void => {
  try {
    window.navigator.vibrate(pattern || 200);
  } catch (error) {
    // fail silently
  }
};
