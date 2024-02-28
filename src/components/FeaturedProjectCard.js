import Image from 'next/image';
import Link from 'next/link';

const FeaturedProjectCard = ({ image, title, info }) => {
  return (
    <div className='group'>
      <figure className='mb-[15px] overflow-hidden  rounded-[20px]'>
        <Image
          src={image?.src}
          width={image?.width}
          height={image?.height}
          alt='hero-image-1'
          layout='responsive'
          //   style={{ width: `${image?.width}px`, height: `${image?.height}px` }}
          className={`group-hover:scale-105 duration-300 rounded-[20px]`}
        />
      </figure>
      <div className=''>
        <p className='max-w-[300px] text-[#2E3E5C] text-sm mb-[10px] leading-[24px]'>
          {info}
        </p>
        <Link href='#'>
          <h4 className='text-[#1E1F4B] leading-7 text-xl md:text-2xl font-semibold'>
            {title}
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
