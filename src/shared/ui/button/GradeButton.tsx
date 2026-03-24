import { Grade } from '@/features/DateFilter/model/temp';

interface GradeButtonProps {
  value: Grade;
  isSelected: boolean;
  onClick: () => void;
}

export default function GradeButton({ value, isSelected, onClick }: GradeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-[150px] h-[35px] border rounded-lg text-black cursor-pointer
        ${isSelected ? 'border-green-40 bg-green-70' : 'border-gray-60 bg-high-emphasis'}`}
    >
      {value}학년
    </button>
  );
}
