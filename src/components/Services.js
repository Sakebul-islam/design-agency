import React from 'react';
import Wrapper from '@/components/Wrapper';

import service1 from '../../public/images/services/service-1.png';
import service2 from '../../public/images/services/service-2.png';
import service3 from '../../public/images/services/service-3.png';
import service4 from '../../public/images/services/service-4.png';
import service5 from '../../public/images/services/service-5.png';
import service6 from '../../public/images/services/service-6.png';
import service7 from '../../public/images/services/service-7.png';
import service8 from '../../public/images/services/service-8.png';
import service9 from '../../public/images/services/service-9.png';
import service10 from '../../public/images/services/service-10.png';
import service11 from '../../public/images/services/service-11.png';
import service12 from '../../public/images/services/service-12.png';
import service13 from '../../public/images/services/service-13.png';
import service14 from '../../public/images/services/service-14.png';
import service15 from '../../public/images/services/service-15.png';
import service16 from '../../public/images/services/service-16.png';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    title: 'Build & Launch without problems',
    description:
      'Increase your team’s productivity and save time with a bot that answers and fields customer inquiries',
    photoURL: [service1, service2, service3, service4],
  },
  {
    id: 2,
    title: 'Build & Launch without problems',
    description:
      'Increase your team’s productivity and save time with a bot that answers and fields customer inquiries',
    photoURL: [service5, service6, service7, service8],
  },
  {
    id: 3,
    title: 'Build & Launch without problems',
    description:
      'Increase your team’s productivity and save time with a bot that answers and fields customer inquiries',
    photoURL: [service9, service10, service11, service12],
  },
  {
    id: 4,
    title: 'Build & Launch without problems',
    description:
      'Increase your team’s productivity and save time with a bot that answers and fields customer inquiries',
    photoURL: [service13, service14, service15, service16],
  },
];

const Services = () => {
  return (
    <div className='bg-[#F0FDF4] pt-[61px] pb-20'>
      <Wrapper>
        <div className='mb-[72px]'>
          <span className='inline-block text-[#20B15A] text:md md:text-xl font-medium mb-[15px] uppercase'>
            Our All Services
          </span>
          <h3 className='text-black text-lg lg:text-3xl font-semibold'>
            We Provide BestWeb design <br className='hidden md:block' />
            services
          </h3>
        </div>
        <div className='grid lg:grid-cols-2 gap-8'>
          {services?.map((service) => (
            <ServiceCard key={service?.id} service={service} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Services;
