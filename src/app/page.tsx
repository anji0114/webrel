import { NextPage } from 'next';
import { Button } from '@/components/elements/Button';

const Home: NextPage = () => {
  return (
    <div className=' max-w-[800px] mx-auto py-10'>
      <Button href='/login' size='md' color='dark'>
        ログインページ
      </Button>
    </div>
  );
};

export default Home;
