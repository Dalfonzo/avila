import React from 'react';
import Image, { StaticImageData } from 'next/image';

const CategoryCard = ({
  title,
  image,
  alt,
}: {
  title: string;
  image: string | StaticImageData;
  alt: string;
}) => (
  <div className="cursor-pointer hover:bg-gray-50">
    <Image
      src={image}
      alt={alt}
      width={160}
      height={150}
      className="aspect-1"
    />
    <p className="font-semibold text-center capitalize text-text-black">
      {title}
    </p>
  </div>
);

export default CategoryCard;
