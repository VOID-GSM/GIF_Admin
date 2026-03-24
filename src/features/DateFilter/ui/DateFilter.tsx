'use client';

import { useMemo } from 'react';
import SubmissionCard from '@/shared/ui/card/SubmissionCard';
import { MOCK_SUBMISSION, Grade } from '../model/temp';

interface DateFilterProps {
  selectedGrade: Grade;
}

export default function DateFilter({ selectedGrade }: DateFilterProps) {
  const processed = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return MOCK_SUBMISSION.map((item) => {
      const end = new Date(item.dateEnd);
      end.setHours(0, 0, 0, 0);
      return {
        ...item,
        isExpired: end < today,
        endTime: end.getTime(),
      };
    })
      .filter((item) => item.grade === selectedGrade)
      .sort((a, b) => {
        if (a.isExpired !== b.isExpired) {
          return a.isExpired ? 1 : -1;
        }
        if (!a.isExpired) {
          return a.endTime - b.endTime;
        }
        return b.endTime - a.endTime;
      });
  }, [selectedGrade]);

  return (
    <div className="flex flex-col gap-[30px]">
      {processed.map((item) => (
        <SubmissionCard
          key={item.id}
          id={item.id}
          title={item.title}
          dateStart={item.dateStart}
          dateEnd={item.dateEnd}
          isExpired={item.isExpired}
        />
      ))}
    </div>
  );
}
