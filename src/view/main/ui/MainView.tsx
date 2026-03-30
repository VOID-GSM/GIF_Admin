'use client';

import { useState, useMemo } from 'react';
import { ProjectCard } from '@/widget/main/ui/ProjectCard';
import { MOCK_PROJECT } from '@/entities/main/model/mock';
import { Grade } from '@/entities/submissionGrade/model/types';
import GradeButton from '@/shared/ui/button/GradeButton';

const SUPPORTED_GRADES: Grade[] = [1, 2];

interface MainViewProps {
  role: 'ADMIN' | 'MASTER';
}

export default function MainView({ role }: MainViewProps) {
  const [selectedGrade, setSelectedGrade] = useState<Grade>(1);

  const filteredProjects = useMemo(() => {
    return MOCK_PROJECT.filter((project) => project.grade === selectedGrade);
  }, [selectedGrade]);

  return (
    <div className="flex flex-col gap-[50px] mt-[50px] items-center w-full ">
      <div className="flex gap-[100px]">
        {SUPPORTED_GRADES.map((grade) => (
          <GradeButton
            key={grade}
            value={grade}
            isSelected={selectedGrade === grade}
            onClick={() => setSelectedGrade(grade)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            href={`/${role.toLowerCase()}/projectDetail/${project.id}`}
          />
        ))}
      </div>
    </div>
  );
}
