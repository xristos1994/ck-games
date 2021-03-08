export const vibrate = (pattern = 200) => {
  if (
    typeof window !== "undefined" &&
    window.navigator &&
    window.navigator.vibrate
  ) {
    window.navigator.vibrate(pattern);
  }
};
