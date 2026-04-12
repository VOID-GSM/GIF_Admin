'use client';
  
import { usePathname } from 'next/navigation';
import Header from './index';

interface Props {
  serverRole: 'ADMIN' | 'MASTER';
}

export default function HeaderWrapper({ serverRole }: Props) {
  const pathname = usePathname();

  const hideHeaderPaths = ['/signin', '/signup', '/submissions', '/formCreate'];
  const shouldHideHeader = hideHeaderPaths.some((path) => pathname.startsWith(path));

  if (shouldHideHeader) return null;

  return <Header role={serverRole} />;
}
