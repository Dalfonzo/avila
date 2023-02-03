import React from 'react';
import { nanoid } from 'nanoid';
import { Carousel } from './carousel';
import HeroImage1 from '../../../assets/images/hero-image-1.jpg';

const images = [
  {
    src: HeroImage1,
    alt: 'image',
    id: nanoid(),
  },
  {
    src: HeroImage1,
    alt: 'image',
    id: nanoid(),
  },
  {
    src: HeroImage1,
    alt: 'image',
    id: nanoid(),
  },
];

const Hero = () => <Carousel images={images} />;

export default Hero;
