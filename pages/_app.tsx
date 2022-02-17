import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { Header, Footer } from '@components';
import { Maintenance } from 'components/Maintenance';

const isMaintenanceMode = false;

const Application = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Head>
        <title>COVID-19 Treatment Self-Assessment</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main className='flex-grow bg-bcLightGray flex justify-center py-12 px-4'>
        <div className='w-layout'>
          {isMaintenanceMode ? <Maintenance /> : <Component {...pageProps} />}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Application;
