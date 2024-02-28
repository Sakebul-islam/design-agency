import AllServices from '@/components/Teams';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import Subscribe from '@/components/Subscribe';
import AllProject from '@/components/AllProject';

const Project = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-gray-100 to-[#F8F9FC]'>
        <Header />
        <PageHeader header='all project' />
      </div>
      <main className=''>
        <AllProject />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default Project;
