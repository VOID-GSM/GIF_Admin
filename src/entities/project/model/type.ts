import { Grade } from "@/entities/submissionGrade/model/types";

export interface ProjectDetail {
  id: number;
  logoUrl: string;
  projectName: string;
  teamName: string;
  leader: string;
  members: string[];
  description: string;
  grade?: Grade;
}