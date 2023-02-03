import React from 'react';
import { nanoid } from 'nanoid';
import { ProductCard } from '../product-card';
import PlaceholderImage from '../../../../assets/images/puppy-chiot.png';
import { PreTitle, Subtitle } from '../../../common/text';

const PRODUCTS_LIST = [
  {
    id: nanoid(),
    image: PlaceholderImage,
    name: '1st Choice Puppy Chiot',
    price: 9.99,
    alt: 'testing',
    rate: 3,
  },
  {
    id: nanoid(),
    image: PlaceholderImage,
    name: '1st Choice Puppy Chiot',
    price: 9.99,
    alt: 'testing',
    rate: 3,
  },
  {
    id: nanoid(),
    image: PlaceholderImage,
    name: '1st Choice Puppy Chiot',
    price: 9.99,
    alt: 'testing',
    rate: 3,
  },
  {
    id: nanoid(),
    image: PlaceholderImage,
    name: '1st Choice Puppy Chiot',
    price: 9.99,
    alt: 'testing',
    rate: 3,
  },
  {
    id: nanoid(),
    image: PlaceholderImage,
    name: '1st Choice Puppy Chiot',
    price: 9.99,
    alt: 'testing',
    rate: 3,
  },
];

const PopularProducts = () => (
  <section className="max-w-6xl mx-auto animate-in fade-in zoom-in">
    <PreTitle>Lorem ipsum dolor sit amet.</PreTitle>
    <Subtitle className="mb-5">productos populares</Subtitle>
    <div className="grid grid-cols-5 justify-items-center">
      {PRODUCTS_LIST.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          alt={product.alt}
          rate={product.rate}
        />
      ))}
    </div>
  </section>
);

export default PopularProducts;
