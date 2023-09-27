import styled from 'styled-components';

export const GalleryItem = styled.li`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`;
export const GalleryItemimage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
