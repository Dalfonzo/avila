import React from 'react';
import { nanoid } from 'nanoid';
import { PreTitle, Subtitle } from '../../../common/text';
import BrandLogo from '../../../../assets/images/brand-logo.png';
import { BrandCard } from '../brand-card';

const BRANDS_LIST = [
  { image: BrandLogo, alt: '1st Choice Nutrition logo', id: nanoid() },
  { image: BrandLogo, alt: '1st Choice Nutrition logo', id: nanoid() },
  { image: BrandLogo, alt: '1st Choice Nutrition logo', id: nanoid() },
  { image: BrandLogo, alt: '1st Choice Nutrition logo', id: nanoid() },
];

const BrandsList = () => (
  <section className="mt-28 max-w-6xl mx-auto animate-in fade-in zoom-in">
    <PreTitle>Lorem ipsum dolor sit amet. </PreTitle>
    <Subtitle>Trabajamos con las mejores marcas</Subtitle>
    <div className="grid grid-cols-6 gap-12 mt-8">
      <p className="text-text-black text-md col-span-2 font-cal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
        viverra fames sed.
      </p>
      {BRANDS_LIST.map((brand) => (
        <BrandCard {...brand} key={brand.id} />
      ))}
    </div>
  </section>
);

export default BrandsList;
