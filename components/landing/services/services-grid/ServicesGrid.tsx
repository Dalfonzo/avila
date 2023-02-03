import React from 'react';
import { nanoid } from 'nanoid';
import { PreTitle, Subtitle } from '../../../common/text';
import { ServiceCard } from '../service-card';
import ServiceImage from '../../../../assets/images/dog-icon-no-paw.png';

const SERVICES_LIST = [
  {
    id: nanoid(),
    title: 'Peluquería',
    image: ServiceImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    alt: 'Imagen animada de la cara de un perro',
  },
  {
    id: nanoid(),
    title: 'Odontología',
    image: ServiceImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    alt: 'Imagen animada de la cara de un perro',
  },
  {
    id: nanoid(),
    title: 'Veterinario',
    image: ServiceImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    alt: 'Imagen animada de la cara de un perro',
  },
  {
    id: nanoid(),
    title: 'Entrenamiento',
    image: ServiceImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    alt: 'Imagen animada de la cara de un perro',
  },
  {
    id: nanoid(),
    title: 'Psicología canina',
    image: ServiceImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    alt: 'Imagen animada de la cara de un perro',
  },
  {
    id: nanoid(),
    title: 'Fiestas de cumpleaños',
    image: ServiceImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    alt: 'Imagen animada de la cara de un perro',
  },
];

const ServicesGrid = () => (
  <section className="mt-20 max-w-6xl mx-auto animate-in fade-in zoom-in">
    <PreTitle>Lorem ipsum dolor sit amet.</PreTitle>
    <Subtitle>Nuestros servicios</Subtitle>
    <p className="text-text-black text-md mt-5 font-cal">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
      viverra fames sed.
    </p>
    <div className="grid grid-cols-3 grid-rows-2 gap-12 mt-10">
      {SERVICES_LIST.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.title}
          image={service.image}
          description={service.description}
          alt={service.alt}
        />
      ))}
    </div>
  </section>
);

export default ServicesGrid;
