import React from 'react';
import {motion} from 'framer-motion';

//NOTE: Sample hover animation
const Hover: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <motion.div
      whileHover={{scale: 1.1}}
      transition={{type: 'spring', stiffness: 400, damping: 10}}
    >
      {children}
    </motion.div>
  );
};

export default Hover;
