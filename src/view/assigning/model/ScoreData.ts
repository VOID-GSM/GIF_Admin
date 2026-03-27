export interface ScoreCategory {
  id: string;
  label: string;
  options: number[];
}

export const SCORE_CATEGORIES: ScoreCategory[] = [
  { id: 'technical', label: '기술적 완성도', options: [40, 30, 20] },
  { id: 'social', label: '사회적 가치', options: [20, 15, 10] },
  { id: 'ai', label: 'AI 활용 능력', options: [20, 15, 10] },
  { id: 'presentation', label: '프레젠테이션 및 설명', options: [20, 15, 10] },
];
