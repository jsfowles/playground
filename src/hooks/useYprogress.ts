import * as React from 'react';
import debounce from 'lodash/debounce';

import { useTransform, useViewportScroll } from 'framer-motion';

const useYProgress = (ref, { startsAtTop = false, offset = 0 } = {}) => {
  const [elHeight, setElHeight] = React.useState(0);
  const [elTop, setElTop] = React.useState(0);
  const [windowHeight, setWindowHeight] = React.useState(0);
  const { scrollY } = useViewportScroll();
  const [top, bottom] = React.useMemo(
    () => [
      startsAtTop ? elTop : elTop - windowHeight + offset,
      elTop + elHeight,
    ],
    [elTop, windowHeight, startsAtTop, offset, elHeight]
  );

  const yProgress = useTransform(
    scrollY,
    top < 0 ? [top, bottom] : [0, top, bottom],
    top < 0 ? [0, 1] : [0, 0, 1]
  );

  const setState = React.useCallback(
    debounce(() => {
      const { current: el } = ref;
      if (el) {
        setElTop(
          el?.getBoundingClientRect().top + document.documentElement.scrollTop
        );
        setElHeight(el.clientHeight);
        setWindowHeight(window?.innerHeight);
      }
    }, 200),
    [ref, setElTop, setElHeight, setWindowHeight]
  );

  const debouncedSetState = React.useCallback(debounce(setState, 200), [
    setState,
  ]);

  React.useEffect(() => {
    setState();
    window.addEventListener('resize', debouncedSetState);
    return () => window.removeEventListener('resize', debouncedSetState);
  }, [setState, debouncedSetState]);

  return { yProgress, elHeight, elTop };
};

export default useYProgress;
