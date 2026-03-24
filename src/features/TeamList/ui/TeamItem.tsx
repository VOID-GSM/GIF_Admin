'use client';

import { useRouter } from 'next/navigation';
import CheckButton from '@/src/shared/ui/button/CheckButton';
import type { TeamListProps } from '../model/temp';

export default function TeamItem({ id, title, isSubmitted }: TeamListProps) {
  const router = useRouter();

  return (
    <div className="flex w-[480px] h-10 justify-between items-center text-xl font-medium">
      {title}
      <CheckButton
        isSubmitted={isSubmitted}
        onClick={isSubmitted ? () => router.push(`/submissions/list/${id}`) : undefined}
      />
    </div>
  );
}
