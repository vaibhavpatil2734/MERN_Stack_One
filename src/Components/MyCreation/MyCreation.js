import React from 'react';
import { motion } from 'framer-motion';
import './MyCreation.css';

export default function MyCreation() {
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
        
        <motion.div 
          className="animated-table"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.table
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
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
                  animate={{ opacity: 1 }}
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
      <div className='caroclass'>
  <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://imgs.search.brave.com/sss5pux4ltmYuSwOTlBP7TzbP-QcZQB8MnSFVA6nEmk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMWNz/YXJrejhvYmU5dS5j/bG91ZGZyb250Lm5l/dC9wb3N0ZXJwcmV2/aWV3cy9saW5rZWRp/biwtZXZlbnQtZGVz/aWduLXRlbXBsYXRl/LWMwZjc0ZGY0MjEx/NWVmOWU1ZmQ4MzBh/YjFmMjg0MzVlLmpw/Zz90cz0xNTkzNDQz/NTYy" className="posterimg d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://imgs.search.brave.com/ecVO6QNrtngu-MxXnPyNILNBz3YXe4n5pfgefv4eGEw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMWNz/YXJrejhvYmU5dS5j/bG91ZGZyb250Lm5l/dC9wb3N0ZXJwcmV2/aWV3cy9tb2Rlcm4t/Y2VvLWFubm91bmNl/bWVudC1saW5rZWRp/bi1iYWNrZ3JvdW5k/LWktZGVzaWduLXRl/bXBsYXRlLWM2N2U3/MzZmNTgxM2M3NDBk/NjdhNTAyNTVjZjhj/NDEyLmpwZz90cz0x/NTc5Njg5Nzk2" className="posterimg d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://imgs.search.brave.com/sss5pux4ltmYuSwOTlBP7TzbP-QcZQB8MnSFVA6nEmk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMWNz/YXJrejhvYmU5dS5j/bG91ZGZyb250Lm5l/dC9wb3N0ZXJwcmV2/aWV3cy9saW5rZWRp/biwtZXZlbnQtZGVz/aWduLXRlbXBsYXRl/LWMwZjc0ZGY0MjEx/NWVmOWU1ZmQ4MzBh/YjFmMjg0MzVlLmpw/Zz90cz0xNTkzNDQz/NTYy" className="posterimg d-block w-100" alt="..." />
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
