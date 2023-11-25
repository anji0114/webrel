import clsx from 'clsx';
import React, { FC } from 'react';

type TErrorAreaProps = {
  text?: string;
  className?: string;
};

export const ErrorArea: FC<TErrorAreaProps> = ({
  text = 'エラーが発生しました。時間を置いてから再度お試しください。',
  className,
}) => {
  return (
    <p
      className={clsx(
        'text-center text-sm text-danger border border-dashed border-danger bg-white py-5 px-4 rounded-md',
        className,
      )}
    >
      {text}
    </p>
  );
};
