import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className='p-6 md:pt-10 md:pb-8 md:px-10 shadow-5xl rounded-[20px]'>
      <div className='mb-12'>
        <Link href='#' className='mb-5 inline-block'>
          <h4 className='text-black text-xl md:text-[26px] font-semibold uppercase'>
            {service?.title}
          </h4>
        </Link>
        <p className='text-[#9D9D9D]'>
          Increase your team’s productivity and save time with a bot that
          answers and fields customer inquiries
        </p>
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col md:flex-row gap-[33px] justify-between'>
          <Image
            src={service?.photoURL[0]?.src}
            width={service?.photoURL[0]?.width}
            height={service?.photoURL[0]?.height}
            alt='hero-image-1'
            layout='fixed'
            className={`hover:scale-105 duration-300 rounded-[20px] cursor-pointer !w-full`}
          />

          <Image
            src={service?.photoURL[1]?.src}
            width={service?.photoURL[1]?.width}
            height={service?.photoURL[1]?.height}
            alt='hero-image-1'
            layout='fixed'
            className={`hover:scale-105 duration-300 rounded-[20px] cursor-pointer !w-full`}
          />
        </div>
        <div className='flex flex-col md:flex-row gap-[33px] justify-between'>
          <Image
            src={service?.photoURL[2]?.src}
            width={service?.photoURL[2]?.width}
            height={service?.photoURL[2]?.height}
            alt='hero-image-1'
            layout='fixed'
            className={`hover:scale-105 duration-300 rounded-[20px] cursor-pointer !w-full`}
          />

          <Image
            src={service?.photoURL[3]?.src}
            width={service?.photoURL[3]?.width}
            height={service?.photoURL[3]?.height}
            alt='hero-image-1'
            layout='fixed'
            className={`hover:scale-105 duration-300 rounded-[20px] cursor-pointer !w-full`}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
