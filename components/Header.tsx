import Link from 'next/link';

export const Header = () => {
  return (
    <div className='w-full flex justify-center bg-bcBluePrimary border-b-2 border-bcYellowPrimary print:hidden'>
      <div className='gap-0 md:w-layout w-full 2xl:mx-0 md:mx-12 mx-4 flex flex-row items-center align-center h-16 mt-1'>
        <Link href='/'>
          <a>
            <img
              src={'/svg/header_logo.svg'}
              alt='government of british columbia'
              className='h-11 w-44'
            />
          </a>
        </Link>
        <h1 className='md:ml-5 md:pl-5 pl-2 md:py-2 font-semibold tracking-wider text-white border-l-2 border-bcYellowPrimary lg:text-2xl sm:text-lg text-sm focus:outline-none'>
          Self Screening Tool
        </h1>
      </div>
    </div>
  );
};
