'use client';

import { useState, useMemo } from 'react';
import Button from '@/shared/ui/button/Button';
import GradeButton from '@/shared/ui/button/GradeButton';
import Podium from '@/features/scores/ui/Podium';
import { Grade } from '@/entities/submissionGrade/model/types';
import { GRADE_1_RANKING, GRADE_2_RANKING } from '@/features/scores/model/rankData';

const TOTAL_TEACHERS = 20;

const SUPPORTED_GRADES = [1, 2] as const;

export default function ScoresView() {
  const [selectedGrade, setSelectedGrade] = useState<Grade>(1);

  const rankings = selectedGrade === 1 ? GRADE_1_RANKING : GRADE_2_RANKING;

  const isAllScored = useMemo(() => {
    return rankings.every((team) => team.scoredCount === TOTAL_TEACHERS);
  }, [rankings]);

  const belowTop3 = useMemo(() => rankings.filter((team) => team.rank > 3), [rankings]);

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-80px)] py-[60px]">
      <div className="flex gap-[50px] mb-[82px]">
        {SUPPORTED_GRADES.map((grade) => (
          <GradeButton
            key={grade}
            value={grade}
            isSelected={selectedGrade === grade}
            onClick={() => setSelectedGrade(grade)}
          />
        ))}
      </div>

      <Podium rankings={rankings} />

      <div className="flex flex-col gap-5 w-full max-w-[460px] max-h-[412px] overflow-y-auto mt-[43px]">
        {belowTop3.map((team) => (
          <div key={team.name} className="flex items-center justify-between gap-12 font-medium">
            <div className="flex items-center gap-12 ">
              <span className="text-2xl">{team.rank}</span>
              <span className="text-[20px]">{team.name}</span>
            </div>
            <span className="text-[18px]">{team.score}점</span>
          </div>
        ))}
      </div>

      <div className="w-full max-w-[460px] mt-10">
        <Button
          disabled={!isAllScored}
          onClick={() => {
            /* TODO: 실제 API 연결 */
          }}
        >
          등수 공지하기
        </Button>
      </div>
    </div>
  );
}
