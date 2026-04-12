interface FormButtonProps {
  onClick: () => void;
  type: 'add' | 'submit';
}

export default function FormButton({ onClick, type }: FormButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-[550px] h-[45px] font-medium rounded-[10px] cursor-pointer ${type === 'add' ? 'bg-white border border-gray-80 text-black text-lg' : 'bg-main text-white text-xl'}`}
    >
      {type === 'add' ? '+ 추가하기' : '양식 공지하기'}
    </button>
  );
}
