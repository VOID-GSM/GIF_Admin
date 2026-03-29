interface GuideCardProps {
  subtitle: string;
  content: string;
}

export default function SubmissionsGuideCard({ subtitle, content }: GuideCardProps) {
  return (
    <div className="flex flex-col gap-5">
      <span className="text-xl font-semibold">{subtitle}</span>
      <div className="text-lg text-gray-40">{content}</div>
    </div>
  );
}
