import Image from 'next/image';

export const Mv = () => {
  return (
    <main className='py-24 px-6 min-h-screen flex items-center bg-gradient-to-b from-white to-[#EEEEFF] md:px-12'>
      <div className='relative w-full max-w-[1080px] mx-auto'>
        <div className='relative z-10'>
          <h2 className='text-[28px] text-gray-800 font-bold md:text-[32px]'>
            URL管理ツール Webrel
          </h2>
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
  );
};
