interface GradeButtonProps {
  value: number;
}

export default function GradeButton({ value }: GradeButtonProps) {
  return (
    <button
      type="button"
      className={`w-[150px] h-[35px] border rounded-lg text-black cursor-pointer
        ${value === 1 ? 'border-[#27D79C] bg-[#D0F2E4]' : 'border-[#A7A7A7] bg-[#EDEDED]'}`}
    >
      {value}학년
    </button>
  );
}
