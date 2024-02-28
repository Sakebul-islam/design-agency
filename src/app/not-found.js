import Wrapper from '@/components/Wrapper';
import Link from 'next/link';
import { TbError404 } from 'react-icons/tb';
import { IoChevronBackOutline } from 'react-icons/io5';

const NotFound = () => {
  return (
    <div className='py-28'>
      <Wrapper>
        <div className='text-center flex flex-col justify-center items-center'>
          <TbError404
            className='text-center inline-block'
            color='#e91e63'
            size={250}
          />
          <Link
            href='/'
            className='text-xl font-semibold inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[#20B15A] bg-[#20B15A] text-white hover:bg-transparent hover:text-black h-10 px-4 py-2'
          >
            <IoChevronBackOutline className='mr-1' />
            <span>Go Home</span>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default NotFound;
