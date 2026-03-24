import Link from 'next/link';

interface SubmissionCardProps {
  id: number;
  title: string;
  dateStart: string;
  dateEnd: string;
  isExpired: boolean;
}

export default function SubmissionCard({
  id,
  title,
  dateStart,
  dateEnd,
  isExpired,
}: SubmissionCardProps) {
  return (
    <Link href={`/submissions/${id}`} className="block">
      <div
        className={`flex w-[550px] h-20 border border-[#BABABA] rounded-lg justify-between items-center pl-[25px] pr-[42px]
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
