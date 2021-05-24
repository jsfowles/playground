import { AnimatePresence, motion } from 'framer-motion';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
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
];

const wrapperVariants = {
  initial: {
    clipPath: 'polygon(0% 0%,0% 0%,100% 100%,100% 100%)',
    transition: { duration: 0.4 },
    width: '0%',
    x: '100%',
  },
  animate: {
    clipPath: 'polygon(60% 0%,100% 0%,100% 100%,0% 100%)',
    transition: { duration: 0.4, staggerChildren: 0.07 },
    width: '80%',
    x: '0%',
  },
  exit: {
    clipPath: 'polygon(0% 0%,100% 0%,100% 100%,0% 100%)',
    transition: { duration: 0.4 },
    width: '0%',
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
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const [toggleNav, setToggleNav] = React.useState(false);
  const [toggleHover, setToggleHover] = React.useState(null);

  return (
    <>
      <header className="py-10 flex justify-end w-full responsive">
        <nav
          onClick={() => setToggleNav(!toggleNav)}
          className="absolute right-0 px-10 z-50 flex justify-end"
        >
          <div
            className={`h-12 w-12 relative z-50 flex justify-evenly items-end flex-col p-1 transition duration-500 ease-in-out ring-2 ring-white rounded-full ${
              toggleNav ? 'ring-opacity-100' : 'ring-opacity-0'
            }`}
          >
            <span
              className={`block rounded-full duration-500 ease-in-out h-0.5 ${
                toggleNav
                  ? 'transform -rotate-45 w-full bg-white translate-y-3'
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
                  ? 'w-full bg-white rotate-45 -translate-y-2.5'
                  : 'bg-gray-600 w-1/2'
              }`}
            />
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {toggleNav && (
          <>
            <motion.nav
              key="card"
              variants={wrapperVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-screen fixed top-0 right-0 flex bg-gradient-to-tl from-indigo-400 to-teal-400 justify-end px-10 flex items-center z-40"
            >
              <ul className="pr-10">
                {data.map(({ id, title }, index) => (
                  <motion.li
                    key={id}
                    onMouseEnter={() => setToggleHover(index)}
                    onMouseLeave={() => setToggleHover(null)}
                    variants={item}
                    className={`font-outline text-8xl text-white tracking-wider py-2 transition-all duration-1000 ease-in-out relative z-10`}
                  >
                    {title}
                    <AnimatePresence>
                      {toggleHover === index && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            x: 4,
                            y: 4,
                            transition: { delay: 0.25 },
                          }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 font-serif hover:font-serif text-8xl text-white tracking-wider py-2 z-20"
                        >
                          {title}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.75, duration: 0.4 },
              }}
              exit={{ opacity: 0 }}
              className="bg-white "
            >
              <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className=" max-w-lg pl-10 md:max-w-none w-1/3 grid md:gap-8">
                  <div>
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                      Sales Support
                    </h2>
                    <div className="mt-3">
                      <p className="text-lg text-gray-500">
                        Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                        volutpat massa dictumst amet. Sapien tortor lacus arcu.
                      </p>
                    </div>
                    <div className="mt-9">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <PhoneIcon
                            className="h-6 w-6 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-3 text-base text-gray-500">
                          <p>+1 (555) 123 4567</p>
                          <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                        </div>
                      </div>
                      <div className="mt-6 flex">
                        <div className="flex-shrink-0">
                          <MailIcon
                            className="h-6 w-6 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-3 text-base text-gray-500">
                          <p>support@example.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 sm:mt-16 md:mt-0">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                      Technical Support
                    </h2>
                    <div className="mt-3">
                      <p className="text-lg text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magni, repellat error corporis doloribus
                        similique, voluptatibus numquam quam, quae officiis
                        facilis.
                      </p>
                    </div>
                    <div className="mt-9">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <PhoneIcon
                            className="h-6 w-6 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-3 text-base text-gray-500">
                          <p>+1 (555) 123 4567</p>
                          <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                        </div>
                      </div>
                      <div className="mt-6 flex">
                        <div className="flex-shrink-0">
                          <MailIcon
                            className="h-6 w-6 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-3 text-base text-gray-500">
                          <p>support@example.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <main className="h-3/4 w-screen flex items-center justify-center flex-col">
        <h1 className="font-outline text-9xl">Nav Two</h1>
        <h1 className="font-outline text-6xl">Desktop</h1>
      </main>
    </>
  );
};

export default withTransition(Two);
