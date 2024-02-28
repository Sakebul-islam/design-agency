import Wrapper from '@/components/Wrapper';
import Link from 'next/link';

const PageHeader = ({ classes, header }) => {
  return (
    <div className={`pt-24 pb-20 ${classes}`}>
      <Wrapper>
        <div className=''>
          <h3 className='text-gray-900 text-[30px] sm:text-[40px] font-semibold leading-[51px] inline-block mb-5 capitalize'>
            {header}
          </h3>
          <nav aria-label='Default breadcrumb example' class=''>
            <ol class='flex items-center'>
              <li class='group flex items-center'>
                <Link
                  class='flex items-center text-sm font-medium text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  href='/'
                >
                  Home
                </Link>
              </li>
              <li class='group flex items-center'>
                <svg
                  stroke='currentColor'
                  fill='none'
                  stroke-width='2'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  class='mx-1 h-4 w-4 text-gray-900 group-first:hidden md:mx-[15px]'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M9 5l7 7-7 7'
                  ></path>
                </svg>
                <span class='flex items-center text-sm font-medium text-[#20B15A] dark:text-[#20B15A] capitalize'>
                  {header}
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </Wrapper>
    </div>
  );
};

export default PageHeader;
