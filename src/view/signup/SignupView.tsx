'use client';

import Image from 'next/image';
import Logo from '@/shared/asset/img/gif_logo.png';
import Input from '@/shared/ui/input/Input';
import Button from '@/shared/ui/button/Button';
import { useState } from 'react';
import CheckBox from '@/shared/ui/CheckBox';

export default function SignupView() {
  const [name, setName] = useState<string>('');
  const [isMaster, setIsMaster] = useState(false);

  const isReady = name.trim() !== '';

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-bg-main">
      <div className="w-125 h-90 flex flex-col items-center justify-center gap-10 bg-white border border-gray-80 rounded-[10px]">
        <Image src={Logo} alt="GIF LOGO" width={100} height={66} priority />
        <form className="flex flex-col gap-5">
          <Input
            value={name}
            placeholder="이름을 입력하세요"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <div onClick={() => setIsMaster((prev) => !prev)}>
              <CheckBox isActive={isMaster} />
            </div>

            <p className="text-xs text-gray-60 font-medium">
              아이디어 페스티벌 담당 선생님이신가요?
            </p>
          </div>
          <Button disabled={!isReady} type="submit">
            시작하기
          </Button>
        </form>
      </div>
    </div>
  );
}
