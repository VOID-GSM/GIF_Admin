import { ProjectDetail } from './type';

export const MOCK_PROJECT_DETAIL: ProjectDetail[] = [
  {
    id: 1,
    logoUrl: '',
    projectName: 'GIF',
    teamName: 'VOID',
    leader: '김지유',
    members: ['김민아', '김수빈', '박채은', '이하경', '이효은'],
    description:
      'GIF는 광주소프트웨어마이스터고 아이디어페스티벌 관리 서비스로 프로젝트 관리와 관련 서류 제출, 점수 부여 등의 편의를 제공합니다.',
    grade: 2,
  },
  {
    id: 2,
    logoUrl: '',
    projectName: 'PolishMe',
    teamName: '짬뽕밥',
    leader: '홍길동',
    members: ['길동이', '개똥이', '김철수', '김영희'],
    description:
      'PolishMe는 자기소개서나 이력서처럼취업 준비에 필요한 문서를 쉽게 작성할 수 있도록 도와주는 AI 기반 서비스입니다. 문서를 처음 써보는 사람들은 어디서부터 시작해야 할지, 어떤 내용을 써야 할지 막막한 경우가 많습니다. PolishMe는 이런 고민을 줄이기 위해 AI가 기본 양식을 제공하고, 사용자가 입력한 내용을 바탕으로 문장을 다듬고 피드백을 제공합니다.',
    grade: 1,
  },
];
