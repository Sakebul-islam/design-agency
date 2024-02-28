import Image from 'next/image';
import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className='shadow-5xl rounded-[20px] px-6 py-12 group'>
      <figure className='flex place-content-center mb-10'>
        <Image
          src={testimonial?.photoURL?.src}
          width={testimonial?.photoURL?.width}
          height={testimonial?.photoURL?.height}
          alt='testimonial-image'
          layout='fixed'
          className='group-hover:scale-110 cursor-pointer duration-300 rounded-[20px]'
        />
      </figure>
      <div className='text-center'>
        <p className='text-[#9D9D9D] leading-[26px] mb-6'>
          {testimonial?.description}
        </p>
        <h4 className='text-black text-[26px] font-semibold mb-2 uppercase'>
          {testimonial?.name}
        </h4>
        <span className='capitalize'>{testimonial?.designation}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
