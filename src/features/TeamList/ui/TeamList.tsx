import TeamItem from './TeamItem';
import { MOCK_TEAMLIST, Grade } from '../model/temp';

interface TeamListProps {
  selectedGrade: Grade;
}

export default function TeamList({ selectedGrade }: TeamListProps) {
  const filteredList = MOCK_TEAMLIST.filter((item) => item.grade === selectedGrade);

  return (
    <div className="flex flex-col gap-5">
      {filteredList.map((item) => (
        <TeamItem
          key={item.id}
          title={item.title}
          isSubmitted={item.isSubmitted}
          grade={item.grade}
        />
      ))}
    </div>
  );
}
