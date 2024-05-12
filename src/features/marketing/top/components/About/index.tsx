import Link from 'next/link';
import React from 'react';

export const About = () => {
  return (
    <div className='py-10 text-center'>
      <p className='text-xl'>
        <Link
          href='https://github.com/anji0114/webrel-supabase/'
          target='_blank'
          className=' underline text-gray-700'
        >
          Webrelとは
        </Link>
      </p>
    </div>
  );
};
