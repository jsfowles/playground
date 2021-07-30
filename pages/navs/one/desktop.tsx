import withTransition from '@lib/withTransition';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
const br = require('braille');

const data = [
  {
    id: 0,
    title: 'about',
  },
  {
    id: 1,
    title: 'contact',
  },
  {
    id: 2,
    title: 'careers',
  },
  {
    id: 3,
    title: 'pricing',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const item = {
  hidden: {
    transition: { duration: 0.5 },
    y: 100,
    opacity: 0,
  },
  show: {
    transition: { duration: 0.5 },

    y: 0,
    opacity: 1,
  },
};

const One = () => {
  const [toggleNav, setToggleNav] = React.useState(true);
  const [toggleHover, setToggleHover] = React.useState(null);

  return (
    <>
      <header className="py-10 flex justify-end w-full responsive bg-tycho-white">
        <nav
          onClick={() => setToggleNav(!toggleNav)}
          className="absolute right-0 px-10 z-50 flex justify-end"
        >
          <div
            className={`h-12 w-12 relative z-50 flex justify-evenly items-end flex-col p-1 transition duration-500 ease-in-out ring-2 ring-tycho-white rounded-full ${
              toggleNav ? 'ring-opacity-100' : 'ring-opacity-0'
            }`}
          >
            <span
              className={`block rounded-full duration-500 ease-in-out h-0.5 ${
                toggleNav
                  ? 'transform -rotate-45 w-full bg-tycho-white bg-p translate-y-3'
                  : 'bg-tycho-black w-2/3'
              }`}
            />
            <span
              className={`block h-0.5 ${
                toggleNav ? 'opacity-0' : 'opacity-100'
              } bg-tycho-black w-full rounded-full transition duration-500 ease-in-out`}
            />
            <span
              className={`block h-0.5 transform rounded-full transition duration-500 ease-in-out ${
                toggleNav
                  ? 'w-full bg-tycho-white rotate-45 -translate-y-2.5'
                  : 'bg-tycho-black w-1/2'
              }`}
            />
          </div>
        </nav>
      </header>
      <main className="h-screen w-screen bg-tycho-white" />
      <AnimatePresence>
        {toggleNav && (
          <motion.div
            variants={container}
            initial="hidden"
            animate={toggleNav ? 'show' : 'hidden'}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-tycho-black flex">
              <div className="w-full absolute inset-0 h-1/2 items-center grid">
                <motion.div
                  initial={{ y: 500, scale: 0.25 }}
                  animate={{
                    y: 1,
                    scale: 1,
                    transition: {
                      delay: 0.25,
                      duration: 1,
                      ease: 'easeInOut',
                    },
                  }}
                  exit={{ y: 500 }}
                  className="rounded-full w-[25vw] h-[25vw] bg-tycho-blue z-10 justify-self-center self-center"
                />

                <div className="text-tycho-white text-6xl absolute right-[7vw]  z-50 flex flex-col items-center">
                  {data.map(({ id, title }, index) => (
                    <div
                      className="relative group max-w-max"
                      key={id}
                      onMouseEnter={() => setToggleHover(index)}
                      onMouseLeave={() => setToggleHover(null)}
                    >
                      <h2 className="pb-6 font-braille relative filter group-hover:blur-[5px] animate">
                        {br.toBraille(title)}
                      </h2>
                      <AnimatePresence>
                        {toggleHover === index && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute w-full top-1 left-0 font-mono uppercase text-5xl text-tycho-white z-20 text-center"
                          >
                            {title}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
              <motion.div className="relative w-full h-1/2 self-end bg-tycho-orange z-50">
                <motion.div
                  variants={item}
                  exit={{ opacity: 0 }}
                  className="h-1/5 w-full bg-tycho-orange-dark"
                />
                <motion.div
                  variants={item}
                  exit={{ opacity: 0 }}
                  className="h-2/6 w-full  bg-tycho-orange"
                />
                <motion.div
                  variants={item}
                  exit={{ opacity: 0 }}
                  className="h-3/6 w-full  bg-tycho-orange-light"
                />
                <div className="w-full h-full absolute bottom-0 flex justify-center">
                  <motion.div
                    initial={{ y: 500, scale: 0.25 }}
                    animate={{
                      y: 1,
                      scale: 1,
                      transition: {
                        duration: 1,
                        ease: 'easeInOut',
                      },
                    }}
                    exit={{ y: 500 }}
                    className="tycho-menu w-5/6 h-full bg-tycho-white relative"
                  >
                    <div className="h-full absolute bottom-0 left-0 z-50">
                      <div
                        className="h-full w-[60%] bg-tycho-black"
                        style={{
                          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                        }}
                      />
                      <div
                        className="h-full w-[10%] bg-tycho-blue"
                        style={{
                          clipPath: 'polygon(0 0%, 75% 0, 100% 100%, 25% 100%)',
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default withTransition(One);
