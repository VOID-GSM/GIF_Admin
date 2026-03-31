'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import FormButton from '@/shared/ui/button/formButton';
import FormInputBox from '@/features/FormCreate/ui/FormInputBox';
import FormFieldBox from '@/features/FormCreate/ui/FormFieldBox';
import ConfirmModal from '@/widget/formCreate/ui/ConfirmModal';

export default function FormCreateView() {
  const router = useRouter();
  const [fields, setFields] = useState([
    { id: 1, isDone: false },
    { id: 2, isDone: false },
  ]);
  const nextId = useRef(3);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isTitleDone, setIsTitleDone] = useState(false);
  const [isDeadlineDone, setIsDeadlineDone] = useState(false);

  const handleDelete = (id: number) => {
    setFields((prev) => prev.filter((field) => field.id !== id));
  };

  const handleDone = (id: number, isDone: boolean) => {
    setFields((prev) => prev.map((f) => (f.id === id ? { ...f, isDone } : f)));
  };

  const handleSubmit = () => {
    const allDone = isTitleDone && isDeadlineDone && fields.every((f) => f.isDone);
    if (!allDone) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="flex flex-col items-center mt-[60px] pb-[130px]">
      <div className="flex flex-col items-center gap-[30px] mb-[30px]">
        <span className="text-2xl font-semibold">양식 생성하기</span>
        <FormInputBox
          value="제목 입력하기"
          placeholder="제목을 입력하세요"
          type="input"
          onDone={(v) => setIsTitleDone(v)}
        />
        <FormInputBox
          value="마감일 설정하기"
          placeholder="날짜를 선택하세요"
          type="calendar"
          onDone={(v) => setIsDeadlineDone(v)}
        />
      </div>

      <div className="flex flex-col gap-[20px] mb-[20px]">
        {fields.map((field) => (
          <FormFieldBox
            key={field.id}
            onDeleted={() => handleDelete(field.id)}
            onDone={(isDone) => handleDone(field.id, isDone)}
          />
        ))}
      </div>

      <div className="flex flex-col gap-[20px]">
        <FormButton
          type="add"
          onClick={() => setFields((prev) => [...prev, { id: nextId.current++, isDone: false }])}
        />
        <FormButton type="submit" onClick={handleSubmit} />
        {isModalOpen && (
          <ConfirmModal
            onCancel={() => setIsModalOpen(false)}
            onConfirm={() => {
              setIsModalOpen(false);
              router.push('/'); //이후에 이동할 페이지로 경로 변경 필요
            }}
          />
        )}
      </div>
    </div>
  );
}
