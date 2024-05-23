// components/ImageMagnifier.tsx
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

interface ImageMagnifierProps {
  smallImageSrc: string;
  largeImageSrc: string;
  smallImageAlt?: string;
  smallImageWidth: number;
  smallImageHeight: number;
  largeImageWidth: number;
  largeImageHeight: number;
}

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({
  smallImageSrc,
  largeImageSrc,
  smallImageAlt = '',
  smallImageWidth,
  smallImageHeight,
  largeImageWidth,
  largeImageHeight
}) => {
  return (
    <div style={{ width: smallImageWidth }}>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: smallImageAlt,
            isFluidWidth: true,
            src: smallImageSrc,
            width: smallImageWidth,
            height: smallImageHeight,
          },
          largeImage: {
            src: largeImageSrc,
            width: largeImageWidth,
            height: largeImageHeight,
          },
          lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
        }}
      />
    </div>
  );
};

export default ImageMagnifier;
