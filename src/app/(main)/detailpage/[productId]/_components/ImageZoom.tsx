// components/Magnifier.tsx
import React, { useRef, useState } from 'react';
import Image from 'next/image';

interface MagnifierProps {
  src: string;
  width: number;
  height: number;
  leftAbsolute:number;
  magnifierHeight?: number;
  magnifierWidth?: number;
  zoomLevel?: number;
}

const Magnifier: React.FC<MagnifierProps> = ({
  src,
  width,
  height,
  leftAbsolute,
  magnifierHeight = 100,
  magnifierWidth = 100,
  zoomLevel = 2
}) => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierStyle, setMagnifierStyle] = useState<React.CSSProperties>({
    backgroundImage: `url(${src})`,
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top:0,
    pointerEvents: 'none',
    height: `${magnifierHeight}px`,
    width: `${magnifierWidth}px`,
    border: '1px solid #000',
    display: 'none'
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { top, left } = imgRef.current!.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    const backgroundX = -((x / width) * (width * zoomLevel) - magnifierWidth / 2);
    const backgroundY = -((y / height) * (height * zoomLevel) - magnifierHeight / 2);

    setMagnifierStyle((prevState) => ({
      ...prevState,
      display: 'block',
      top: `0px`,
      left: leftAbsolute,
      backgroundColor:'white',
      backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`,
      backgroundPosition: `${backgroundX}px ${backgroundY}px`
    }));
  };

  const handleMouseEnter = () => setShowMagnifier(true);

  const handleMouseLeave = () => {
    setShowMagnifier(false);
    setMagnifierStyle((prevState) => ({ ...prevState, display: 'none' }));
  };

  return (
    <div style={{ position: 'relative', height, width }}>
      <div
        ref={imgRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'block', width:'100%', height:'auto' }}
      >
        <Image
          src={src}
          alt="Zoom"
          width={width}
          height={height}
          layout="responsive"
          style={{ display: 'block' }}
        />
      </div>
      {showMagnifier && <div style={magnifierStyle} />}
    </div>
  );
};

export default Magnifier;
