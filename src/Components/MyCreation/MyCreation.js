import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './MyCreation.css';

export default function MyCreation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

      <div id="carouselExampleFade" className="caroclass carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
        <div className="carousel-inner">
          {["image1.jpg", "image2.jpg", "image3.jpg"].map((src, index) => (
            <motion.div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="4000"
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 1 }}
            >
              <motion.img
                src={src}
                className="posterimg d-block w-100"
                alt="..."
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div ref={ref} className='row classtool'>
        {[1, 2, 3].map((_, index) => (
          <motion.div
            className="card"
            style={{ width: "20rem", marginLeft: index === 0 ? "0" : "4%" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index}
          >
            <motion.img
              src="https://imgs.search.brave.com/aZhmWgXhRE0fudcEtDTtS6J0AvMqg5wkaOKa_djhSO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL21vbmdv/ZGI5NzQwLmxvZ293/aWsuY29tLndlYnA"
              className="card-img-top"
              alt="..."
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="card-body cardcolortool"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
