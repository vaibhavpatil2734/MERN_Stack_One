import React from 'react';
import { motion } from 'framer-motion';
import './MyCreation.css';

export default function MyCreation() {
  return (
    <motion.div 
      className='i-creation'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.div 
        className="image-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.img 
          className="profileIMG" 
          src="https://imgs.search.brave.com/fk8PPoN9nmFBJqocbJ_6D4-iFMK6F7rpWbY9lOLYdJk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3Iva2l0dGVuLWNh/dC1pbWdlXzExMzg1/NDQtMjgxNTYuanBn/P3NpemU9NjI2JmV4/dD1qcGc" 
          alt="Cinque Terre" 
          width="200" 
          height="200"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      <motion.div 
        className="text-line"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <h1 className='text-light'>
          <b>Welcome to My Creation!</b>
        </h1>
      </motion.div>
    </motion.div>
  );
}
