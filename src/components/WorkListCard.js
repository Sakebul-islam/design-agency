import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const WorkListCard = ({ workList }) => {
  return (
    <div className='p-5 md:px-[30px] md:py-[50px] group'>
      <div className=''>
        <figure className='bg-[#D7F5DC] p-[30px] inline-block rounded-[20px] mb-4 overflow-hidden'>
          <Image
            src={workList?.icon?.src}
            width={workList?.icon?.width}
            height={workList?.icon?.height}
            alt='hero-image-1'
            layout='fixed'
            className='group-hover:scale-150 duration-300'
          />
        </figure>
        <div className='mb-8 md:mb-11'>
          <h4 className='text-black text-xl md:text-2xl font-semibold mb-4'>
            {workList?.title}
          </h4>
          <p className='max-w-[300px]'>{workList?.paragraph}</p>
        </div>
        <Link href='#' className='flex items-center text-[16px] px-5 py-4'>
          <span className='mr-[10px]'>Learn More</span>
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default WorkListCard;
