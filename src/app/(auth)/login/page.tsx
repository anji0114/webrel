import { Metadata } from 'next';
import { AuthContent } from '@/features/auth/components/AuthContent';

export const metadata: Metadata = {
  title: 'ログイン | webrel',
  description: 'URLベースでタスク・情報を管理する',
};

const page = () => {
  return <AuthContent title='Webrelにログインする' type='login' />;
};

export default page;
