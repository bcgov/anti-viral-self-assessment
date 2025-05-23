import Link from 'next/link';

const FooterLink: React.FC<{ href: string; label?: string; children: React.ReactNode }> = ({
  href,
  label,
  children,
}) => {
  return (
    <div className='md:mr-8 mt-2 md:mt-0'>
      {label ? <p className='block text-xs mt-4 lg:mt-0 mb-1'>{label}</p> : null}
      <Link
        href={href}
        className='w-full md:w-auto flex items-center justify-center button rounded-md px-6 py-2 border text-bcBluePrimary border-bcBluePrimary font-bold no-underline'
      >
        {children}
      </Link>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className='w-full bg-white flex justify-center print:hidden'>
      <div
        className='md:w-layout w-full 2xl:mx-0 md:mx-0 sm:mx-12 py-12
        grid grid-cols-12 gap-8'
      >
        <div className='flex flex-col w-full items-start md:flex-col md:items-left md:align-left col-start-2 md:col-start-1 col-end-12 gap-4'>
          <h2 className='text-lg text-bcBluePrimary font-bold mb-1'>Help in other languages</h2>

          <p className='text-sm'>
            Talk to someone on the phone. Get support in 220 languages, including:
          </p>

          <p className='text-sm'>國粵語 | ਪੰਜਾਬੀ | عربى | Français | Español</p>

          <p className='text-sm font-bold'>
            Monday to Friday, 7 am to 7 pm. Statutory holidays, 9 am to 5 pm.
          </p>

          <div className='flex flex-col gap-2'>
            <FooterLink href='tel:+18882684319'>Call: 1-833-838-2323 (toll free)</FooterLink>
            <FooterLink href='tel:711'>Telephone for the deaf: Dial 711</FooterLink>
          </div>

          <p className='text-sm text-gray-600'>
            <a href='https://srvcanadavrs.ca/en/' target='_blank' rel='noreferrer'>
              Video Relay Services (VRS) sign language interpretation
            </a>{' '}
            is free for people who are deaf, hard of hearing or speech-impaired.
          </p>
        </div>
      </div>
    </footer>
  );
};
