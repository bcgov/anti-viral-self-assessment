import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { Header, Footer } from '@components';

const Application = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Head>
        <title>Self Assessment Tool</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main className='flex-grow bg-bcLightGray flex justify-center md:pt-11 pt-5'>
        <div className='h-min md:w-layout w-full md:mx-0 mx-6 gap-x-8 mb-12'>
          <Component {...pageProps} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Application;
