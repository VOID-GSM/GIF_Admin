export type Grade = 1 | 2;

interface SubmissionProps {
  id: number;
  title: string;
  dateStart: string;
  dateEnd: string;
  grade: Grade;
}

export const MOCK_SUBMISSION: SubmissionProps[] = [
  {
    id: 1,
    title: '배너 제출하기',
    dateStart: '2026-03-04',
    dateEnd: '2026-03-05',
    grade: 1,
  },
  {
    id: 2,
    title: '팀 로고 제출하기',
    dateStart: '2026-05-11',
    dateEnd: '2026-05-18',
    grade: 1,
  },
  {
    id: 3,
    title: '팀 로고 제출하기',
    dateStart: '2026-05-03',
    dateEnd: '2026-05-05',
    grade: 2,
  },
  {
    id: 4,
    title: '포스터 제출하기',
    dateStart: '2026-10-25',
    dateEnd: '2026-10-26',
    grade: 2,
  },
  {
    id: 5,
    title: '보고서 제출하기',
    dateStart: '2026-03-15',
    dateEnd: '2026-03-19',
    grade: 1,
  },
  {
    id: 6,
    title: '포스터 제출하기',
    dateStart: '2025-10-25',
    dateEnd: '2025-10-26',
    grade: 1,
  },
];
