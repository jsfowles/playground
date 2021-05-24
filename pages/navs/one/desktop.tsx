// @ts-nocheck
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import withTransition from '@lib/withTransition';

const data = [
  {
    id: 0,
    title: 'work',
    hoverImage: '/images/placeholder.png',
    subMenu: [
      {
        id: 0,
        title: 'studies',
        description: 'Dig into a few of our most impactful projects.',
      },
      {
        id: 1,
        title: 'clients',
        description:
          'The clients we’ve been able to work with are gold. Hop over to see our work and take a gander at some of our best projects.',
      },
    ],
  },
  {
    id: 1,
    title: 'about',
    subMenu: [
      {
        id: 0,
        title: 'peeps',
      },
      {
        id: 1,
        title: 'life',
      },
      {
        id: 2,
        title: 'shop',
      },
    ],
  },
  {
    id: 2,
    title: 'blog',
    subMenu: [
      {
        id: 0,
        title: 'articles',
      },
      {
        id: 2,
        title: 'announcements',
      },
    ],
  },
  {
    id: 3,
    title: 'careers',
    subMenu: [
      {
        id: 0,
        title: 'apply',
      },
      {
        id: 1,
        title: 'perks',
      },
      {
        id: 2,
        title: 'mission',
      },
    ],
  },
  {
    id: 4,
    title: 'contact',
    subMenu: [
      {
        id: 0,
        title: 'need help?',
      },
      {
        id: 1,
        title: 'location',
      },
      {
        id: 2,
        title: 'survey',
      },
    ],
  },
];

const variants = {
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
  closed: { opacity: 0, rotate: 2, y: '-130%', scale: 2 },
};

const One = () => {
  const [toggleNav, setToggleNav] = React.useState(null);

  return (
    <>
      <div className="h-screen">
        <header className="bg-white">
          <nav className="flex justify-between items-center  w-3/4 mx-auto py-12">
            <div className="rounded-full h-20 w-20 flex bg-indigo-900 relative z-50" />
            <div className="flex w-1/2 justify-evenly">
              {data.map(({ id, title }, index) => (
                <a href="/">
                  <motion.p
                    key={id}
                    onMouseOver={() => setToggleNav(index)}
                    onMouseLeave={() => setToggleNav(null)}
                    className="relative z-50 text-lg text-indigo-900 font-serif uppercase"
                  >
                    {title}
                  </motion.p>
                </a>
              ))}
            </div>
          </nav>
        </header>
        <AnimatePresence>
          {data.map(
            ({ subMenu, id, hoverImage }, index) =>
              toggleNav === index && (
                <motion.div
                  key={id}
                  onMouseOver={() => setToggleNav(index)}
                  initial="closed"
                  animate={toggleNav === index ? 'open' : 'closed'}
                  exit="closed"
                  variants={variants}
                  className="bg-rose-300 max-h-full absolute top-0 right-0 left-0 z-10 w-full"
                >
                  <div className="w-1/2 mx-auto flex justify-evenly py-48">
                    {subMenu.map(({ id, title, description }) => (
                      <div data-hover-container="true">
                        <a href="/" className="relative w-full flex flex-col">
                          <div className="relative w-full">
                            <motion.h2
                              className={`text-7vw text-white font-serif px-10`}
                              key={id}
                            >
                              {title}
                            </motion.h2>
                            <motion.h2
                              className={`text-7vw text-white font-outline px-10 absolute z-50 inset-0`}
                              key={id}
                            >
                              {title}
                            </motion.h2>
                          </div>
                          <img
                            data-hover-img="true"
                            src={hoverImage}
                            className="w-24 h-24 object-contain absolute top-0 left-0 hidden"
                          />
                        </a>
                        <p
                          className="text-indigo-900 font-bold text-lg font-sans p-10"
                          key={id}
                        >
                          {description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
        <main className="h-full">hi</main>
      </div>
    </>
  );
};

export default withTransition(One);
