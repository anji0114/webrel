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
      title='Webrelにログインする'
      type='login'
      buttons={[
        <AuthButton key='github' onClick={authGithub} provider='github'>
          Githubでログインする
        </AuthButton>,
        <AuthButton key='google' onClick={authGoogle} provider='google'>
          Googleでログインする
        </AuthButton>,
      ]}
    />
  );
};

export default page;
