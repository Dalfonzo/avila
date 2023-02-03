import React from 'react';
import Image, { StaticImageData } from 'next/image';
import ShoppingCart from '../../../../assets/icons/shopping-cart-icon.svg';
import Rating from './Rating';

const ProductCard = ({
  name,
  price,
  rate,
  image,
  alt,
}: {
  name: string;
  price: number;
  rate: number;
  image: string | StaticImageData;
  alt: string;
}) => (
  <div className="flex-col items-center justify-items-center flex aspect-[3/5] w-fit cursor-pointer hover:bg-gray-50 p-2">
    <Image
      src={image}
      alt={alt}
      width={144}
      height={200}
      className="aspect-[29/40] mx-6 mt-auto"
    />
    <div className="mt-7 mb-2 w-full">
      <p className="text-sm font-medium font-mont text-text-black">{name}</p>
      <Rating rate={rate} />
      <p className="text-sm font-normal font-ws text-neutral-600">${price}</p>
    </div>
    <button
      type="button"
      className="flex items-center px-4 py-1 text-xs capitalize rounded bg-primary-300 text-text-white"
    >
      <Image
        src={ShoppingCart}
        alt="shopping cart icon"
        className="aspect-1"
        width={12}
        height={12}
      />
      <span className="ml-1">agregar</span>
    </button>
  </div>
);

export default ProductCard;
