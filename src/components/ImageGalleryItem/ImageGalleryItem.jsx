// ImageGalleryItem.js
import React from 'react';
import { GalleryItem, GalleryItemimage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imageUrl, onClick }) => {
  return (
    <GalleryItem className="gallery-item">
      <GalleryItemimage src={imageUrl} alt="" onClick={onClick} />
    </GalleryItem>
  );
};
