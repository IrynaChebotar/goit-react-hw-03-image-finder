// ImageGalleryItem.js
import React from 'react';

export const ImageGalleryItem = ({ imageUrl, onClick }) => {
  return (
    <li className="gallery-item">
      <img src={imageUrl} alt="" onClick={onClick} />
    </li>
  );
};
