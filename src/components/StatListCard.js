'use client';
import Image from 'next/image';
import React from 'react';

import CountUp from 'react-countup';

const StatListCard = ({ stat }) => {
  return (
    <div className='rounded-[20px] shadow-3xl p-[47px] group'>
      <div className=''>
        <div className='flex justify-center items-center mb-6'>
          <figure className='bg-[#D7F5DC] p-[30px] inline-block rounded-[10px] overflow-hidden'>
            <Image
              src={stat?.icon?.src}
              width={stat?.icon?.width}
              height={stat?.icon?.height}
              alt='hero-image-1'
              layout='fixed'
              className='group-hover:scale-150 duration-300'
            />
          </figure>
        </div>
        <div className='text-center'>
          <h4 className='text-black text-2xl md:text-3xl font-semibold mb-1'>
            <CountUp end={stat?.statNumber} duration={4} separator='' />
          </h4>
          <p className='font-medium'>{stat?.paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default StatListCard;
