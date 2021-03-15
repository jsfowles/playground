import React from 'react';
import Fade from '@components/Fade';
import Reveal from '@components/Reveal';

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Reveal>
        <Fade>
          <p className="text-9xl font-serif">hello world</p>
        </Fade>
      </Reveal>
    </div>
  );
};

export default Home;
