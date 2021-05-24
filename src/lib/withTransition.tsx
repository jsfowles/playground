import { motion } from 'framer-motion';

const withTransition = (Component) => {
  return () => (
    <>
      <Component />
      <motion.div
        className="fixed top-0 left-0 h-screen w-full bg-gray-200 origin-left z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed top-0 left-0 h-screen w-full bg-gray-200 origin-right z-50"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      />
    </>
  );
};

export default withTransition;
