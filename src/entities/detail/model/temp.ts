import { SubmissionItem } from '@/entities/detail/model/type';

export const MOCK_DETAIL: SubmissionItem[] = [
  {
    id: 1,
    subtitle: '아이디어 페스티벌 배너 작성 설명',
    content: '베너의 글씨체는 노토 산스로 고정입니다 기한 안으로 제출해주세요',
    type: 'file',
    file: 'report_2026.pdf',
    fileSize: '1.8MB',
    fileUrl: '/files/report_2026.pdf',
  },
  {
    id: 2,
    subtitle: '베너에 들어갈 글 입력',
    content: '짧게 입력해주세요',
    type: 'text',
    text: '텍스트 텍스트 텍스트',
  },
  {
    id: 3,
    subtitle: '프로젝트 추진 일정',
    content: '아이디어 계획서, 재료 신청, 프로젝트 기능 구현을 추가해 주세요',
    type: 'schedule',
    schedules: [
      {
        id: 1,
        startDate: new Date('2026-02-01'),
        endDate: new Date('2026-02-10'),
        title: '아이디어 계획서',
        color: 'bg-pastel-blue',
      },
    ],
  },
];
