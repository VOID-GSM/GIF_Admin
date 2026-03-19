"use client";

import Link from "next/link";
import Logo from "@/src/shared/asset/img/gif_logo.png";
import Image from "next/image";
import { HeaderMenu } from "./headerMenu";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  // 주소가 아직 정해지지 않아 비워 둠
  const menuList = [
    { title: "프로젝트 확인", href: "/"},
    { title: "양식 생성", href: "#"},
    { title: "제출 확인", href: "#"},
    { title: "점수 수합 확인", href: "#"},
  ]
  return (
    <header className="h-20 w-full flex justify-center items-center border-b border-gray-70 bg-white">
      <Link href="/">
        <Image src={Logo} alt="홈으로 이동" width={61} height={56} priority />
      </Link>

      <div className="flex gap-6 ml-[70px]">
        {menuList.map((menu) => (
          <HeaderMenu 
            key={menu.title} 
            title={menu.title}
            isActive={pathname === menu.href}
            href={menu.href}
          />
        ))}
      </div>
    </header>
  );
}
