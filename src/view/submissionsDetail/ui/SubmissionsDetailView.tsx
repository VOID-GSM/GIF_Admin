import SubmissionsCard from '@/features/Detailsubmissions/SubmissionsCard';
import SubmissionsGuideCard from '@/features/Detailsubmissions/ui/SubmissionsGuideCard';
import Card from '@/shared/ui/card/Card';
import { MOCK_DETAIL } from '@/entities/detail/model/temp';

export default function SubmissionsDetail() {
  return (
    <div className="flex flex-col items-center mt-24 pb-24">
      <div className="flex flex-col gap-[30px] items-center">
        <span className="text-2xl font-semibold">배너 작성 안내</span>
        <span className="self-start font-medium text-gray-40">마감일: 2026.02.12</span>
        {MOCK_DETAIL.map((item) => (
          <Card key={item.id} className="flex-col gap-[20px]">
            <SubmissionsGuideCard subtitle={item.subtitle} content={item.content} />
            <SubmissionsCard item={item} />
          </Card>
        ))}
      </div>
    </div>
  );
}
