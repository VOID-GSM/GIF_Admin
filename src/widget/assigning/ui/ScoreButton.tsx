'use client';

interface ScoreButtonProps {
  score: number;
  isSelected: boolean;
  onClick: () => void;
}

export default function ScoreButton({ score, isSelected, onClick }: ScoreButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-[60px] h-[30px] rounded-[10px] border cursor-pointer
        ${isSelected ? 'bg-green-70 border-main' : 'bg-high-emphasis text-gray-70 border-gray-70'}`}
    >
      {score}점
    </button>
  );
}
