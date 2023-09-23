'use client';

import { signOut } from 'next-auth/react';
import React from 'react';
import { Button } from '@/components/elements/Button';

const page = () => {
  return (
    <div>
      <Button
        size='md'
        color='dark'
        onClick={() => {
          signOut();
        }}
      >
        ログアウト
      </Button>
    </div>
  );
};

export default page;
