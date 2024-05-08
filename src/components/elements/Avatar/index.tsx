import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type TAvatarProps = {
  src: string | null | undefined;
  alt?: string;
  size?: number;
  className?: string;
};

export const Avatar: FC<TAvatarProps> = ({
  src,
  alt = '',
  size = 40,
  className,
}) => {
  return (
    <span
      className={twMerge(clsx(`inline-block rounded-full `, className))}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <Image
        className='rounded-full w-full h-full object-cover'
        src={src || '/images/icon/user.svg'}
        alt={alt}
        width={size}
        height={size}
      />
    </span>
  );
};
