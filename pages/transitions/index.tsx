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
          <a>Home</a>
        </Link>
        <Link passHref href="/transitions/one">
          <a>Page One</a>
        </Link>
        <Link passHref href="/transitions/two">
          <a>Page Two</a>
        </Link>
        <Link passHref href="/transitions/three">
          <a>Page Three</a>
        </Link>
      </div>
    </AnimatePresence>
  );
};

export default Transitions;
