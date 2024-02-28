import Wrapper from '@/components/Wrapper';

import testimonial1 from '../../public/images/testimonials/testimonial-1.png';
import testimonial2 from '../../public/images/testimonials/testimonial-2.png';
import testimonial3 from '../../public/images/testimonials/testimonial-3.png';
import testimonial4 from '../../public/images/testimonials/testimonial-4.png';
import testimonial5 from '../../public/images/testimonials/testimonial-5.png';
import testimonial6 from '../../public/images/testimonials/testimonial-6.png';
import TestimonialCard from './TestimonialCard';
const testimonials = [
  {
    id: 1,
    photoURL: testimonial1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.',
    name: 'Alice Bradley',
    designation: 'Backend Developer',
  },
  {
    id: 2,
    photoURL: testimonial2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.',
    name: 'Alice Bradley',
    designation: 'Backend Developer',
  },
  {
    id: 3,
    photoURL: testimonial3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.',
    name: 'Alice Bradley',
    designation: 'Backend Developer',
  },
  {
    id: 4,
    photoURL: testimonial4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.',
    name: 'Alice Bradley',
    designation: 'Backend Developer',
  },
  {
    id: 5,
    photoURL: testimonial5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.',
    name: 'Alice Bradley',
    designation: 'Backend Developer',
  },
  {
    id: 6,
    photoURL: testimonial6,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et placerat metus. Morbi aliquet felis sit amet erat finibus, ac condimentum ligula ornare.',
    name: 'Alice Bradley',
    designation: 'Backend Developer',
  },
];

const TestimonialList = () => {
  return (
    <section className='py-20 md:pt-16 md:pb-[75px]'>
      <Wrapper>
        <div className='mb-12'>
          <span className='inline-block text-[#20B15A] text:md md:text-xl font-medium mb-[15px] uppercase'>
            Testimonial List
          </span>
          <h3 className='text-black text-lg lg:text-3xl font-semibold'>
            Better Agency/SEO Solution At <br className='hidden md:block' />
            Your Fingertips
          </h3>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials?.map((testimonial) => (
            <TestimonialCard key={testimonial?.id} testimonial={testimonial} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default TestimonialList;
