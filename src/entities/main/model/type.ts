import { Grade } from '@/entities/submissionGrade/model/types';

export interface Project {
  id: string;
  title: string;
  members: string;
  imageUrl: string;
  grade?: Grade;
}
