import React from 'react';
import Image, { StaticImageData } from 'next/image';
import withAnimation from '../../../../hoc/withAnimation';

interface BannerCardI {
  image: string | StaticImageData;
  alt: string;
}

const BannerCard = ({ image, alt }: BannerCardI) => (
  <Image
    src={image}
    alt={alt}
    className="h-auto aspect-[527/100] my-20  max-w-6xl mx-auto w-full"
    height={220}
    width={1160}
  />
);

export default withAnimation<BannerCardI>(BannerCard);
