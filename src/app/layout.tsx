import '@/styles/globals.css';
import type { Metadata } from 'next';
import { QueryProvider } from '@/app/components/QueryProvider';
import { ToastProvider } from '@/states/Toast';

export const metadata: Metadata = {
  title: 'webrel | Web制作・開発に特化したプロジェクト管理ルール',
  description: 'URLベースでタスク・情報を管理する',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja' suppressHydrationWarning={true}>
      <body>
        <QueryProvider>
          <ToastProvider>{children}</ToastProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
