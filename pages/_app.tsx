import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      NProgress.start();
    });

    Router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });

    Router.events.on('routeChangeError', () => {
      NProgress.done();
    });

    const use = async () => {
      // eslint-disable-next-line no-unused-expressions
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  return (
    <>
      <Head>
        <title>MaxiPet | Tienda de mascotas</title>
        <meta
          name="description"
          content="Una tienda para comprar todo lo necesario para tu mascota"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
