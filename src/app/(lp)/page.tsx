import { CursorArrowRaysIcon } from '@heroicons/react/24/outline';
import { NextPage } from 'next';
import Image from 'next/image';
import { NonLoginHeader } from '@/app/components/NonLoginHeader';
import { Button } from '@/components/elements';

const Home: NextPage = async () => {
  return (
    <>
      <NonLoginHeader bgTransparent />
      <main className='py-24 px-6 min-h-screen flex items-center bg-gradient-to-b from-white to-[#EEEEFF] md:px-12'>
        <div className='relative w-full max-w-[1080px] mx-auto'>
          <div className='relative z-10'>
            <h2 className='text-[28px] text-gray-800 font-bold md:text-[32px]'>
              There’s a really good catchphrase here.
              <br />
              Yes, the catchphrase is right here.
            </h2>
            <div className='mt-10 flex gap-4'>
              <Button
                href='https://github.com/anji0114/webrel-supabase'
                target='_blank'
                color='gray'
                size='sm'
                icon={
                  <Image
                    src='/images/icon/github-black.svg'
                    width={16}
                    height={16}
                    alt=''
                  />
                }
              >
                GitHub
              </Button>
              <Button
                href='/register'
                color='dark'
                size='sm'
                icon={<CursorArrowRaysIcon />}
              >
                新規登録
              </Button>
            </div>
          </div>
          <Image
            src='/images/logo/logo-icon.svg'
            width={400}
            height={400}
            alt=''
            className='hidden absolute right-0 top-1/2 -translate-y-1/2 opacity-50 md:block'
          />
        </div>
      </main>
    </>
  );
};

export default Home;
