import React from 'react';
import Image, { StaticImageData } from 'next/image';

const BrandCard = ({
  image,
  alt,
}: {
  image: string | StaticImageData;
  alt: string;
}) => <Image src={image} alt={alt} width={126} height={80} />;

export default BrandCard;
