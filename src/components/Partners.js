import Image from 'next/image';

import Marquee from 'react-fast-marquee';

const Partners = () => {
  return (
    <div className='pb-[34px]'>
      {/* <div className='bg-white py-[30px] md:py-[45.54px]'> */}
      <Marquee
        pauseOnHover='true'
        className='overflow-hidden bg-white py-[30px] md:py-[45.54px]'
      >
        <Image
          src='/images/partners/google.svg'
          width={88.711}
          height={29.108}
          alt='hero-image-1'
          layout='fixed'
          className='mx-[75px] cursor-pointer duration-200 hover:scale-125'
        />
        <Image
          src='/images/partners/trello.png'
          width={141.937}
          height={29.108}
          alt='hero-image-1'
          layout='fixed'
          className='mx-[75px] cursor-pointer duration-200 hover:scale-125'
        />
        <Image
          src='/images/partners/monday.svg'
          width={156.878}
          height={29.108}
          alt='hero-image-1'
          layout='fixed'
          className='mx-[75px] cursor-pointer duration-200 hover:scale-125'
        />
        <Image
          src='/images/partners/notion.png'
          width={80.114}
          height={29.108}
          alt='hero-image-1'
          layout='fixed'
          className='mx-[75px] cursor-pointer duration-200 hover:scale-125'
        />
        <Image
          src='/images/partners/slack.png'
          width={114.29}
          height={29.108}
          alt='hero-image-1'
          layout='fixed'
          className='mx-[75px] cursor-pointer duration-200 hover:scale-125'
        />
      </Marquee>
      {/* </div> */}
    </div>
  );
};

export default Partners;
