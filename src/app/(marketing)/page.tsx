import { NextPage } from 'next';
import { redirect } from 'next/navigation';
import { NonLoginHeader } from '@/app/components/Header/NonLoginHeader';
import { About } from '@/features/marketing/top/components/About';
import { Mv } from '@/features/marketing/top/components/Mv';
import { getAuthSession } from '@/libs/auth';

const Home: NextPage = async () => {
  const session = await getAuthSession();
  if (session?.user.id) {
    redirect('/dashboard');
  }

  return (
    <>
      <NonLoginHeader bgTransparent />
      <div>
        <Mv />
        <About />
      </div>
    </>
  );
};

export default Home;
