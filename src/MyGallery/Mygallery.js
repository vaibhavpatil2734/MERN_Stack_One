import React from 'react';
import './gallery.css'; // Make sure to create this CSS file

export default function Mygallery() {
  const images = [
    {
      src: 'https://imgs.search.brave.com/jI4s4JGdq6BycA9T_T5XUBUu8Tx3f4WV0cuJP8iwtHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC8wanpOektI/LmpwZw',
      caption: 'Beautiful Sunset and many more a caption text here',
    },
    {
      src: 'https://imgs.search.brave.com/jI4s4JGdq6BycA9T_T5XUBUu8Tx3f4WV0cuJP8iwtHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC8wanpOektI/LmpwZw',
      caption: 'Serene Mountain',
    },
    {
      src: 'https://imgs.search.brave.com/jI4s4JGdq6BycA9T_T5XUBUu8Tx3f4WV0cuJP8iwtHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC8wanpOektI/LmpwZw',
      caption: 'Forest Trail',
    },
    {
      src: 'https://imgs.search.brave.com/jI4s4JGdq6BycA9T_T5XUBUu8Tx3f4WV0cuJP8iwtHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC8wanpOektI/LmpwZw',
      caption: 'Calm Lake',
    },
    {
      src: 'https://imgs.search.brave.com/jI4s4JGdq6BycA9T_T5XUBUu8Tx3f4WV0cuJP8iwtHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC8wanpOektI/LmpwZw',
      caption: 'City Skyline',
    },
    {
      src: 'https://imgs.search.brave.com/jI4s4JGdq6BycA9T_T5XUBUu8Tx3f4WV0cuJP8iwtHQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC8wanpOektI/LmpwZw',
      caption: 'Desert Dunes',
    },
  ];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
          <div className="caption">{image.caption}</div>
        </div>
      ))}
    </div>
  );
}
