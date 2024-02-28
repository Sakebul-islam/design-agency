'use client';
import { Button } from '@/components/ui/button';

const Subscribe = () => {
  return (
    <div className='pt-[90px] pb-[137px]'>
      <div className='max-w-[596px] px-8 mx-auto'>
        <div className='mb-[40px] text-center'>
          <span className='inline-block text-[#20B15A] text:md md:text-xl font-medium mb-[22px] uppercase'>
            SUBSCRIBE
          </span>
          <h3 className='text-black text-2xl lg:text-3xl font-semibold mb-2'>
            Subscribe to get the latest
            <br className='hidden md:block' />
            news about us
          </h3>
          <p className='text-sm font-normal text-[#8B8B8B]'>
            Please drop your email below to get daily update about what we do
          </p>
        </div>
        <form className='w-full relative' onSubmit={(e) => e.preventDefault()}>
          <input
            type='email'
            placeholder='Enter Your Email Adress'
            className='rounded-[14px] border border-black w-full text-xs md:text-sm px-4 py-[15px] focus:ring-[#20B15A] focus:border-[#20B15A]'
          />
          <Button className='absolute top-2/4 -translate-y-2/4 md:px-[24.3px] py-[8.11px] right-[5.35px] bg-[#F55F1D] border-[#F55F1D] '>
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
