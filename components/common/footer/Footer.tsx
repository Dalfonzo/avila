import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AvilaTekIcon from '../../../assets/icons/avila-tek-icon.svg';
import TreeIcon from '../../../assets/icons/tree-icon.svg';
import DogHouseIcon from '../../../assets/icons/dog-house-icon.svg';
import InstagramIcon from '../../../assets/icons/instagram-icon.svg';
import TwitterIcon from '../../../assets/icons/twitter-icon.svg';
import FacebookIcon from '../../../assets/icons/facebook-icon.svg';

const Footer = () => (
  <footer className="bg-background-200 pt-16 mt-28 ">
    <div className="grid grid-cols-4 gap-28 max-w-7xl mx-auto w-full">
      <div>
        <h3 className="font-bold font-mont text-primary-300 text-lg mb-5">
          Sobre nosotros
        </h3>
        <p className="text-sm text-secondary-500 font-cal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie
          rhoncus id nunc, porta leo tempus facilisi.
        </p>
      </div>
      <div>
        <h3 className="font-bold font-mont text-primary-300 text-lg mb-5">
          Mi cuenta
        </h3>
        <FooterList
          list={[
            <Link href="/">Información personal</Link>,
            <Link href="/">Direcciones</Link>,
            <Link href="/">Mascotas</Link>,
            <Link href="/">Órdenes</Link>,
            <Link href="/">Agenda</Link>,
          ]}
        />
      </div>
      <div>
        <h3 className="font-bold font-mont text-primary-300 text-lg mb-5">
          Información
        </h3>
        <FooterList
          list={[
            <Link href="/">Formulario de contacto</Link>,
            <Link href="/">Preguntas frecuentes</Link>,
            <Link href="/">Términos y condiciones</Link>,
            <Link href="/">Política de privacidad</Link>,
          ]}
        />
      </div>
      <div>
        <h3 className="font-bold font-mont text-primary-300 text-lg mb-5">
          Atención al cliente
        </h3>
        <FooterList
          list={[
            'Bello Monte, calle XXXX, local 1',
            '(0212) 575 54 12',
            'soporte@maxipet.com',
            'Lunes a Viernes',
            '9:00 a.m. - 5:00 p.m.',
            <span className="flex gap-2">
              <Link href="/">
                <Image
                  src={InstagramIcon}
                  alt="Logo de Instagram"
                  width={13}
                  height={13}
                />
              </Link>
              <Link href="/">
                <Image
                  src={TwitterIcon}
                  alt="Logo de Twitter"
                  width={16}
                  height={13}
                />
              </Link>
              <Link href="/">
                <Image
                  src={FacebookIcon}
                  alt="Logo de Facebook"
                  height={13}
                  width={8}
                />
              </Link>
            </span>,
          ]}
        />
      </div>
    </div>
    <div className="mt-16 flex items-end max-w-6xl mx-auto justify-between">
      <Image src={DogHouseIcon} alt="Icono de una casa de perro" />
      <Image src={TreeIcon} alt="Icono de árbol" />
    </div>
    <div className="bg-primary-300 text-text-white text-sm py-2 relative">
      <p className="flex justify-center items-center font-cal">
        Copyright © 2021 Maxi Pet. Todos los Derechos Reservados. Desarrollado
        por Avila Tek
        <span className="ml-2">
          <Image
            src={AvilaTekIcon}
            alt="Avila tek Logo"
            className="inline-block"
            width={24}
            height={12}
          />
        </span>
      </p>
    </div>
  </footer>
);

const FooterList = ({ list }: { list: string[] | React.ReactNode[] }) => (
  <ul className="text-md text-secondary-500 font-cal">
    {list.map((item: string | React.ReactNode, i: number) => (
      <li className="my-2 [&>a:hover]:underline" key={i}>
        {item}
      </li>
    ))}
  </ul>
);

export default Footer;
