import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className='group p-6 md:pt-10 md:pb-8 md:px-10 shadow-5xl rounded-[20px]'>
      <figure className='mb-7 overflow-hidden rounded-[20px]'>
        <Image
          src={project?.photoURL?.src}
          width={project?.photoURL?.width}
          height={project?.photoURL?.height}
          alt='hero-image-1'
          layout='responsive'
          className={`group-hover:scale-105 duration-300 rounded-[20px] cursor-pointer`}
        />
      </figure>
      <div className=''>
        <Link href='#'>
          <h4 className='text-black text-xl md:text-[26px] font-semibold uppercase'>
            {project?.title}
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
