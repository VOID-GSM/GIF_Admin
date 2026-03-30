export type SubmissionType = 'file' | 'text' | 'schedule';

export interface CalendarSchedule {
  id: number;
  startDate: Date;
  endDate: Date;
  title: string;
  color: string;
}

export interface SubmissionItem {
  id: number;
  subtitle: string;
  content: string;
  type: SubmissionType;
  file?: string;
  fileSize?: string;
  fileUrl?: string;
  text?: string;
  schedules?: CalendarSchedule[];
}
