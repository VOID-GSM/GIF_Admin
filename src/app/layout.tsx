import type { Metadata } from 'next';
import Providers from './providers';
import './globals.css';
import HeaderWrapper from '@/widget/header/ui/headerWrapper';

export const metadata: Metadata = {
  title: 'GIF',
  description:
    'GIF는 광주소프트웨어마이스터고등학교 아이디어페스티벌 관리 서비스로 GIF를 통해 효율적으로 프로젝트를 진행할 수 있습니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <HeaderWrapper />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
