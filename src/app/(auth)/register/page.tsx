import { Metadata } from 'next';
import { AuthContent } from '@/features/auth/components/AuthContent';

export const metadata: Metadata = {
  title: '新規会員登録 | Webrel',
  description: 'URLベースでタスク・情報を管理する',
};

const page = () => {
  return <AuthContent title='Webrelに登録する' type='register' />;
};

export default page;
