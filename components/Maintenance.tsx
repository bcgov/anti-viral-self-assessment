import React from 'react';
import { InfoBox } from './InfoBox';

export const Maintenance = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='md:w-1/2'>
        <InfoBox>This application is currently unavailable. Please check in a later time.</InfoBox>
      </div>
    </div>
  );
};
