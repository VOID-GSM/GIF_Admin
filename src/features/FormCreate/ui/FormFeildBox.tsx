'use client';

import { useState } from 'react';
import Card from '@/shared/ui/card/Card';
import Arrow from '@/shared/asset/svg/arrow';
import Deleted from '@/shared/asset/svg/deleted';

const styles = ['캘린더', '줄 글', '파일'];
const styleMap: Record<string, string> = {
  캘린더: '캘린더',
  '줄 글': '줄 글 텍스트',
  파일: '파일 첨부',
};

interface FormFeildBoxProps {
  onDeleted: () => void;
}

export default function FormFeildBox({ onDeleted }: FormFeildBoxProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const handleSelect = (style: string) => {
    setSelectedStyle(style);
    setIsDropdownOpen(false);
  };

  const className =
    'w-full px-[15px] py-[14px] bg-white border border-gray-80 focus:outline-none focus:border-main placeholder:text-gray-80 rounded-[10px]';

  return (
    <Card className="relative w-[550px] items-center">
      <div className="relative flex flex-col w-[400px] gap-[10px]">
        <input
          type="text"
          placeholder="양식의 제목을 입력하세요"
          className={`h-[50px] ${className}`}
        />
        <textarea
          placeholder="설명을 입력하세요"
          className={`h-[100px] resize-none ${className}`}
        />
        <div>
          <div
            className={`flex items-center justify-between h-[50px] text-gray-80 ${isDropdownOpen ? 'border-main' : 'border-gray-80'} ${className}`}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            <span className={selectedStyle ? 'text-black' : 'text-gray-80'}>
              {selectedStyle || '스타일을 선택하세요'}
            </span>
            <Arrow isOpen={isDropdownOpen} />
          </div>
          {isDropdownOpen && (
            <div className="flex flex-col justify-center absolute right-0 w-[92px] h-[88px] gap-[7px] bg-white rounded-[5px] px-[12px] shadow-lg z-10">
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
