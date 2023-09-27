import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="loader">
      <BallTriangle color="#00BFFF" height={80} width={80} />
    </div>
  );
};
