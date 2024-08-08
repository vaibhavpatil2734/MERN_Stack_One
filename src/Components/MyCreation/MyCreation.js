import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './MyCreation.css';

export default function MyCreation() {
  const tableRef = useRef(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start({ opacity: 1, y: 0 });
        } else {
          setIsVisible(false);
          controls.start({ opacity: 0, y: 50 });
        }
      },
      { threshold: 0.2 } // Adjust this value based on when you want the animation to start
    );

    if (tableRef.current) {
      observer.observe(tableRef.current);
    }

    return () => {
      if (tableRef.current) {
        observer.unobserve(tableRef.current);
      }
    };
  }, [controls]);

  return (
    <div>
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
        <motion.div 
          className="projectdata"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <h4>
            The primary purpose of a password generator is to provide users with complex and secure passwords that are difficult to guess or crack, thus protecting their online accounts and sensitive data from unauthorized access.
            Key Features
          </h4>
          <h4>
            Random Password Generation:
          </h4>
          <p>
            The core functionality is to generate random passwords. Users can specify criteria such as length, inclusion of uppercase and lowercase letters, numbers, and special characters.
          </p>
        </motion.div>
        <div id="carouselExampleInterval" className="carousel slide caroposition" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="https://imgs.search.brave.com/fk8PPoN9nmFBJqocbJ_6D4-iFMK6F7rpWbY9lOLYdJk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3Iva2l0dGVuLWNh/dC1pbWdlXzExMzg1/NDQtMjgxNTYuanBn/P3NpemU9NjI2JmV4/dD1qcGc" className="d-block w-100 carousel-img" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="https://imgs.search.brave.com/fk8PPoN9nmFBJqocbJ_6D4-iFMK6F7rpWbY9lOLYdJk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3Iva2l0dGVuLWNh/dC1pbWdlXzExMzg1/NDQtMjgxNTYuanBn/P3NpemU9NjI2JmV4/dD1qcGc" className="d-block w-100 carousel-img" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://imgs.search.brave.com/fk8PPoN9nmFBJqocbJ_6D4-iFMK6F7rpWbY9lOLYdJk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3Iva2l0dGVuLWNh/dC1pbWdlXzExMzg1/NDQtMjgxNTYuanBn/P3NpemU9NjI2JmV4/dD1qcGc" className="d-block w-100 carousel-img" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <motion.div 
          ref={tableRef}
          className="animated-table"
          animate={controls}
          transition={{ duration: 1 }}
        >
          <motion.table
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
          >
            <thead>
              <tr>
                <th>
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Feature
                  </motion.span>
                </th>
                <th>
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Description
                  </motion.span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map(num => (
                <motion.tr
                  key={num}
                  initial={{ opacity: 0 }}
                  animate={controls}
                  transition={{ duration: 0.5, delay: num * 0.2 }}
                >
                  <td>
                    <motion.span
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      Feature {num}
                    </motion.span>
                  </td>
                  <td>
                    <motion.span
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      Details about feature {num}.
                    </motion.span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </motion.div>
      </motion.div>
    </div>
  );
}
