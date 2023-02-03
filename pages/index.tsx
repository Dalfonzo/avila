import React from 'react';
import dynamic from 'next/dynamic';
import { CategoriesList } from '../components/landing/categories/categories-list';
import { BannerCard } from '../components/landing/banner/banner-card';
import Banner1 from '../assets/images/banner-1.jpg';
import Banner2 from '../assets/images/banner-2.jpg';
import { ServicesGrid } from '../components/landing/services/services-grid';
import { Layout } from '../components/common/layout';
import Hero from '../components/landing/hero/Hero';

const FeaturedProducts = dynamic(
  () =>
    import('../components/landing/product/featured-products/FeaturedProducts')
);
const LatestProducts = dynamic(
  () => import('../components/landing/product/latest-products/LatestProducts')
);
const PopularProducts = dynamic(
  () => import('../components/landing/product/popular-products/PopularProducts')
);
const BrandsList = dynamic(
  () => import('../components/landing/brands/brands-list/BrandsList')
);

function HomePage() {
  return (
    <Layout>
      <Hero />
      <CategoriesList />
      <FeaturedProducts />
      <BannerCard image={Banner1} alt="Imagen de un perro comiendo" />
      <PopularProducts />
      <BannerCard
        image={Banner2}
        alt="Imagen de un perro jugando con una pelota"
      />
      <LatestProducts />
      <ServicesGrid />
      <BrandsList />
    </Layout>
  );
}

export default HomePage;
