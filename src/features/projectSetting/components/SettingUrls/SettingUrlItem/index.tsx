'use client';

import { FC, useEffect, useState } from 'react';
import { Button, Input } from '@/components/elements';

type TSettingUrlItemProps = {
  url: string;
  onSave: (value: string) => void;
  onDelete: () => void;
  hiddenDelete: boolean;
};

export const SettingUrlItem: FC<TSettingUrlItemProps> = ({
  url,
  onSave,
  onDelete,
  hiddenDelete,
}) => {
  const [newUrl, setNewUrl] = useState(url);

  useEffect(() => {
    setNewUrl(url);
  }, [url]);

  return (
    <div className='flex items-center gap-4'>
      <div className='flex-1'>
        <Input
          className='w-full bg-white'
          size='sm'
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
        />
      </div>
      <div className='flex gap-2'>
        <Button
          onClick={() => {
            onSave(newUrl);
          }}
          size='sm'
          color='blue'
        >
          保存する
        </Button>
        {!hiddenDelete && (
          <Button onClick={onDelete} size='sm' color='grayRed'>
            削除する
          </Button>
        )}
      </div>
    </div>
  );
};
