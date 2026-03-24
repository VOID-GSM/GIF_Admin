interface CheckButtonProps {
  isSubmitted: boolean;
  onClick?: () => void;
}

export default function CheckButton({ isSubmitted, onClick }: CheckButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!isSubmitted}
      className={`w-30 h-10 rounded-[10px] font-medium text-lg 
      ${isSubmitted ? 'bg-green-50 cursor-pointer' : 'bg-high-emphasis'}`}
    >
      양식 확인하기
    </button>
  );
}
