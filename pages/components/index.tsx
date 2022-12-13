import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const ComponentsList = () => {
  const [toggleHover, setToggleHover] = React.useState(null);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <p
        className="my-4 relative text-9xl font-outline"
        onMouseEnter={() => setToggleHover(0)}
        onMouseLeave={() => setToggleHover(false)}
      >
        Side By Side
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
              className="absolute inset-0 font-serif hover:font-serif text-9xl text-cyan-500 z-20"
            >
              <Link href="/components/sbs" passHref>
                Side By Side
              </Link>
            </motion.span>
          )}
        </AnimatePresence>
      </p>
    </div>
  );
};

export default ComponentsList;
