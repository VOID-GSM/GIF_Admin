export type Grade = 1 | 2;

export interface TeamListProps {
  id?: number;
  title: string;
  isSubmitted: boolean;
  grade: Grade;
}

export const MOCK_TEAMLIST: TeamListProps[] = [
  {
    id: 1,
    title: '짬뽕밥',
    isSubmitted: true,
    grade: 1,
  },
  {
    id: 2,
    title: '팀2',
    isSubmitted: false,
    grade: 1,
  },
  {
    id: 3,
    title: '팀1',
    isSubmitted: true,
    grade: 1,
  },
  {
    id: 4,
    title: '팀3',
    isSubmitted: true,
    grade: 1,
  },
  {
    id: 5,
    title: '팀4',
    isSubmitted: false,
    grade: 1,
  },
  {
    id: 6,
    title: '팀5',
    isSubmitted: true,
    grade: 1,
  },
  {
    id: 7,
    title: '팀6',
    isSubmitted: false,
    grade: 1,
  },
  {
    id: 8,
    title: '팀7',
    isSubmitted: false,
    grade: 1,
  },
  {
    id: 9,
    title: '팀8',
    isSubmitted: true,
    grade: 1,
  },
];
