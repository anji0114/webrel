import { NextPage } from 'next';
import { NonLoginHeader } from '@/components/layouts/NonLoginHeader';

const Home: NextPage = async () => {
  return (
    <>
      <NonLoginHeader bgTransparent />
      <div className=' max-w-[800px] mx-auto py-10'></div>
    </>
  );
};

export default Home;
