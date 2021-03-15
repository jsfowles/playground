import React from 'react';
import Fade from '@components/Motion/Fade';
import Reveal from '@components/Motion/Reveal';
import MotionParent from '@components/Motion/MotionParent';
import ReactRotatingText from 'react-rotating-text';
const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <MotionParent>
        <Fade>
          <Reveal direction="right">
            <h1 className="text-9xl font-serif">hello world.</h1>
          </Reveal>
        </Fade>
        <Fade>
          <Reveal direction="right">
            <h2 className="text-8xl font-serif">this is a</h2>
          </Reveal>
        </Fade>
        <Fade>
          <Reveal direction="right">
            <h3 className="text-7xl pt-4 font-serif">
              <span className="text-blue">
                <ReactRotatingText
                  items={[
                    'tailwind',
                    'react',
                    'typescript',
                    'motion',
                    'next.js',
                  ]}
                />{' '}
              </span>
              template.
            </h3>
          </Reveal>
        </Fade>
        <Fade>
          <Reveal direction="right">
            <p className="py-4 font-mono">
              by{' '}
              <a
                className="hover:text-blue duration-200 transition-all"
                target="__blank"
                href="https://github.com/jessieleigh30"
              >
                jessieleigh30
              </a>{' '}
              &&{' '}
              <a
                className="hover:text-blue duration-200 transition-all"
                target="__blank"
                href="https://github.com/jsfowles"
              >
                jsfowles
              </a>{' '}
              &&{' '}
              <a
                className="hover:text-blue duration-200 transition-all"
                target="__blank"
                href="https://github.com/simplycomplexable"
              >
                simplycomplexable
              </a>
            </p>
          </Reveal>
        </Fade>
        <Fade>
          <Reveal direction="right">
            <a
              className="font-mono hover:text-blue duration-200 transition-all"
              href="https://github.com/jsfowles/tw-template"
            >
              github: https://github.com/jsfowles/tw-template
            </a>
          </Reveal>
        </Fade>
      </MotionParent>
    </div>
  );
};

export default Home;
