import clsx from 'clsx';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

type TNavItem = {
  title: string;
  href: string;
  icon: ReactNode;
  isPage?: boolean;
};

type TAsideProps = {
  navItems: TNavItem[];
};

export const Aside: FC<TAsideProps> = ({ navItems }) => {
  return (
    <aside className='md:fixed md:top-[70px] md:left-0 md:w-[240px] md:h-[calc(100vh_-_70px)] md:border-r md:border-gray-400 bg-white'>
      <div className='p-4'>
        <ul className='flex flex-wrap gap-4 md:gap-0.5'>
          {navItems.map((item) => (
            <li
              key={item.title}
              className='w-[calc(50%_-_8px)] relative md:w-full'
            >
              {item.isPage && (
                <span className='absolute -left-[6px] top-1/2 -translate-x-full -translate-y-1/2 w-1 h-[46px] bg-accent-light rounded-sm'></span>
              )}
              <Link
                href={item.href}
                className={clsx(
                  'flex items-center gap-2 w-full h-14 px-4 rounded-lg hover:bg-gray-100',
                  { ['bg-gray-200']: item.isPage },
                )}
              >
                <span className='w-5'>{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
