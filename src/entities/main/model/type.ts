import { Grade } from '@/entities/submissionGrade/model/types';

export interface Project {
  id: number;
  projectName: string;
  members: string;
  imageUrl: string;
  grade?: Grade;
}
