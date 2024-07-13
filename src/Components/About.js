import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function About() {
  return (
    <div className='i-1'>
        <div class="jumbotron">
        <h2>About Me</h2>
      <p>
        Hi there! My name is Vaibhav Patil, and I'm a passionate developer
        working with React. I love creating interactive and engaging web
        experiences using the latest technologies.
      </p>
      <p>
        In my free time, I enjoy exploring new coding concepts, contributing to
        open-source projects, and staying updated with the latest trends in web
        development.
      </p>
      <p>
        Feel free to browse through my portfolio to see some of my recent
        projects and don't hesitate to reach out if you have any questions or
        collaboration opportunities.
      </p>
      <div className="social-icons">
      <a href="https://www.instagram.com/vaibhavpatil_2734?igsh=eGY4M2NxdnVmanBh" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={40} style={{ color: 'red' }}/>
      </a>
      <a href="https://www.linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={40} />
      </a>
      <a href="https://github.com/vaibhavpatil2734" target="_blank" rel="noopener noreferrer">
        <FaGithub size={40}style={{ color: 'black' }} />
      </a>
    </div>
    </div>
    </div>
  )
}
