import Link from 'next/link';
import React from 'react';
import shiftTransition from '@lib/shiftTransition';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

const mainMotion = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants: {
    enter: {
      opacity: 1,
      scale: 1.5,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.99,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  },
};

const Transitions = () => {
  const router = useRouter();

  return (
    <AnimatePresence exitBeforeEnter>
      <div key={router.route} {...mainMotion}>
        <Link passHref href="/transitions">
          Home
        </Link>
        <Link passHref href="/transitions/one">
          Page One
        </Link>
        <Link passHref href="/transitions/two">
          Page Two
        </Link>
        <Link passHref href="/transitions/three">
          Page Three
        </Link>
      </div>
    </AnimatePresence>
  );
};

export default Transitions;
