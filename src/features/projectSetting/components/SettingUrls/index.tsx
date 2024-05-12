'use client';

import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { FC, useState } from 'react';
import { createProjectUrl } from '../../services/createProjectUrl';
import { SettingUrlItem } from './SettingUrlItem';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { TProjectUrl } from '@/types/project';

type TSettingUrlsProps = {
  projectId: string;
  urls: TProjectUrl[];
};

export const SettingUrls: FC<TSettingUrlsProps> = ({ projectId, urls }) => {
  const [addUrls, setAddUrls] = useState<string[] | undefined>();

  // old url
  const onEditUrl = (id: string, value: string) => {
    console.log(`${id}, ${value} edit`);
  };

  const onDeleteUrl = (id: string) => {
    console.log(`${id} delete`);
  };

  // new url function
  const onSaveUrl = (value: string) => {
    createProjectUrl(projectId, value);
  };

  const onDeleteNewUrl = (index: number) => {
    setAddUrls((prevUrls) =>
      prevUrls!.filter((_, urlIdex) => urlIdex !== index),
    );
  };

  return (
    <Card>
      <h2 className='text-xl leading-tight font-bold'>URL編集</h2>

      <div className='mt-6 space-y-2'>
        {urls.map((url) => (
          <SettingUrlItem
            key={url.id}
            url={url.url}
            onSave={(value) => {
              onEditUrl(url.id, value);
            }}
            onDelete={() => {
              onDeleteUrl(url.id);
            }}
            hiddenDelete={false}
          />
        ))}
        {addUrls?.map((_, index) => (
          <SettingUrlItem
            key={index}
            url=''
            onSave={(value) => {
              onSaveUrl(value);
            }}
            onDelete={() => {
              onDeleteNewUrl(index);
            }}
            hiddenDelete={false}
          />
        ))}
      </div>
      <div className='mt-4 text-center'>
        <Button
          onClick={() => {
            setAddUrls((prev) => (prev ? [...prev, ''] : ['']));
          }}
          fullWidth
          color='gray'
          size='md'
          icon={<PlusCircleIcon />}
        >
          URLを追加する
        </Button>
      </div>
    </Card>
  );
};
