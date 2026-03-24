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
        className={`flex w-[550px] h-20 border border-gray-70 rounded-lg justify-between items-center pl-[25px] pr-[42px]
      ${isExpired ? 'text-gray-50 bg-high-emphasis' : 'text-black bg-white'}`}
      >
        <div className="flex text-[24px] ">{title}</div>
        <div className="text-gray-40">
          {dateStart.replaceAll('-', '/')} ~ {dateEnd.replaceAll('-', '/')}
        </div>
      </div>
    </Link>
  );
}
