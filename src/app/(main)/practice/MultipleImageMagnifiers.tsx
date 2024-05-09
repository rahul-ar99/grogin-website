// components/MultipleImageMagnifiers.js

import React from 'react';
import Magnifier from 'react-image-magnifiers';

const MultipleImageMagnifiers = ({ images }) => {
  return (
    <div style={{ display: 'flex' }}>
      {images.map((image, index) => (
        <div key={index} style={{ margin: '0 10px' }}>
          <Magnifier
            {...{
              imageSrc: image.src,
              largeImageSrc: image.largeSrc,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default MultipleImageMagnifiers;
