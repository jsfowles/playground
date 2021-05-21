import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const Navs = () => {
  const [toggleHover, setToggleHover] = React.useState(null);

  return (
    <div className=" h-full w-screen flex flex-col items-center justify-center mx-auto">
      <div className="font-outline text-9xl">navs</div>
      <div className="font-outline text-7xl">
        <ul className="flex pt-10">
          <motion.li
            onMouseEnter={() => setToggleHover(0)}
            onMouseLeave={() => setToggleHover(null)}
            className="mx-10 underline relative"
          >
            One
            <AnimatePresence>
              {toggleHover === 0 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: 4,

                    transition: { delay: 0.25 },
                  }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 font-serif hover:font-serif text-7xl text-cyan-500 z-20"
                >
                  <Link href="/navs/one" passHref>
                    <a>One</a>
                  </Link>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.li>
          <motion.li
            onMouseEnter={() => setToggleHover(1)}
            onMouseLeave={() => setToggleHover(null)}
            className="mx-10 underline relative"
          >
            Two
            <AnimatePresence>
              {toggleHover === 1 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: 4,

                    transition: { delay: 0.25 },
                  }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 font-serif hover:font-serif text-7xl text-cyan-500 z-20"
                >
                  <Link href="/navs/two" passHref>
                    <a>two</a>
                  </Link>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Navs;
