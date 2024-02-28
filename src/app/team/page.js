import AllServices from '@/components/Teams';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import Subscribe from '@/components/Subscribe';
import React from 'react';

const Team = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-gray-100 to-[#F8F9FC]'>
        <Header />
        <PageHeader />
      </div>
      <main className=''>
        <AllServices />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default Team;
