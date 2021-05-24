import React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
const data = [
  { id: 0, title: 'Home', route: '/' },
  {
    id: 1,
    title: 'Navs',
    route: '/navs',
  },
  {
    id: 2,
    title: 'Buttons',
    route: '/buttons',
  },
  {
    id: 3,
    title: 'Components',
    route: '/components',
  },
];

const Navigation = () => {
  const [onHover, setOnHover] = React.useState(false);
  const [onSubHover, setOnSubHover] = React.useState(null);

  return (
    <div
      className="group flex absolute items-center transition transition-all duration-300 top-2 md:top-10 left-2 md:left-10"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <button
        className={`
        ${
          onHover ? 'dark:text-cyan-500 text-cyan-500 text-5xl' : ''
        } leading-4 w-24 h-20 transition font-serif text-2xl transition transition-all duration-300 mr-4 hover:mr-8 tracking-wider dark:text-white`}
      >
        Menu
      </button>
      <AnimatePresence>
        {onHover && (
          <div className="flex h-24">
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              width={40}
              height="100%"
              viewBox="0 0 40 210"
              fill="none"
              className="fill-current text-hotpink"
            >
              <path d="M.4 103.5c.8-1.7 2.6-3.1 4.7-3 21.2-11.9 14.6-38.4 11.2-58.8-1.8-10.9-3.5-23.2 2.4-33.2 2.2-3.7 6.1-6.3 10.1-7.4C33 0 36 1.6 39.2 3.8c.7.5.3 1.7-.6 1.4-4.1-1.3-8.9 2-11.5 4.8-3.6 3.8-3.6 10.3-3.5 15.2.3 11.9 4.2 23.6 5.7 35.4 1.4 10.9 1.1 21.7-3.4 31.8-2.1 4.8-5.7 9.5-10.1 12.9 4.4 3.4 7.9 8.1 10.1 12.9 4.5 10.2 4.8 20.9 3.4 31.8-1.5 11.8-5.4 23.5-5.7 35.4-.1 4.9-.1 11.4 3.5 15.2 2.6 2.8 7.5 6.1 11.5 4.8.9-.3 1.3.9.6 1.4-3.2 2.2-6.2 3.9-10.4 2.7-4-1.1-8-3.7-10.1-7.4-5.9-10-4.2-22.2-2.4-33.2 3.4-20.4 10-46.9-11.2-58.8-2.1.1-3.9-1.3-4.7-3-.3-.6-.4-1.2-.4-1.8 0-.6.1-1.2.4-1.8z" />
            </motion.svg>
            <ul className="flex flex-col justify-center relative">
              {data.map(({ id, title, route }, index) => (
                <>
                  <motion.div
                    className="flex"
                    key={id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onMouseEnter={() => setOnSubHover(index)}
                    onMouseLeave={() => setOnSubHover(null)}
                  >
                    <Link href={route} passHref>
                      <a>
                        <li
                          className={`${
                            onSubHover === index
                              ? 'text-cyan-500 dark:text-cyan-500 text-4xl'
                              : ''
                          } font-serif text-xl tracking-wider transition transition-all duration-300 dark:text-white`}
                        >
                          {title}
                        </li>
                      </a>
                    </Link>
                  </motion.div>
                </>
              ))}
            </ul>
          </div>
        )}
      </AnimatePresence>

      {/*{data.map(*/}
      {/*  ({ id, links }, index) =>*/}
      {/*    links && (*/}
      {/*      <>*/}
      {/*        {onSubHover === index && (*/}
      {/*          <div*/}
      {/*            className="flex  h-16 "*/}
      {/*            onMouseEnter={() => setOnSubHover(index)}*/}
      {/*            onMouseLeave={() => setOnSubHover(null)}*/}
      {/*          >*/}
      {/*            <motion.svg*/}
      {/*              initial={{ opacity: 0 }}*/}
      {/*              animate={{ opacity: 1 }}*/}
      {/*              exit={{ opacity: 0 }}*/}
      {/*              width={40}*/}
      {/*              height="100%"*/}
      {/*              viewBox="0 0 40 210"*/}
      {/*              className="fill-current text-hotpink"*/}
      {/*            >*/}
      {/*              <path d="M.4 103.5c.8-1.7 2.6-3.1 4.7-3 21.2-11.9 14.6-38.4 11.2-58.8-1.8-10.9-3.5-23.2 2.4-33.2 2.2-3.7 6.1-6.3 10.1-7.4C33 0 36 1.6 39.2 3.8c.7.5.3 1.7-.6 1.4-4.1-1.3-8.9 2-11.5 4.8-3.6 3.8-3.6 10.3-3.5 15.2.3 11.9 4.2 23.6 5.7 35.4 1.4 10.9 1.1 21.7-3.4 31.8-2.1 4.8-5.7 9.5-10.1 12.9 4.4 3.4 7.9 8.1 10.1 12.9 4.5 10.2 4.8 20.9 3.4 31.8-1.5 11.8-5.4 23.5-5.7 35.4-.1 4.9-.1 11.4 3.5 15.2 2.6 2.8 7.5 6.1 11.5 4.8.9-.3 1.3.9.6 1.4-3.2 2.2-6.2 3.9-10.4 2.7-4-1.1-8-3.7-10.1-7.4-5.9-10-4.2-22.2-2.4-33.2 3.4-20.4 10-46.9-11.2-58.8-2.1.1-3.9-1.3-4.7-3-.3-.6-.4-1.2-.4-1.8 0-.6.1-1.2.4-1.8z" />*/}
      {/*            </motion.svg>*/}
      {/*            <motion.div*/}
      {/*              className="flex flex-col justify-center"*/}
      {/*              key={id}*/}
      {/*              initial={{ opacity: 0 }}*/}
      {/*              animate={{ opacity: 1 }}*/}
      {/*              exit={{ opacity: 0 }}*/}
      {/*            >*/}
      {/*              {links?.map(({ id, title, desktopRoute }) => (*/}
      {/*                <Link href={desktopRoute} passHref key={id}>*/}
      {/*                  <a className="font-serif text-xl tracking-wider hover:pl-2 hover:text-cyan-500 dark:hover:text-cyan-500 transition transition-all dark:text-white">*/}
      {/*                    {title}*/}
      {/*                  </a>*/}
      {/*                </Link>*/}
      {/*              ))}*/}
      {/*            </motion.div>*/}
      {/*          </div>*/}
      {/*        )}*/}
      {/*      </>*/}
      {/*    )*/}
      {/*)}*/}
    </div>
  );
};

export default Navigation;
