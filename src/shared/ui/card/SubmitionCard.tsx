interface SubmitionCardProps {
  title: string;
  date: string;
}

export default function SubmitionCard({ title, date }: SubmitionCardProps) {
  return (
    <div
      className={`flex w-[550px] h-20 border border-[#BABABA] rounded-lg justify-between items-center
        pl-[25px] pr-[42px] cursor-pointer
      ${title ? 'text-black bg-white' : 'text-[#939393] bg-[#EDEDED]'}`}
    >
      <div className="flex text-[24px] ">{title}</div>
      <div className="text-[#7F7F7F]">{date}</div>
    </div>
  );
}
