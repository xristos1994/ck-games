import { EffectCallback, useEffect, useState } from "react";

enum SclollDirections {
  up = "up",
  down = "down",
}

const useScrollDirection = ({
  initialDirection,
  thresholdPixels,
}: {
  initialDirection?: SclollDirections;
  thresholdPixels?: number;
}): SclollDirections => {
  const SCROLL_UP = SclollDirections.up;
  const SCROLL_DOWN = SclollDirections.down;
  const _initialDirection = initialDirection || SCROLL_UP;
  const _thresholdPixels =
    typeof thresholdPixels === "number" ? thresholdPixels : 64;

  const [scrollDir, setScrollDir] = useState(_initialDirection);

  useEffect((): (() => void) => {
    const threshold = _thresholdPixels;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = (): void => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false;
      } else {
        setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      }
    };

    const onScroll = (): void => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [_initialDirection, thresholdPixels]);

  return scrollDir;
};

useScrollDirection.ScrollDirections = {
  up: SclollDirections.up,
  down: SclollDirections.down,
};

export { useScrollDirection };
