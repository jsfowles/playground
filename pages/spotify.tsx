import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
const stats = [
  { name: 'Total dsdf', stat: '71,897' },
  { name: 'Avg. Ospen Rate', stat: '58.16%' },
  { name: 'Avg. Clivxck Rate', stat: '24.57%' },
  { name: 'Total Subscribers', stat: '71,897' },
  { name: 'Avg. Open Rate', stat: '58.16%' },
  { name: 'Avg. Click Rate', stat: '24.57%' },
];

const cards = [
  { id: 0, style: 'topo' },
  { id: 1, style: 'church' },
  { id: 2, style: 'jupiter' },
  { id: 3, style: 'temple' },
  { id: 4, style: 'volcano' },
  { id: 5, style: 'leaf' },
  { id: 6, style: 'temple' },
];

const carousel = {
  hidden: {
    height: 0,
    transition: {
      staggerDirection: -1,
      duration: 0.75,
    },
  },
  show: {
    height: 'auto',
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 1,
    },
  },
};

const getInitialX = (middleIndex, index) => {
  if (middleIndex > index) {
    return -200;
  } else if (middleIndex < index) {
    return 200;
  }
  return 0;
};

const carouselItem = (index: number) => {
  const middleIndex = Math.floor(cards.length / 2);
  const initialX = getInitialX(middleIndex, index);

  return {
    hidden: {
      opacity: initialX === 0 ? 1 : 0,
      x: initialX,
      transition: {
        duration: 0.75,
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.75,
      },
    },
  };
};

const Spotify = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div>
      <button
        className="fixed top-0 left-0 z-50 bg-white p-2 rounded-2xl"
        onClick={() => setToggleMenu((curr) => !curr)}
      >
        toggle
      </button>

      <motion.nav
        initial="hidden"
        animate={toggleMenu ? 'show' : 'hidden'}
        variants={carousel}
        exit="hidden"
        className="bg-[#574059] flex-center overflow-hidden"
      >
        <motion.div className="mx-auto flex-center space-evenly space-x-10 py-40">
          {cards.map(({ style, id }, index) => {
            return (
              <motion.div
                whileHover={{ scale: 1.1 }}
                key={id}
                variants={carouselItem(index)}
                className={`${style} h-[400px] min-w-[300px] hover:scale-105 bg-[#383D55] shadow-xl`}
              />
            );
          })}
        </motion.div>
      </motion.nav>

      <div className="bg-gradient-to-b from-[#574059]  to-[#383D55] h-screen flex justify-center pt-20">
        <div>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.name}
                className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
              >
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {item.name}
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {item.stat}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
