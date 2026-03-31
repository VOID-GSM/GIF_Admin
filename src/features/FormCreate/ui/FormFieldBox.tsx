'use client';

import { useState } from 'react';
import { useRef, useEffect } from 'react';
import Card from '@/shared/ui/card/Card';
import Arrow from '@/shared/asset/svg/arrow';
import Deleted from '@/shared/asset/svg/deleted';

const styles = ['캘린더', '줄 글', '파일'];
const styleMap: Record<string, string> = {
  캘린더: '캘린더',
  '줄 글': '줄 글 텍스트',
  파일: '파일 첨부',
};

interface FormFieldBoxProps {
  onDeleted: () => void;
  onDone: (isDone: boolean) => void;
}

export default function FormFieldBox({ onDeleted, onDone }: FormFieldBoxProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const checkDone = (t: string, d: string, s: string | null) => {
    onDone(t.trim() !== '' && d.trim() !== '' && s !== null);
  };

  const handleSelect = (style: string) => {
    setSelectedStyle(style);
    setIsDropdownOpen(false);
    checkDone(title, description, style);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const boxClassName =
    'w-full px-[15px] py-[14px] bg-white border border-gray-80 focus:outline-none focus:border-main placeholder:text-gray-80 rounded-[10px]';

  return (
    <Card className="relative w-[550px] items-center">
      <div className="relative flex flex-col w-[400px] gap-[10px]">
        <input
          type="text"
          placeholder="양식의 제목을 입력하세요"
          className={`h-[50px] ${boxClassName}`}
          onChange={(e) => {
            setTitle(e.target.value);
            checkDone(e.target.value, description, selectedStyle);
          }}
        />
        <textarea
          placeholder="설명을 입력하세요"
          className={`h-[100px] resize-none ${boxClassName}`}
          onChange={(e) => {
            setDescription(e.target.value);
            checkDone(title, e.target.value, selectedStyle);
          }}
        />
        <div ref={dropdownRef}>
          <div
            className={`flex items-center justify-between h-[50px] text-gray-80 ${isDropdownOpen ? 'border-main' : 'border-gray-80'} ${boxClassName}`}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <span className={selectedStyle ? 'text-black' : 'text-gray-80'}>
              {selectedStyle || '스타일을 선택하세요'}
            </span>
            <Arrow isOpen={isDropdownOpen} />
          </div>
          {isDropdownOpen && (
            <div className="flex flex-col justify-center items-start absolute right-0 w-[92px] h-[88px] gap-[7px] bg-white rounded-[5px] px-[12px] shadow-lg z-10">
              {styles.map((style) => (
                <button
                  type="button"
                  key={style}
                  className="cursor-pointer"
                  onClick={() => handleSelect(style)}
                >
                  {style}
                </button>
              ))}
            </div>
          )}
          {selectedStyle && (
            <div className="w-[400px] h-[30px] border-b border-gray-70 text-xl text-gray-40 font-medium mt-[20px] pb-[5px]">
              {styleMap[selectedStyle]}
            </div>
          )}
        </div>
      </div>
      <Deleted onClick={onDeleted} className="absolute right-[10px] bottom-[15px] cursor-pointer" />
    </Card>
  );
}
