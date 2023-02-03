import Image, { StaticImageData } from 'next/image';
import React from 'react';

const ServiceCard = ({
  image,
  alt,
  description,
  title,
}: {
  image: string | StaticImageData;
  alt: string;
  description: string;
  title: string;
}) => (
  <div className="cursor-pointer hover:bg-gray-50 p-2">
    <Image src={image} alt={alt} />
    <p className="text-text-black text-md font-semibold my-2">{title}</p>
    <p className="text-text-black text-sm font-cal">{description}</p>
  </div>
);

export default ServiceCard;
