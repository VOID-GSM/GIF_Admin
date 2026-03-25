import TeamItem from './TeamItem';
import { MOCK_TEAMLIST } from '../model/temp';
import { Grade } from '@/src/entities/submissionGrade/model/types';

interface Props {
  selectedGrade: Grade;
}

export default function TeamList({ selectedGrade }: Props) {
  const filteredList = MOCK_TEAMLIST.filter((item) => item.grade === selectedGrade);

  return (
    <div className="flex flex-col gap-5">
      {filteredList.map((item) => (
        <TeamItem key={item.id} id={item.id} title={item.title} isSubmitted={item.isSubmitted} />
      ))}
    </div>
  );
}
