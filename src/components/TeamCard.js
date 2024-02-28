import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const TeamCard = ({ team }) => {
  return (
    <div className='shadow-4xl rounded-[20px] group'>
      <figure className='relative overflow-hidden rounded-t-[20px]'>
        <Image
          src={team?.photoURL?.src}
          width={team?.photoURL?.width}
          height={team?.photoURL?.height}
          alt='team-image'
          layout='responsive'
          className='group-hover:scale-110 cursor-pointer duration-300 rounded-t-[20px]'
        />

        <div className='duration-200 absolute -bottom-12 left-2/4 -translate-x-2/4 group-hover:bottom-[30px] group-hover:left-2/4 bg-white flex flex-row text-base text-gray-800 rounded-3xl py-3'>
          <Link
            href={team?.social[0]?.facebook}
            target='_blank'
            className='px-4 border-r border-gray-200 duration-200 hover:text-[#20B15A]'
          >
            <FaFacebookF />
          </Link>
          <Link
            href={team?.social[1]?.twitter}
            target='_blank'
            className='px-4 border-r border-gray-200 duration-200 hover:text-[#20B15A]'
          >
            <FaTwitter />
          </Link>
          <Link
            href={team?.social[2]?.instagram}
            target='_blank'
            className='px-4 duration-200 hover:text-[#20B15A]'
          >
            <FaInstagram />
          </Link>
        </div>
      </figure>
      <div className='pt-8 pb-12'>
        <h3 className='text-gray-900 text-xl lg:text-2xl xl:text-3xl font-semibold leading-[26px] text-center'>
          {team?.name}
        </h3>
      </div>
    </div>
  );
};

export default TeamCard;
