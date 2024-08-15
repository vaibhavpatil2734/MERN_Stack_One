import React from 'react';
import './Mygallery.css'; // Optional: For styling

export default function Mygallery() {
  const images = [
    'https://via.placeholder.com/150/0000FF',
    'https://via.placeholder.com/150/FF0000',
    'https://via.placeholder.com/150/00FF00',
    'https://via.placeholder.com/150/FFFF00',
    'https://via.placeholder.com/150/FF00FF',
    'https://via.placeholder.com/150/00FFFF',
  ];

  return (
    <div className="gallery">
      {images.map((src, index) => (
        <div key={index} className="gallery-item">
          <img src={src} alt={`Gallery Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
