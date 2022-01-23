export const NoBenefit = {
  title:
    'Based on your answer you would likely not benefit from antivirals for COVID-19 at this time.',
  content: (
    <p>
      As with most medications, there are side effects to taking these oral antivirals if you do not
      have COVID-19. They have the potential to interfere with other drugs and impact other health
      conditions. If you are experiencing symptoms and are at risk of more severe disease due to
      personal risk factors, you are encouraged to get tested. For more information,&nbsp;
      <a
        className='text-bcBlueLink underline font-bold'
        href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/testing/when-to-get-a-covid-19-test'
        target='_blank'
      >
        go to this website.
      </a>
    </p>
  ),
};

export const UrgentCare = {
  title: 'Please go to an urgent care clinic or emergency department as soon as possible.',
};

export const TooManyDays = {
  content: (
    <p>
      In order to be effective, the antiviral treatments that are currently available need to be
      given within the first 5-7 days of symptom onset. Stay home and away from others until you
      feel well enough to return to your regular activities. You should continue to seek medical
      care if you feel you need it. For more information, go to&nbsp;
      <a
        className='text-bcBlueLink underline font-bold'
        href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/if-you-have-covid-19'
        target='_blank'
      >
        go to this website.
      </a>
    </p>
  ),
};

export const AntiviralBenefit = {
  title: 'You may benefit from antiviral treatment.',
  content: (
    <p>
      Please call{' '}
      <a className='text-bcBlueLink font-bold' href='tel:811'>
        8-1-1
      </a>{' '}
      to speak with a nurse and complete further screening questions. Let them know you are calling
      about antiviral treatment options and that you have completed the online screener. There is a
      short window of time to deliver these medications so please call right away.
    </p>
  ),
};
