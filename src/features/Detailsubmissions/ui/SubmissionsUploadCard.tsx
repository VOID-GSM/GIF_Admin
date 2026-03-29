import { UploadFile } from '@/shared/asset/svg/UploadFile';

interface SubmissionsUploadCardProps {
  file: string;
  fileSize: string;
  fileUrl: string;
}

export default function SubmissionsUploadCard({
  file,
  fileSize,
  fileUrl,
}: SubmissionsUploadCardProps) {
  return (
    <a
      href={fileUrl}
      download
      className="flex w-[400px] h-[70px] px-[25px] items-center rounded-[10px] gap-[25px] bg-bg-login border border-gray-70 cursor-pointer"
    >
      <UploadFile />
      <div className="flex flex-col">
        <span className="font-semibold text-sm">{file}</span>
        {fileSize && <span className="text-[11px] text-gray-40">{fileSize}</span>}
      </div>
    </a>
  );
}
