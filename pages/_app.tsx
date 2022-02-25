import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { Header, Footer } from '@components';
import { Maintenance } from 'components/Maintenance';
import Script from 'next/script';

// TODO should be an ENV var
const isMaintenanceMode = false;

const envName = process.env.NEXT_PUBLIC_ENV_NAME;

const getAnalyticsScriptPath = (envName?: string) => {
  switch (envName) {
    case 'dev':
    case 'test':
    case 'prod':
      return 'analytics/snowplow.prod.js';
    default:
      return null;
  }
};

const Application = ({ Component, pageProps }: AppProps) => {
  const analyticsScriptPath = getAnalyticsScriptPath(envName);

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

      {analyticsScriptPath ? <Script src={analyticsScriptPath} /> : null}
    </div>
  );
};

export default Application;
