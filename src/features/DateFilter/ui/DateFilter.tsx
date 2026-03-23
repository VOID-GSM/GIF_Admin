'use client';

import SubmitionCard from '@/src/shared/ui/card/SubmissionCard';
import { MOCK_SUBMISSION } from '../model/temp';

interface DateFilterProps {
  selectedGrade: number;
}

export default function DateFilter({ selectedGrade }: DateFilterProps) {
  const processed = MOCK_SUBMISSION.map((item) => {
    const today = new Date();
    const end = new Date(item.dateEnd);
    today.setHours(0, 0, 0, 0);
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

  return (
    <div>
      <div className="flex flex-col gap-[30px]">
        {processed.map((item) => (
          <SubmitionCard
            key={item.id}
            title={item.title}
            dateStart={item.dateStart}
            dateEnd={item.dateEnd}
            grade={item.grade}
            isExpired={item.isExpired}
          />
        ))}
      </div>
    </div>
  );
}
