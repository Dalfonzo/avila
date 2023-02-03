import React from 'react';
import { nanoid } from 'nanoid';
import { PreTitle, Subtitle } from '../../../common/text';
import { ProductCard } from '../product-card';
import PlaceholderImage from '../../../../assets/images/puppy-chiot.png';
import CatAd from '../../../../assets/images/cat-ad.jpg';
import { SideImageGrid } from '../side-image-grid';
import withAnimation from '../../../../hoc/withAnimation';

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
  {
    id: nanoid(),
    image: PlaceholderImage,
    name: '1st Choice Puppy Chiot',
    price: 9.99,
    alt: 'testing',
    rate: 3,
  },
];

const FeaturedProducts = () => (
  <section className="mt-20  max-w-6xl mx-auto">
    <PreTitle>Lorem ipsum dolor sit amet.</PreTitle>
    <Subtitle className="mb-5">Productos destacados</Subtitle>
    <SideImageGrid image={CatAd}>
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
    </SideImageGrid>
  </section>
);

export default withAnimation(FeaturedProducts);
