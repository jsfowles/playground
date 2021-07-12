import { motion } from 'framer-motion';

const withTransition = (Component) => {
  return () => (
    <>
      <Component />
      <motion.div
        className="fixed top-0 left-0 h-screen w-full tycho-grad bg-gray-200 origin-left z-50"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      />
    </>
  );
};

export default withTransition;
