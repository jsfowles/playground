import { useInView } from 'react-intersection-observer'; // 1.9K gzipp
import { motion, useAnimation, useTransform } from 'framer-motion';

import useYProgress from '@hooks/useYprogress';
import React from 'react';

interface Animations {
  [property: string]: {
    startAnimation?: number;
    finishAnimation?: number;
    startValue: number | string;
    finishValue: number | string;
  };
}

interface Props {
  animations?: Animations;
  className?: string;
}

export const scrollAnimation = (Component, options: Props = {}) => ({
  animations,
  className = '',
  ...props
}: Props) => {
  const ref = React.useRef();

  const { yProgress } = useYProgress(ref, {
    startsAtTop: false,
  });

  const mergedAnimations = {
    ...(options.animations || {}),
    ...animations,
  };

  const styles = Object.entries(mergedAnimations).reduce(
    (
      acc,
      [property, { startAnimation, finishAnimation, startValue, finishValue }]
    ) => ({
      ...acc,
      [property]: useTransform(
        yProgress,
        [startAnimation / 100, finishAnimation / 100],
        [startValue, finishValue]
      ),
    }),
    {}
  );

  return (
    <motion.div
      ref={ref}
      className={`${options.className || ''} ${className} w-full h-full`}
      style={styles}
    >
      <Component {...props} />
    </motion.div>
  );
};
