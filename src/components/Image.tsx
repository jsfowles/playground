import React from 'react';
import { scrollAnimation } from '@components/ScrollAnimation';

const Image = ({ src }) => {
  return <img src={src} alt="" />;
};

const Fade = scrollAnimation(Image, {
  animations: {
    opacity: {
      startValue: 0,
      finishValue: 1,
      startAnimation: 0,
      finishAnimation: 50,
    },
  },
});

const FadeImage = ({ ...props }) => {
  return <Fade {...props} />;
};

export default FadeImage;
