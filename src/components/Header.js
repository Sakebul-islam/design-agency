'use client';
import Wrapper from '@/components/Wrapper';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CiMenuFries, CiMenuBurger } from 'react-icons/ci';
import { useState } from 'react';

const Header = ({ classes }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={classes}>
      <div className='pt-[15px]'>
        <Wrapper>
          <nav className='flex justify-between items-center md:py-4 relative'>
            <div className='logo'>
              <Link
                href='/'
                className='inline-block text-xl font-bold p-[10px]'
              >
                Design<span className='text-logo'>AGENCY</span>
              </Link>
            </div>
            <menu
              className={`${
                isOpen ? 'p-4 md:p-10 h-screen' : 'p-0 md:p-0 h-0'
              } duration-200 absolute lg:static top-[48px] md:top-[80px] left-0 w-full lg:w-auto lg:p-0 lg:h-auto lg:block bg-white lg:bg-transparent border-x-4 md:border-x-8 lg:border-x-0 border-gray-300`}
            >
              <ul
                className={`${
                  isOpen ? 'flex' : 'hidden'
                } w-full md:flex flex-col lg:flex-row justify-between items-center gap-1 lg:gap-[30px]`}
              >
                <li
                  className={`${
                    isOpen ? 'block' : 'hidden'
                  } lg:block w-full lg:w-auto`}
                >
                  <Link
                    href='/'
                    className={`${
                      isOpen ? 'block w-full' : ''
                    } md:inline-block p-[10px] font-medium duration-200 hover:text-[#20b15a]`}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className={`${
                    isOpen ? 'block' : 'hidden'
                  } lg:block w-full lg:w-auto`}
                >
                  <Link
                    href='/team'
                    className={`${
                      isOpen ? 'block w-full' : ''
                    } md:inline-block p-[10px] font-medium duration-200 hover:text-[#20b15a]`}
                  >
                    Team
                  </Link>
                </li>
                <li
                  className={`${
                    isOpen ? 'block' : 'hidden'
                  } lg:block w-full lg:w-auto`}
                >
                  <Link
                    href='/'
                    className={`${
                      isOpen ? 'block w-full' : ''
                    } md:inline-block p-[10px] font-medium duration-200 hover:text-[#20b15a]`}
                  >
                    Service
                  </Link>
                </li>
                <li
                  className={`${
                    isOpen ? 'block' : 'hidden'
                  } lg:block w-full lg:w-auto`}
                >
                  <Link
                    href='/'
                    className={`${
                      isOpen ? 'block w-full' : ''
                    } md:inline-block p-[10px] font-medium duration-200 hover:text-[#20b15a]`}
                  >
                    Projects
                  </Link>
                </li>
                <li
                  className={`${
                    isOpen ? 'block' : 'hidden'
                  } lg:block w-full lg:w-auto`}
                >
                  <Link
                    href='/testimonials'
                    className={`${
                      isOpen ? 'block w-full' : ''
                    } md:inline-block p-[10px] font-medium duration-200 hover:text-[#20b15a]`}
                  >
                    Testimonials
                  </Link>
                </li>
                <li
                  className={`${
                    isOpen ? 'block' : 'hidden'
                  } lg:block w-full lg:w-auto`}
                >
                  <Button variant='customOutline' className='w-full lg:w-auto'>
                    Login
                  </Button>
                </li>
                <li
                  className={`${
                    isOpen ? 'block' : 'hidden'
                  } lg:block w-full lg:w-auto`}
                >
                  <Button variant='default' className='w-full lg:w-auto'>
                    Register
                  </Button>
                </li>
              </ul>
            </menu>
            <div
              className='w-10 h-10 bg-[#94c3a5] rounded-sm text-black lg:hidden flex justify-center items-center transition-all duration-300 ease-in-out cursor-pointer'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <CiMenuFries size={28} /> : <CiMenuBurger size={28} />}
            </div>
          </nav>
        </Wrapper>
      </div>
    </header>
  );
};

export default Header;
