'use client';

import Link from 'next/link';

interface SubmissionCardProps {
  title: string;
  dateStart: string;
  dateEnd: string;
  isExpired: boolean;
}

export default function SubmissionCard({
  title,
  dateStart,
  dateEnd,
  isExpired,
}: SubmissionCardProps) {
  return (
    <Link href="/" className="block">
      <div
        className={`flex w-[550px] h-20 border border-[#BABABA] rounded-lg justify-between items-center
        pl-[25px] pr-[42px] cursor-pointer
      ${isExpired ? 'text-[#939393] bg-[#EDEDED]' : 'text-black bg-white'}`}
      >
        <div className="flex text-[24px] ">{title}</div>
        <div className="text-[#7F7F7F]">
          {dateStart.replaceAll('-', '/')} ~ {dateEnd.replaceAll('-', '/')}
        </div>
      </div>
    </Link>
  );
}
