import React from 'react';
import Fade from '@components/Motion/Fade';
import Reveal from '@components/Motion/Reveal';
import ReactRotatingText from 'react-rotating-text';
import { useTheme } from 'next-themes';
import withTransition from '@lib/withTransition';

const Home = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <div className="dark:bg-black dark:text-white h-screen flex items-center pt-32 md:pt-0 md:justify-center md:pb-0 flex-col transition px-2 md:px-0">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="absolute top-2 md:top-10 right-2 md:right-10 p-4 bg-black dark:bg-hotpink rounded-full transition"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className="h-4 w-4 md:h-6 md:w-6 text-white"
          >
            {theme === 'dark' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
        )}
      </button>
      <div className="text-center md:text-left md:w-[650px] p-8">
        <div className="mx-auto">
          <h1 className="dark:text-white text-5xl md:text-9xl font-outline ">
            hello world.
          </h1>

          <h2 className="text-4xl md:text-8xl font-serif ">this is a</h2>

          <h3 className="text-3xl md:text-6xl md:pt-4 font-body ">
            <span className="text-cyan-400">
              <ReactRotatingText
                items={['tailwind', 'react', 'typescript', 'motion', 'next.js']}
              />{' '}
            </span>
            playground.
          </h3>
        </div>
        <article className="flex flex-col items-center">
          <p className="text-left text-md font-mono pt-16  text-black dark:text-white">
            This site contains a bunch of random stuff I've made, good and bad.
            Spacing is all different, fonts don't pair well, some links are
            broken.
            <br />
            <br />
            Please view on desktop, not many mobile views as of now. This is an
            experimental playground I use to give{' '}
            <a href="https://underbelly.is">Underbelly</a> designers a preview
            of micro-interactions, navigations, and components.
            <br />
            <br />
            Navigation is a bit rough but I thought it was fun... so deal with
            it.
          </p>

          <p className="py-4 text-xs flex font-mono prose">
            by
            <a
              className="text-cyan-400 dark:text-pink hover:text-pink duration-200 transition-all pl-2"
              target="__blank"
              href="https://github.com/jsfowles"
            >
              jsfowles
            </a>
          </p>

          <a
            target="__blank"
            className="font-mono text-xs hover:text-pink text-cyan-400 duration-200 transition-all"
            href="https://github.com/jsfowles/tw-template"
          >
            github
          </a>
        </article>
      </div>
    </div>
  );
};

export default withTransition(Home);
