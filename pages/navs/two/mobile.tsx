import { AnimatePresence, motion } from 'framer-motion';

import React from 'react';
import withTransition from '@lib/withTransition';

const data = [
  {
    id: 0,
    title: 'about',
  },
  {
    id: 1,
    title: 'pricing',
  },
  {
    id: 2,
    title: 'careers',
  },
  {
    id: 3,
    title: 'blog',
  },
  {
    id: 4,
    title: 'contact',
  },
];

const wrapperVariants = {
  initial: {
    clipPath: 'polygon(100% 0%,0% 0%,0% 0%,100% 100%)',
    width: '100%',
    x: '100%',
  },
  animate: {
    clipPath: 'polygon(100% 0%,0% 0%,0% 100%,100% 100%)',
    transition: { duration: 0.7, staggerChildren: 0.07 },
    width: '100%',
    x: '0%',
  },
  exit: {
    clipPath: 'polygon(100% 0%,0% 0%,0% 0%,100% 100%)',
    transition: { duration: 0.7 },
    width: '100%',
    x: '100%',
  },
};

const item = {
  initial: { opacity: 0, x: 40, y: 40 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
  exit: { opacity: 0, x: 40, y: 40 },
};

const Two = () => {
  const [toggleNav, setToggleNav] = React.useState(false);
  const [toggleHover, setToggleHover] = React.useState(null);

  return (
    <>
      <main className=" h-full w-screen flex flex-col items-center justify-center mx-auto">
        <div className="">
          <h1 className="font-outline text-center text-9xl">Nav Two</h1>
          <h1 className="font-outline text-6xl text-center">Mobile</h1>
          <div className="max-w-[414px] mx-auto my-8">
            <div className="aspect-w-9 aspect-h-16 border-8 border-black rounded-phone overflow-hidden">
              <div className="h-4 w-1/2 bg-black mx-auto rounded-b-lg justify-center flex relative z-10">
                <div className="mt-1 h-1.5 w-8 bg-white rounded-full " />
                <div className="mt-1 h-1.5 w-2 bg-white rounded-full transform translate-x-2" />
              </div>

              <header className="py-10 flex justify-end w-full responsive">
                <nav
                  onClick={() => setToggleNav(!toggleNav)}
                  className="absolute right-0 px-4 z-50 flex justify-end"
                >
                  <div
                    className={`h-10 w-10 relative z-50 flex justify-evenly items-end flex-col p-1 transition duration-500 ease-in-out ring-2 ring-white rounded-full ${
                      toggleNav ? 'ring-opacity-100' : 'ring-opacity-0'
                    }`}
                  >
                    <span
                      className={`block rounded-full duration-500 ease-in-out h-0.5 ${
                        toggleNav
                          ? 'transform -rotate-45 w-full bg-white translate-y-2.5 -translate-x-1  w-3/4'
                          : 'bg-gray-600 w-2/3'
                      }`}
                    />

                    <span
                      className={`block h-0.5 ${
                        toggleNav ? 'opacity-0' : 'opacity-100'
                      } bg-gray-600 w-full rounded-full transition duration-500 ease-in-out`}
                    />

                    <span
                      className={`block h-0.5 transform rounded-full transition duration-500 ease-in-out ${
                        toggleNav
                          ? 'w-full bg-white rotate-45 -translate-y-2 -translate-x-1 w-3/4'
                          : 'bg-gray-600 w-1/2'
                      }`}
                    />
                  </div>
                </nav>
              </header>
              <AnimatePresence>
                {toggleNav && (
                  <motion.ul
                    key="card"
                    variants={wrapperVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="shadow-2xl bg-gradient-to-tl from-indigo-400 to-teal-400 h-full w-full flex flex-col justify-center text-center"
                  >
                    {data.map(({ id, title }, index) => (
                      <motion.li
                        key={id}
                        onMouseEnter={() => setToggleHover(index)}
                        onMouseLeave={() => setToggleHover(null)}
                        variants={item}
                        className={`font-outline text-6xl text-white tracking-wider py-2 transition-all duration-1000 ease-in-out relative z-10`}
                      >
                        {title}
                        <AnimatePresence>
                          {toggleHover === index && (
                            <motion.span
                              onClick={() => setToggleNav(false)}
                              initial={{ opacity: 0 }}
                              animate={{
                                opacity: 1,
                                x: 4,
                                y: 4,
                                transition: { delay: 0.25 },
                              }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 font-serif hover:font-serif text-6xl text-white tracking-wider py-2 z-20"
                            >
                              {title}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default withTransition(Two);
