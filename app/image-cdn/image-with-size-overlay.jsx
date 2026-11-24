'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const getResourceSize = (el) => ({ width: el.clientWidth, height: el.clientHeight });

export function ImageWithSizeOverlay({ src, srcSet, overlayPosition = 'top' }) {
  const imageRef = useRef();
  const [imgSize, setImgSize] = useState();

  const handleImageLoad = useCallback(() => {
    const imgElement = imageRef.current;
    if (imgElement?.complete) {
      const size = getResourceSize(imgElement);
      setImgSize(size);
    } else {
      setImgSize(undefined);
    }
  }, []);

  useEffect(() => {
    handleImageLoad();
  }, [handleImageLoad]);

  return (
    <div className="relative">
      {imgSize && (
        <span className={'absolute px-2 py-1 bg-black text-white text-xs ' + (overlayPosition === 'bottom' ? 'bottom-2 left-2' : 'top-2 left-2')}>
          {`Size: ${Math.ceil(imgSize.width)} x ${Math.ceil(imgSize.height)}`}
        </span>
      )}
      <img ref={imageRef} src={src} srcSet={srcSet} onLoad={handleImageLoad} alt="" className="w-full" />
    </div>
  );
}
