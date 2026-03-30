'use client';

import { useState, useRef } from 'react';
import FormButton from '@/shared/ui/button/formButton';
import FormInputBox from '@/features/FormCreate/ui/FormInputBox';
import FormFeildBox from '@/features/FormCreate/ui/FormFeildBox';
import ConfirmModal from '@/widget/formCreate/ui/confirmModal';

export default function FormCreateView() {
  const [fields, setFields] = useState([{ id: 1 }, { id: 2 }]);
  const nextId = useRef(3);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id: number) => {
    setFields((prev) => prev.filter((field) => field.id !== id));
  };

  return (
    <div className="flex flex-col items-center mt-[60px] pb-[130px]">
      <div className="flex flex-col items-center gap-[30px] mb-[30px]">
        <span className="text-2xl font-semibold">양식 생성하기</span>
        <FormInputBox value="제목 입력하기" placeholder="제목을 입력하세요" type="input" />
        <FormInputBox value="마감일 설정하기" placeholder="날짜를 선택하세요" type="calender" />
      </div>

      <div className="flex flex-col gap-[20px] mb-[20px]">
        {fields.map((field) => (
          <FormFeildBox key={field.id} onDeleted={() => handleDelete(field.id)} />
        ))}
      </div>

      <div className="flex flex-col gap-[20px]">
        <FormButton
          type="add"
          onClick={() => setFields((prev) => [...prev, { id: nextId.current++ }])}
        />
        <FormButton type="submit" onClick={() => setIsModalOpen(true)} />
        {isModalOpen && (
          <ConfirmModal
            onCancel={() => setIsModalOpen(false)}
            onConfirm={() => {
              setIsModalOpen(false);
              alert('양식이 공지되었습니다.');
            }}
          />
        )}
      </div>
    </div>
  );
}
