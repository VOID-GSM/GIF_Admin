'use client';

import { useState } from 'react';
import GradeButton from '@/src/shared/ui/button/GradeButton';
import DateFilter from '@/src/features/DateFilter/ui/DateFilter';

export default function SubmitForm() {
  const [selectedGrade, setSelectedGrade] = useState(1);
  const grades = [1, 2];

  return (
    <div className="flex flex-col gap-[50px] items-center mt-20">
      <div className="flex gap-25">
        {grades.map((grade) => (
          <GradeButton
            key={grade}
            value={grade}
            isSeleted={selectedGrade === grade}
            onClick={() => setSelectedGrade(grade)}
          />
        ))}
      </div>
      <DateFilter selectedGrade={selectedGrade} />
    </div>
  );
}
