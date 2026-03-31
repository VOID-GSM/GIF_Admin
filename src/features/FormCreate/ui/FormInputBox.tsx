'use client';

import { useState } from 'react';
import Calender from '@/widget/formCreate/ui/calendar';

type FormInputType = 'input' | 'calender';

interface FormInputBoxProps {
  value: string;
  placeholder: string;
  type: FormInputType;
  onDone: (isDone: boolean) => void;
}

export default function FormInputBox({ value, placeholder, type, onDone }: FormInputBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const className =
    'flex w-[550px] h-[50px] px-[15px] items-center text-lg font-medium border border-gray-80 focus:outline-none focus:border-main placeholder:text-gray-80 rounded-[10px]';

  const inputMap: Record<FormInputType, React.ReactNode> = {
    input: (
      <input
        type="text"
        placeholder={placeholder}
        className={className}
        onChange={(e) => onDone(e.target.value.trim() !== '')}
      />
    ),
    calender: (
      <>
        <input
          type="text"
          placeholder={placeholder}
          readOnly
          value={selectedDate}
          onClick={() => setIsOpen((prev) => !prev)}
          className={className}
        />
        {isOpen && (
          <Calender
            onSelect={(start, end) => {
              setSelectedDate(`${start} ~ ${end}`);
              setIsOpen(false);
              onDone(true);
            }}
          />
        )}
      </>
    ),
  };

  return (
    <div className="relative flex flex-col gap-[4px]">
      <span className="text-sm text-gray-60 font-medium">{value}</span>
      {inputMap[type]}
    </div>
  );
}
