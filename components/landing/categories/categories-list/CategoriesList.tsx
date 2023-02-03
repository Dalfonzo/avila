import React from 'react';
import { nanoid } from 'nanoid';
import { PreTitle, Subtitle } from '../../../common/text';
import { CategoryCard } from '../category-card';
import DogIcon from '../../../../assets/images/dog-icon.png';

const CATEGORIES_LIST = [
  {
    id: nanoid(),
    title: 'perros',
    image: DogIcon,
    alt: 'Icono de un cachorro',
  },
  {
    id: nanoid(),
    title: 'gatos',
    image: DogIcon,
    alt: 'Icono de un cachorro',
  },
  {
    id: nanoid(),
    title: 'peces',
    image: DogIcon,
    alt: 'Icono de un cachorro',
  },
  {
    id: nanoid(),
    title: 'roedores',
    image: DogIcon,
    alt: 'Icono de un cachorro',
  },
  {
    id: nanoid(),
    title: 'reptiles',
    image: DogIcon,
    alt: 'Icono de un cachorro',
  },
  {
    id: nanoid(),
    title: 'placeholder',
    image: DogIcon,
    alt: 'Icono de un cachorro',
  },
];

const CategoriesList = () => (
  <section className="mt-16  max-w-6xl mx-auto animate-in fade-in zoom-in">
    <PreTitle>Lorem ipsum dolor sit amet.</PreTitle>
    <Subtitle>Una gran variedad de categorías</Subtitle>
    <div className="grid grid-cols-6 justify-items-center mt-5">
      {CATEGORIES_LIST.map((category) => (
        <CategoryCard
          title={category.title}
          image={category.image}
          alt={category.alt}
          key={category.id}
        />
      ))}
    </div>
  </section>
);

export default CategoriesList;
