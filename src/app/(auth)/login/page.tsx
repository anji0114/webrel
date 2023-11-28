import { Metadata } from 'next';
import { AuthContent } from '@/features/auth/components/AuthContent';

export const metadata: Metadata = {
  title: 'ログイン | Webrel',
  description: 'URLベースでタスク・情報を管理する',
};

const page = async () => {
  return <AuthContent title='Webrelにログインする' type='login' />;
};

export default page;
