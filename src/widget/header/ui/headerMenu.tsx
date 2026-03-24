"use client";
import Link from "next/link";

interface HeaderMenuProps {
  title: string;
  isActive: boolean;
  href: string;
  isEventDay: boolean;
  isLockable?: boolean;
}

export function HeaderMenu({ title, isActive, href, isEventDay, isLockable = false }: HeaderMenuProps) {
  const isLocked = isLockable && !isEventDay;

  const baseStyle = "text-[20px] font-medium transition-colors";
  if (isLocked) {
    return (
      <span
        className={`${baseStyle} text-gray-70 cursor-not-allowed`}
        title="아이디어 페스티벌 당일 날 열립니다."
      >
        {title}
      </span>
    );
  }
  return (
    <Link 
      href={href}
      className={`${baseStyle} ${
        isActive ? "text-main" : "text-black hover:text-main"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {title}
    </Link>
  );
}
