interface GradeButtonProps {
  value: number;
  isSeleted: boolean;
  onClick: () => void;
}

export default function GradeButton({ value, isSeleted, onClick }: GradeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-[150px] h-[35px] border rounded-lg text-black cursor-pointer
        ${isSeleted ? 'border-[#27D79C] bg-[#D0F2E4]' : 'border-[#A7A7A7] bg-[#EDEDED]'}`}
    >
      {value}학년
    </button>
  );
}
