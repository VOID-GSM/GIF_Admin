"use client";
import Link from "next/link";

interface HeaderMenuProps {
  title: string;
  isActive: boolean;
  href: string;
}

export function HeaderMenu({ title, isActive, href }: HeaderMenuProps) {
  return (
    <Link 
      href={href}
      className={`text-[20px] font-medium ${isActive ? "text-main" : "text-black group-hover:text-main"}`}
    >
      {title}
    </Link>
  );
}
