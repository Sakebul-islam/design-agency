import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import Services from '@/components/Services';
import Subscribe from '@/components/Subscribe';

const Service = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-gray-100 to-[#F8F9FC]'>
        <Header />
        <PageHeader header='Our Services' />
      </div>
      <main className=''>
        <Services />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default Service;
