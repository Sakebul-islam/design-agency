import React from 'react';
import Wrapper from '@/components/Wrapper';
import TeamCard from '@/components/TeamCard';

import team1 from '../../public/images/teams/team-1.png';
import team2 from '../../public/images/teams/team-2.png';
import team3 from '../../public/images/teams/team-3.png';

const teams = [
  {
    id: 1,
    photoURL: team1,
    name: 'Devon Lane',
    social: [
      { facebook: 'https://facebook.com/' },
      { twitter: 'https://twitter.com/' },
      { instagram: 'https://instagram.com/' },
    ],
  },
  {
    id: 2,
    photoURL: team2,
    name: 'Danny Bailey',
    social: [
      { facebook: 'https://facebook.com/' },
      { twitter: 'https://twitter.com/' },
      { instagram: 'https://instagram.com/' },
    ],
  },
  {
    id: 3,
    photoURL: team3,
    name: 'Alex Lov',
    social: [
      { facebook: 'https://facebook.com/' },
      { twitter: 'https://twitter.com/' },
      { instagram: 'https://instagram.com/' },
    ],
  },
];

const Teams = () => {
  return (
    <section className='py-12 md:py-16'>
      <Wrapper>
        <div className='mb-[40px]'>
          <span className='inline-block text-[#20B15A] text:md md:text-xl font-medium mb-[15px] uppercase'>
            Our Team Member
          </span>
          <h3 className='text-black text-lg lg:text-3xl font-semibold'>
            Check our awesome team <br className='hidden md:block' />
            members
          </h3>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {teams?.map((team) => (
            <TeamCard key={team?.id} team={team} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Teams;
