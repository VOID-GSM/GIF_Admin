'use client';

import { useMemo, useState } from 'react';
import Button from '@/shared/ui/button/Button';
import ScoreButton from '@/widget/assigning/ui/ScoreButton';
import { SCORE_CATEGORIES } from '@/view/assigning/model/ScoreData';

export default function AssigningView() {
  const [selected, setSelected] = useState<Record<string, number>>({});

  const handleSelect = (categoryId: string, score: number) => {
    setSelected((prev) => ({ ...prev, [categoryId]: score }));
  };

  const isAllSelected = useMemo(
    () => SCORE_CATEGORIES.every((cat) => selected[cat.id] !== undefined),
    [selected],
  );

  return (
    <div className="flex flex-col items-center w-full pt-[87px] pb-[52px]">
      <div className="flex items-center gap-4 w-full max-w-[450px] mb-[110px]">
        <span className="text-2xl font-semibold">PolishMe</span>
        <span className="font-medium">짬뽕밥</span>
      </div>

      <div className="flex flex-col gap-[103px] w-full max-w-[450px]">
        {SCORE_CATEGORIES.map((cat) => (
          <div key={cat.id} className="flex items-center justify-between">
            <span className="text-[20px]">{cat.label}</span>
            <div className="flex gap-5">
              {cat.options.map((score) => (
                <ScoreButton
                  key={score}
                  score={score}
                  isSelected={selected[cat.id] === score}
                  onClick={() => handleSelect(cat.id, score)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5 w-full max-w-[450px] mt-[178px]">
        <Button variant="main" disabled={!isAllSelected}>
          점수 부여하기
        </Button>
        <Button variant="sub">나가기</Button>
      </div>
    </div>
  );
}
