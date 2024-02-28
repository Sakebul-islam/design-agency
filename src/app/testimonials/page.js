import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import Subscribe from '@/components/Subscribe';
import TestimonialList from '@/components/TestimonialList';

const Team = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-gray-100 to-[#F8F9FC]'>
        <Header />
        <PageHeader header='Testimonial List' />
      </div>
      <main className=''>
        <TestimonialList />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default Team;
