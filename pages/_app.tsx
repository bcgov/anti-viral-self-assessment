import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { Header, Footer } from '@components';
import { Maintenance, MAINTENANCE_STATUSES } from 'components/Maintenance';
import Script from 'next/script';

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

const getMaintenanceStatus = (envName?: string) => {
  switch (envName) {
    case 'dev':
      return MAINTENANCE_STATUSES.WITH_PHONE;
    case 'test':
      return MAINTENANCE_STATUSES.WITHOUT_PHONE;
    case 'prod':
      return null;
    default:
      return null;
  }
};

const Application = ({ Component, pageProps }: AppProps) => {
  const analyticsScriptPath = getAnalyticsScriptPath(envName);
  const maintenanceStatus = getMaintenanceStatus(envName);

  return (
    <div className='w-full h-screen flex flex-col'>
      <Head>
        <title>COVID-19 Treatment Self-Assessment</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />

      <main className='flex-grow bg-bcLightGray flex justify-center py-12 px-4'>
        <div className='w-layout'>
          {maintenanceStatus ? (
            <Maintenance status={maintenanceStatus} />
          ) : (
            <Component {...pageProps} />
          )}
        </div>
      </main>

      <Footer />

      {analyticsScriptPath ? <Script src={analyticsScriptPath} /> : null}
    </div>
  );
};

export default Application;
