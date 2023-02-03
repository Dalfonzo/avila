import React from 'react';
import Image, { StaticImageData } from 'next/image';

const BannerCard = ({
  image,
  alt,
}: {
  image: string | StaticImageData;
  alt: string;
}) => (
  <Image
    src={image}
    alt={alt}
    className="h-auto aspect-[527/100] my-20  max-w-6xl mx-auto w-full animate-in fade-in zoom-in"
    height={220}
    width={1160}
  />
);

export default BannerCard;
