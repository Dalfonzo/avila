import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LocationIcon from '../../../assets/icons/location-icon-white.svg';
import ArrowDownIcon from '../../../assets/icons/chevron-down-icon.svg';
import InstagramIcon from '../../../assets/icons/instagram-icon-white.svg';
import TwitterIcon from '../../../assets/icons/twitter-icon-white.svg';
import FacebookIcon from '../../../assets/icons/facebook-icon-white.svg';
import MaxipetLogo from '../../../assets/images/maxipet-logo.png';
import LocationIconDark from '../../../assets/icons/location-icon-dark.svg';
import PetIconDark from '../../../assets/icons/pet-icon-dark.svg';
import UserIconDark from '../../../assets/icons/user-icon-dark.svg';
import ShoppingCart from '../../../assets/icons/shopping-cart-icon-dark.svg';
import SearchIcon from '../../../assets/icons/search-icon.svg';

const Header = () => (
  <header>
    <div className="bg-primary-300 py-2">
      <div className="max-w-7xl mx-auto flex gap-2 w-full">
        <Link href="/" className="ml-auto">
          <Image src={LocationIcon} alt="Icono de localización" />
        </Link>
        <p className="text-text-white font-mont text-xs font-medium flex items-center mx-1 gap-1">
          Bello Monte
          <span>
            <Image src={ArrowDownIcon} alt="Icono de una flecha hacia abajo" />
          </span>
        </p>
        <Link href="/">
          <Image src={InstagramIcon} alt="Logo de Instagram" />
        </Link>
        <Link href="/">
          <Image src={TwitterIcon} alt="Logo de Twitter" />
        </Link>
        <Link href="/">
          <Image src={FacebookIcon} alt="Logo de Facebook" />
        </Link>
      </div>
    </div>
    <div className="flex max-w-7xl w-full mx-auto justify-between items-center mt-2">
      <Image src={MaxipetLogo} alt="Logo Maxipet" />
      <div className="relative w-80 max-h-8">
        <input
          type="text"
          placeholder="Buscador"
          className="h-[100%] placeholder-secondary-200 border border-secondary-200 rounded-[4px] w-full font-mont text-sm"
        />
        <button
          type="submit"
          className="absolute right-0 top-[50%] translate-y-[-50%] h-[100%] px-2"
        >
          <Image src={SearchIcon} alt="Botón de búsqueda" />
        </button>
      </div>
      <div className="flex gap-3">
        <Link href="/">
          <Image
            src={LocationIconDark}
            alt="Icono de localización"
            width={19}
            height={19}
          />
        </Link>
        <Link href="/">
          <Image
            src={PetIconDark}
            alt="Icono de máscota"
            width={19}
            height={19}
          />
        </Link>
        <Link href="/">
          <Image
            src={UserIconDark}
            alt="Icono de usuario"
            width={19}
            height={19}
          />
        </Link>
        <Link href="/">
          <Image
            src={ShoppingCart}
            alt="Icono de carrito de compras"
            width={19}
            height={19}
          />
        </Link>
      </div>
    </div>
    <nav className="max-w-6xl mx-auto py-3">
      <ul className="flex justify-around font-mont text-sm text-secondary-600 [&>li:hover]:underline">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/">Comprar por marca</Link>
        </li>
        <li>
          <Link href="/">Comprar por mascota</Link>
        </li>
        <li>
          <Link href="/">Nuestros servicios</Link>
        </li>
        <li>
          <Link href="/">Promociones</Link>
        </li>
        <li>
          <Link href="/">Nosotros</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
