import SubmissionsUploadCard from '@/features/Detailsubmissions/ui/SubmissionsUploadCard';
import SubmissionsTextCard from '@/features/Detailsubmissions/ui/SubmissionsTextCard';
import SubmissionsScheduleCard from '@/features/Detailsubmissions/ui/SubmissionsCalenderCard';
import { SubmissionItem } from '@/entities/detail/model/type';

export default function SubmissionsCard({ item }: { item: SubmissionItem }) {
  switch (item.type) {
    case 'file':
      return (
        <SubmissionsUploadCard
          file={item.file!}
          fileSize={item.fileSize!}
          fileUrl={item.fileUrl!}
        />
      );
    case 'text':
      return <SubmissionsTextCard text={item.text!} />;
    case 'schedule':
      return <SubmissionsScheduleCard schedules={item.schedules ?? []} />;
  }
}
