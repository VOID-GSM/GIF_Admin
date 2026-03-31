import { ProjectDetail } from '@/entities/project/model/type';
import Image from 'next/image';

interface ProjectHeaderProps {
  project: ProjectDetail;
}

export default function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <div className="flex flex-col">
      <div className=" flex flex-col w-25 h-25 border border-gray-80 rounded-[10px] bg-white overflow-hidden">
        {project.logoUrl ? (
          <Image
            src={project.logoUrl}
            alt={`${project.projectName} logo`}
            width={100}
            height={100}
          />
        ) : (
          <div className="w-[100px] h-[100px]" />
        )}
      </div>

      <div className='flex flex-col mt-[50px]'>
        <span className="font-bold text-2xl">{project.projectName}</span>

        <div className="flex flex-col gap-1.5 w-full mt-[27px]">
          <span className="text-lg font-semibold">팀명: {project.teamName}</span>
          <div className="flex gap-2 text-gray-30">
            <span>팀장: {project.leader}</span>
            <span>팀원: {project.members.join(', ')}</span>
          </div>
        </div>
        <hr className='bg-gray-30 mt-[15px]' />

        <span className="font-light mt-[47px]">{project.description}</span>
      </div>
    </div>
  );
}
