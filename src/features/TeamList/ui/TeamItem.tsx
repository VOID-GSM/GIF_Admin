'use client';

import { useRouter } from 'next/navigation';
import CheckButton from '@/shared/ui/button/CheckButton';

interface TeamItemProps {
  id: number;
  title: string;
  isSubmitted: boolean;
}

export default function TeamItem({ id, title, isSubmitted }: TeamItemProps) {
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
