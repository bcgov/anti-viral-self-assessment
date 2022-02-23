import React from 'react';
import { InfoBox } from './InfoBox';
import { ServiceBCLink } from './ServiceBCLink';

export const Maintenance = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='md:w-1/2'>
        <InfoBox>
          This page is currently unavailable. Please contact Service BC at <ServiceBCLink /> if you
          have questions about COVID-19 treatments.
        </InfoBox>
      </div>
    </div>
  );
};
