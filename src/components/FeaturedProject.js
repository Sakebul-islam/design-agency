import Wrapper from '@/components/Wrapper';
import FeaturedProjectCard from '@/components/FeaturedProjectCard';

import featuredProject1 from '../../public/images/featuredProject/featuredProject-1.png';
import featuredProject2 from '../../public/images/featuredProject/featuredProject-2.png';
import featuredProject3 from '../../public/images/featuredProject/featuredProject-3.png';
import featuredProject4 from '../../public/images/featuredProject/featuredProject-4.png';
import featuredProject5 from '../../public/images/featuredProject/featuredProject-5.png';

const FeaturedProject = () => {
  return (
    <div className='bg-[#F0FDF4] pt-[61px] pb-20'>
      <Wrapper>
        <div className='mb-[72px]'>
          <span className='inline-block text-[#20B15A] text-xl font-medium mb-[15px]'>
            Featured Project
          </span>
          <h3 className='text-black text-lg lg:text-3xl font-semibold'>
            We provide the Perfect Solution <br className='hidden md:block' />
            to your business growth
          </h3>
        </div>
        <div className='flex flex-col lg:flex-row justify-between gap-8'>
          <div className='flex-1'>
            <FeaturedProjectCard
              image={featuredProject1}
              title={'App Redesign'}
              info={'App Design - June 20, 2022'}
            />
          </div>
          <div className='flex-1 grid md:grid-cols-2 gap-8'>
            <FeaturedProjectCard
              image={featuredProject2}
              title={'App Redesign'}
              info={'App Design - June 20, 2022'}
            />
            <FeaturedProjectCard
              image={featuredProject3}
              title={'App Redesign'}
              info={'App Design - June 20, 2022'}
            />

            <FeaturedProjectCard
              image={featuredProject4}
              title={'App Redesign'}
              info={'App Design - June 20, 2022'}
            />
            <FeaturedProjectCard
              image={featuredProject5}
              title={'App Redesign'}
              info={'App Design - June 20, 2022'}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default FeaturedProject;
