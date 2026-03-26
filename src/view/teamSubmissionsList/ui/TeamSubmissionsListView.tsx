'use client';

import { Grade } from '@/entities/submissionGrade/model/types';
import { useState } from 'react';
import GradeButton from '@/shared/ui/button/GradeButton';
import TeamList from '@/features/TeamList/ui/TeamList';

const SUPPORTED_GRADES: Grade[] = [1, 2];

export default function TeamSubmissionsList() {
  const [selectedGrade, setSelectedGrade] = useState<Grade>(1);

  return (
    <div className="flex flex-col gap-[65px] items-center mt-[50px]">
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
      <TeamList selectedGrade={selectedGrade} />
    </div>
  );
}
