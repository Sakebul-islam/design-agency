import Wrapper from '@/components/Wrapper';
import Image from 'next/image';

import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import WorkList from '@/components/WorkList';
import StatList from '@/components/StatList';
import FeaturedProject from '@/components/FeaturedProject';
import Subscribe from '@/components/Subscribe';

export default function Home() {
  return (
    <main className=''>
      <section className='bg-gradient-to-b from-green-200 to-green-200'>
        <Hero />
        <Partners />
      </section>
      <WorkList />
      <StatList />
      <FeaturedProject />
      <Subscribe />
    </main>
  );
}
