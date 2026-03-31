'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from './index';

export default function HeaderWrapper() {
  const pathname = usePathname();

  const [role, setRole] = useState<'ADMIN' | 'MASTER'>('MASTER');

  useEffect(() => {
    const savedRole = localStorage.getItem('user-role') as 'ADMIN' | 'MASTER';
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedRole) setRole(savedRole);
  }, []);

  const hideHeaderPaths = [
    '/signin',
    '/signup',
    '/submissions',
    '/formCreate'
  ];

  const shouldHideHeader = hideHeaderPaths.some(path => pathname.startsWith(path));

  if (shouldHideHeader) return null;

  return <Header role={role} />;
}