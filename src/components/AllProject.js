import React from 'react';
import Wrapper from '@/components/Wrapper';

import project1 from '../../public/images/allProject/all-project-1.png';
import project2 from '../../public/images/allProject/all-project-2.png';
import project3 from '../../public/images/allProject/all-project-3.png';
import project4 from '../../public/images/allProject/all-project-4.png';
import project5 from '../../public/images/allProject/all-project-5.png';
import project6 from '../../public/images/allProject/all-project-6.png';
import ProjectCard from './ProjectCard';

const allProjects = [
  {
    id: 1,
    photoURL: project1,
    title: 'Lorem ipsum dolor sit consectutar',
  },
  {
    id: 2,
    photoURL: project2,
    title: 'Lorem ipsum dolor sit consectutar',
  },
  {
    id: 3,
    photoURL: project3,
    title: 'Lorem ipsum dolor sit consectutar',
  },
  {
    id: 4,
    photoURL: project4,
    title: 'Lorem ipsum dolor sit consectutar',
  },
  {
    id: 5,
    photoURL: project5,
    title: 'Lorem ipsum dolor sit consectutar',
  },
  {
    id: 6,
    photoURL: project6,
    title: 'Lorem ipsum dolor sit consectutar',
  },
];

const AllProject = () => {
  return (
    <section className='py-12 md:py-16'>
      <Wrapper>
        <div className='mb-[50px]'>
          <span className='inline-block text-[#20B15A] text:md md:text-xl font-medium mb-[15px] uppercase'>
            All Project
          </span>
          <h3 className='text-black text-lg lg:text-3xl font-semibold'>
            Better Agency/SEO Solution At
            <br className='hidden md:block' />
            Your Fingertips
          </h3>
        </div>
        <div className='grid md:grid-cols-2 gap-[30px]'>
          {allProjects?.map((project) => (
            <ProjectCard key={project?.id} project={project} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default AllProject;
