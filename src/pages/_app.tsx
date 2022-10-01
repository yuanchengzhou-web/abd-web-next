import type { AppProps } from 'next/app';
import Head from 'next/head';

import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
    require('@/styles/template/animate.css');
    require('@/styles/template/magnific-popup.css');
    //require('@/styles/template/owl.carousel.css');
    //require('@/styles/template/themify-icons.css');
    require('@/styles/template/bootstrap.min.css');
    //require('@/styles/template/styles.css');
  });
  return <Component {...pageProps} />;
}
