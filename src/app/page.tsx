import { NextPage } from 'next';
import { Button } from '@/components/elements/Button';
import { getAuthSession } from '@/libs/auth';

const Home: NextPage = async () => {
  const session = await getAuthSession();

  return (
    <div className=' max-w-[800px] mx-auto py-10'>
      {session?.user.id ? (
        'ログイン中'
      ) : (
        <Button href='/login' size='md' color='dark'>
          ログインページ
        </Button>
      )}
    </div>
  );
};

export default Home;
