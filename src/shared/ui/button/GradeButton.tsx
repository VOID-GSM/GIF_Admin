import { Grade } from '@/src/features/DateFilter/model/temp';

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
        ${isSelected ? 'border-[#27D79C] bg-[#D0F2E4]' : 'border-[#A7A7A7] bg-[#EDEDED]'}`}
    >
      {value}학년
    </button>
  );
}
