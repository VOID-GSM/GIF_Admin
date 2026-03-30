interface ConfirmModalProps {
  onCancel: () => void;
  onConfirm: () => void;
}

interface ModalButtonProps {
  onClick: () => void;
  value: React.ReactNode;
  type: 'cancel' | 'confirm';
}

function ModalButton({ onClick, value, type }: ModalButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center h-[25px] px-[13px] py-[2px] rounded-[100px] text-sm cursor-pointer
      ${type === 'cancel' ? 'bg-gray-100 text-black' : 'bg-main text-white'} `}
    >
      {value}
    </button>
  );
}

export default function ConfirmModal({ onCancel, onConfirm }: ConfirmModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onCancel} />
      <div className="relative w-[350px] h-[150px] px-[30px] pt-[30px] pb-[20px] bg-white rounded-[20px]">
        <div className="flex flex-col mb-[33px]">
          <span className="text-sm font-medium text-gray-40">
            아직 작성되지 않은 항목이 있습니다
          </span>
          <span className="font-medium">계속 진행 하시겠습니까?</span>
        </div>
        <div className="flex justify-end gap-[10px]">
          <ModalButton value="취소" onClick={onCancel} type="cancel" />
          <ModalButton value="공지하기" onClick={onConfirm} type="confirm" />
        </div>
      </div>
    </div>
  );
}
