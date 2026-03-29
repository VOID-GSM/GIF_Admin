interface SubmissionsTextCardProps {
  text: string;
}

export default function SubmissionsTextCard({ text }: SubmissionsTextCardProps) {
  return (
    <div className="flex w-[400px] min-h-[70px] px-[15px] py-[14px] rounded-[10px] bg-bg-login border border-gray-70 font-medium">
      {text}
    </div>
  );
}
