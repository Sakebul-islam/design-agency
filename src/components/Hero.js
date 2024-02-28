import Image from 'next/image';
import { Button } from './ui/button';
import Wrapper from '@/components/Wrapper';
import Link from 'next/link';

const Hero = () => {
  return (
    <Wrapper>
      <div className='flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-[81px] py-6 lg:pt-[50px] lg:pb-[80px]'>
        <div className='flex-1'>
          <div className='mb-6 lg:mb-12'>
            <h2 className='text-[26px] md:text-3xl xl:text-[50px] font-bold mb-[10px] xl:leading-[65px]'>
              Increase Your <br className='sm:hidden lg:block' />
              Customers Loyalty <br className='sm:hidden lg:block' />
              and Satisfaction
            </h2>
            <p>
              We help businesses like yours earn more customers, standout from
              competitors, make more money
            </p>
          </div>
          <Link
            href='#'
            className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[#20B15A] bg-[#20B15A] text-white hover:bg-transparent hover:text-black h-10 px-4 py-2'
          >
            Get Started
          </Link>
        </div>
        <div className='flex-1 flex flex-col gap-[22px]'>
          <div className='flex flex-col items-center md:justify-center md:flex-row gap-[18px]'>
            <Image
              src='/images/hero-1.png'
              width={408}
              height={271}
              alt='hero-image-1'
              layout='fixed'
              className=''
            />
            <Image
              src='/images/hero-2.png'
              width={180}
              height={271}
              alt='hero-image-3'
              layout='fixed'
              className=''
            />
          </div>
          <div className='flex flex-col items-center md:justify-center md:flex-row gap-[15px]'>
            <Image
              src='/images/hero-3.png'
              width={246}
              height={164}
              alt='hero-image-3'
            />
            <Image
              src='/images/hero-4.png'
              width={345}
              height={164}
              alt='hero-image-4'
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
