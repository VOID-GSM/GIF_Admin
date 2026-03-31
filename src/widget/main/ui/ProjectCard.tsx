import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/entities/main/model/type';

interface ProjectCardProps {
  project: Project;
  href: string;
}

export const ProjectCard = ({ project, href }: ProjectCardProps) => {
  return (
    <Link href={href}>
      <div className="overflow-hidden rounded-[10px] border border-gray-60 bg-white w-[175px]">
        <div className="relative h-[90px]">
          {project.imageUrl ? (
            <Image src={project.imageUrl} alt={project.projectName} fill className="object-cover" />
          ) : (
            <div className="w-full h-full" />
          )}
        </div>

        <div className="flex flex-col gap-2 p-4 bg-main-card">
          <span className="font-semibold">{project.projectName}</span>
          <span className="text-xs font-medium">{project.members}</span>
        </div>
      </div>
    </Link>
  );
};
