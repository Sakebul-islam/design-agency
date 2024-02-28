import Wrapper from '@/components/Wrapper';
import WorkListCard from './WorkListCard';
import workImg1 from '../../public/images/worklist/worklist-1.svg';
import workImg2 from '../../public/images/worklist/worklist-2.svg';
import workImg3 from '../../public/images/worklist/worklist-3.svg';

const workLists = [
  {
    id: 1,
    icon: workImg1,
    title: 'Grow Your Business',
    paragraph: 'We help identify the best ways to improve your business',
  },
  {
    id: 2,
    icon: workImg2,
    title: 'Improve brand loyalty',
    paragraph: 'We help identify the best ways to improve your business',
  },
  {
    id: 3,
    icon: workImg3,
    title: 'Improve Business Model',
    paragraph: 'We help identify the best ways to improve your business',
  },
];

const WorkList = () => {
  return (
    <section className='py-[65.5px]'>
      <Wrapper>
        <div className='mb-[40px]'>
          <span className='inline-block text-[#20B15A] text:md md:text-xl font-medium mb-[15px] uppercase'>
            Work List
          </span>
          <h3 className='text-black text-lg lg:text-3xl font-semibold'>
            We provide the Perfect Solution <br className='hidden md:block' />
            to your business growth
          </h3>
        </div>
        <div className='grid gap-[45px] md:grid-cols-2 lg:grid-cols-3'>
          {workLists.map((workList) => (
            <WorkListCard key={workList.id} workList={workList} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default WorkList;
