/* eslint-disable react/display-name */
import React from 'react';
import { motion, Variants } from 'framer-motion';

function withAnimation<T>(Component: React.FC<T>) {
  return (props: T) => {
    const animationVariant: Variants = {
      offscreen: {
        y: 150,
        opacity: 0,
      },
      onscreen: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.2,
          duration: 0.5,
        },
      },
    };

    return (
      <motion.div
        className="section-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section" variants={animationVariant}>
          <Component {...props} />;
        </motion.div>
      </motion.div>
    );
  };
}

export default withAnimation;
