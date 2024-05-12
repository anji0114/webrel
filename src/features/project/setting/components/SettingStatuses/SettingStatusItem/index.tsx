import { Bars3Icon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import React, { FC } from 'react';
import { StatusTag, TStatusColors } from '@/components/common/StatusTag';

type TSettingStatusItemProps = {
  statusId: string;
  statusName: string;
  statusColor: TStatusColors;
};

export const SettingStatusItem: FC<TSettingStatusItemProps> = ({
  statusName,
  statusColor,
  statusId,
}) => {
  return (
    <div className='border-b border-gray-400 py-2 pl-2 pr-5 flex items-center gap-10'>
      <button className='w-5 text-gray-700 cursor-grab'>
        <Bars3Icon />
      </button>
      <StatusTag statusName={statusName} statusColor={statusColor} />
      {statusId}
      <button className='ml-auto px-1 py-0.5 rounded hover:bg-gray-200'>
        <EllipsisHorizontalIcon className='w-5 h-5' />
      </button>
    </div>
  );
};
