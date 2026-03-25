'use client';

import { useState } from 'react';
import { Grade } from '@/entities/submissionGrade/model/types';
import GradeButton from '@/shared/ui/button/GradeButton';
import DateFilter from '@/features/DateFilter/ui/DateFilter';

const SUPPORTED_GRADES = [1, 2] as const;

export default function Submissions() {
  const [selectedGrade, setSelectedGrade] = useState<Grade>(1);

  return (
    <div className="flex flex-col gap-[50px] items-center mt-20">
      <div className="flex gap-[100px]">
        {SUPPORTED_GRADES.map((grade) => (
          <GradeButton
            key={grade}
            value={grade}
            isSelected={selectedGrade === grade}
            onClick={() => setSelectedGrade(grade)}
          />
        ))}
      </div>
      <DateFilter selectedGrade={selectedGrade} />
    </div>
  );
}
