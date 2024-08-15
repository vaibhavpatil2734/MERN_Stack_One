import React from 'react';
import './gallery.css'; // Make sure to create this CSS file

export default function Mygallery() {
  const images = [
    'https://imgs.search.brave.com/jI4s4JGdq6BycA9T_T5XUBUu8Tx3f4WV0cuJP8iwtHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC8wanpOektI/LmpwZw',
    'https://imgs.search.brave.com/jI4s4JGdq6BycA9T_T5XUBUu8Tx3f4WV0cuJP8iwtHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC8wanpOektI/LmpwZw',
    'https://imgs.search.brave.com/jI4s4JGdq6BycA9T_T5XUBUu8Tx3f4WV0cuJP8iwtHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC8wanpOektI/LmpwZw',
    'https://imgs.search.brave.com/jI4s4JGdq6BycA9T_T5XUBUu8Tx3f4WV0cuJP8iwtHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC8wanpOektI/LmpwZw',
    'https://imgs.search.brave.com/jI4s4JGdq6BycA9T_T5XUBUu8Tx3f4WV0cuJP8iwtHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC8wanpOektI/LmpwZw',
    'https://imgs.search.brave.com/jI4s4JGdq6BycA9T_T5XUBUu8Tx3f4WV0cuJP8iwtHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC8wanpOektI/LmpwZw',
  ];

  return (
    <div className="gallery">
      {images.map((src, index) => (
        <div key={index} className="gallery-item">
          <img src={src} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
        </div>
      ))}
    </div>
  );
}
