import React from 'react';
import { motion } from "framer-motion";

interface HoverProps {
  children: React.ReactNode;
}

const Hover: React.FC<HoverProps> = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.div>
  );
};

export default Hover;
