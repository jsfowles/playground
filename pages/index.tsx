import React from 'react';
import Fade from '@components/Motion/Fade';
import Reveal from '@components/Motion/Reveal';
import MotionParent from '@components/Motion/MotionParent';

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <MotionParent>
        <Reveal>
          <h1 className="text-9xl font-serif">hello world.</h1>
        </Reveal>
        <Reveal>
          <h2 className="text-8xl font-serif">this is a</h2>
        </Reveal>
        <Reveal>
          <h3 className="text-7xl pt-4 font-serif">tailwind template</h3>
        </Reveal>
        <Reveal>
          <p className="pt-4 font-mono">by jsfowles && underbelly</p>
        </Reveal>
      </MotionParent>
    </div>
  );
};

export default Home;
