import type { AppProps } from 'next/app';
import Head from 'next/head';
import Preload from '@/components/Preload';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSpring, animated } from 'react-spring';
import { useEffect, useState } from 'react';

const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wow.js') : null;

export default function MyApp({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
    require('@/styles/template/style.scss');
    require('bootstrap/dist/js/bootstrap');
    new WOW().init();
  }, []);

  const animateProps = useSpring({ opacity: render ? 0 : 1 });

  return (
    <>
      <>
        <animated.div style={animateProps}>
          <Preload />
        </animated.div>
        <Navbar />
        <Component {...pageProps} />;
        <Footer />
      </>
    </>
  );
}
