'use client';

import { AuthButton } from '@/feature/auth/components/AuthButton';
import { AuthContent } from '@/feature/auth/components/AuthContent';

const page = () => {
  const authGithub = () => {
    console.log('github');
  };

  const authGoogle = () => {
    console.log('google');
  };

  return (
    <AuthContent
      title='Webrelに登録する'
      type='register'
      buttons={[
        <AuthButton key='github' onClick={authGithub} provider='github'>
          Githubで登録する
        </AuthButton>,
        <AuthButton key='google' onClick={authGoogle} provider='google'>
          Googleで登録する
        </AuthButton>,
      ]}
    />
  );
};

export default page;
