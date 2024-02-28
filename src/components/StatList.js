import React from 'react';
import Wrapper from '@/components/Wrapper';
import StatListCard from '@/components/StatListCard';
import statList1 from '../../public/images/statList/statList-1.svg';
import statList2 from '../../public/images/statList/statList-2.svg';
import statList3 from '../../public/images/statList/statList-3.svg';
import statList4 from '../../public/images/statList/statList-4.svg';

const statLists = [
  {
    id: 1,
    icon: statList1,
    statNumber: 240452,
    paragraph: 'Followers',
  },
  {
    id: 2,
    icon: statList2,
    statNumber: 6300,
    paragraph: 'Solved Problems',
  },
  {
    id: 3,
    icon: statList3,
    statNumber: 25000,
    paragraph: 'Happy Customers',
  },
  {
    id: 4,
    icon: statList4,
    statNumber: 360452,
    paragraph: 'Projects',
  },
];

const StatList = () => {
  return (
    <section className='py-16'>
      <Wrapper>
        <div className='grid gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {statLists.map((stat) => (
            <StatListCard key={stat.id} stat={stat} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default StatList;
