import Image, { StaticImageData } from 'next/image';
import React from 'react';

const Carousel = ({
  images,
}: {
  images: { src: string | StaticImageData; alt: string; id: string }[];
}) => (
  <div
    id="carousel-container"
    className="carousel slide relative max-h-[580px]"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      {images.map((_, i) => {
        const isFirstElement = i === 0;
        return (
          <button
            type="button"
            data-bs-target="#carousel-container"
            data-bs-slide-to={i}
            className={isFirstElement ? 'active' : ''}
            aria-label={`Imagen ${i + 1}`}
            key={i}
          />
        );
      })}
    </div>
    <div className="carousel-inner relative w-full overflow-hidden  max-h-[580px]">
      {images.map((image, i) => {
        const isFirstElement = i === 0;
        return (
          <div
            className={`carousel-item relative float-left w-full ${
              isFirstElement ? 'active' : ''
            }`}
            key={image.id}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="block w-full"
              height={580}
              width={2048}
              priority
            />
          </div>
        );
      })}
    </div>
  </div>
);

export default Carousel;
