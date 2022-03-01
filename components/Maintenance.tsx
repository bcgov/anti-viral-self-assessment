import React from 'react';
import { InfoBox } from './InfoBox';
import { ServiceBCLink } from './ServiceBCLink';

export enum MAINTENANCE_STATUSES {
  WITH_PHONE = 'WITH_PHONE',
  WITHOUT_PHONE = 'WITHOUT_PHONE',
}

interface MaintenanceProps {
  status: MAINTENANCE_STATUSES;
}

export const Maintenance: React.FC<MaintenanceProps> = ({ status }) => {
  return (
    <div className='flex items-center justify-center h-full'>
      <div className='md:w-1/2'>
        <InfoBox>
          {(() => {
            switch (status) {
              case MAINTENANCE_STATUSES.WITH_PHONE:
                return (
                  <p>
                    This page is currently unavailable. Please contact Service BC at{' '}
                    <ServiceBCLink /> if you have questions about COVID-19 treatments.
                  </p>
                );
              case MAINTENANCE_STATUSES.WITHOUT_PHONE:
                return (
                  <p>
                    We are experiencing technical issues processing requests for COVID-19
                    treatments. Please try again later.
                  </p>
                );
            }
          })()}
        </InfoBox>
      </div>
    </div>
  );
};
