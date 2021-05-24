import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import withTransition from '@lib/withTransition';

const Components = () => {
  const [toggleHover, setToggleHover] = React.useState(null);

  return (
    <div className=" h-full w-screen flex flex-col items-center justify-center mx-auto">
      <div className="font-outline text-9xl">Components</div>
      <div className="">
        <ul className="flex pt-10">
          <motion.li className="mx-10 relative flex items-center">
            <h2 className="font-serif text-9xl">1.</h2>
            <div className="text-6xl ml-8 font-outline">
              <p
                className="my-4 relative"
                onMouseEnter={() => setToggleHover(0)}
                onMouseLeave={() => setToggleHover(false)}
              >
                Desktop
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
                      className="absolute inset-0 font-serif hover:font-serif text-6xl text-cyan-500 z-20"
                    >
                      <Link href="/navs/one/desktop" passHref>
                        <a>desktop</a>
                      </Link>
                    </motion.span>
                  )}
                </AnimatePresence>
              </p>
              <p
                className="my-4 relative"
                onMouseEnter={() => setToggleHover(1)}
                onMouseLeave={() => setToggleHover(false)}
              >
                Mobile
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
                      className="absolute inset-0 font-serif hover:font-serif text-6xl text-cyan-500 z-20"
                    >
                      <Link href="/navs/one/mobile" passHref>
                        <a>Mobile</a>
                      </Link>
                    </motion.span>
                  )}
                </AnimatePresence>
              </p>
            </div>
          </motion.li>
          <motion.li className="mx-10 relative flex items-center">
            <h2 className="font-serif text-9xl">2.</h2>
            <div className="text-6xl ml-8 font-outline">
              <p
                className="my-4 relative"
                onMouseEnter={() => setToggleHover(2)}
                onMouseLeave={() => setToggleHover(false)}
              >
                Desktop
                <AnimatePresence>
                  {toggleHover === 2 && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        x: 4,

                        transition: { delay: 0.25 },
                      }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 font-serif hover:font-serif text-6xl text-cyan-500 z-20"
                    >
                      <Link href="/navs/two/desktop" passHref>
                        <a>Desktop</a>
                      </Link>
                    </motion.span>
                  )}
                </AnimatePresence>
              </p>
              <p
                className="my-4 relative"
                onMouseEnter={() => setToggleHover(3)}
                onMouseLeave={() => setToggleHover(false)}
              >
                Mobile
                <AnimatePresence>
                  {toggleHover === 3 && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        x: 4,

                        transition: { delay: 0.25 },
                      }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 font-serif hover:font-serif text-6xl text-cyan-500 z-20"
                    >
                      <Link href="/navs/two/mobile" passHref>
                        <a>Mobile</a>
                      </Link>
                    </motion.span>
                  )}
                </AnimatePresence>
              </p>
            </div>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default withTransition(Components);
