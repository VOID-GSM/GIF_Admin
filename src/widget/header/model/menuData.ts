export interface MenuItem {
  title: string;
  href: string;
  isLockable?: boolean;
}

export const ADMIN_MENU: MenuItem[] = [
  { title: "프로젝트 확인", href: "/"},
  { title: "등수 확인", href: "/ranking", isLockable: true},
];

export const MASTER_MENU: MenuItem[] = [
  { title: "프로젝트 확인", href: "/"},
  { title: "양식 생성", href: "/formCreate"},
  { title: "제출 확인", href: "/submissions"},
  { title: "점수 수합 확인", href: "/scores", isLockable: true},
];