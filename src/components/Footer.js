import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='bg-black text-white pt-[57px] pb-[29px]'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 mb-[59px]'>
          <div className=''>
            <Link href='/' className='p-[19.6px] text-[39.2px] font-bold'>
              WEB LOGO
            </Link>
            <p className='md:max-w-[280px] ml-[10px] text-sm mb-5'>
              Some footer text about the Agency. Just a little description to
              help people understand you better
            </p>
            <div className='flex gap-[15.31px]'>
              <span className='w-[40px] h-[40px] bg-[#20B15A] rounded-full grid place-content-center overflow-hidden duration-200 hover:bg-gray-500 cursor-pointer group'>
                <FaFacebookF className='group-hover:scale-150 duration-200' />
              </span>
              <span className='w-[40px] h-[40px] bg-[#20B15A] rounded-full grid place-content-center overflow-hidden duration-200 hover:bg-gray-500 cursor-pointer group'>
                <FaTwitter className='group-hover:scale-150 duration-200' />
              </span>
              <span className='w-[40px] h-[40px] bg-[#20B15A] rounded-full grid place-content-center overflow-hidden duration-200 hover:bg-gray-500 cursor-pointer group'>
                <FaLinkedinIn className='group-hover:scale-150 duration-200' />
              </span>
              <span className='w-[40px] h-[40px] bg-[#20B15A] rounded-full grid place-content-center overflow-hidden duration-200 hover:bg-gray-500 cursor-pointer group'>
                <AiFillInstagram className='group-hover:scale-150 duration-200' />
              </span>
            </div>
          </div>
          <div className='pt-[38px]'>
            <h5 className='text-xl font-semibold mb-4'>Quick Links</h5>
            <ul className='space-y-[25px]'>
              <li>
                <Link
                  href='/'
                  className='text-sm font-medium duration-300 hover:underline'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/'
                  className='text-sm font-medium duration-300 hover:underline'
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href='/'
                  className='text-sm font-medium duration-300 hover:underline'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/'
                  className='text-sm font-medium duration-300 hover:underline'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className='pt-[38px]'>
            <h5 className='text-xl font-semibold mb-4'>Address</h5>
            <p className='md:max-w-[260px] text-sm mb-5'>
              Some footer text about the Agency. Just a little description to
              help people understand you better
            </p>
          </div>
        </div>
        <p className='text-xs font-medium'>Copyright Design Agency 2024</p>
      </div>
    </div>
  );
};

export default Footer;
