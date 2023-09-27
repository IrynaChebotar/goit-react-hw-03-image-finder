import React from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { Loaderstyle } from './Loader.styled';

export const Loader = () => {
  return (
    <Loaderstyle>
      <BallTriangle color="#00BFFF" height={80} width={80} />
    </Loaderstyle>
  );
};
