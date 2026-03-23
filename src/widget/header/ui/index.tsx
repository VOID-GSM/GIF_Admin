"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/src/shared/asset/img/gif_logo.png";
import Image from "next/image";
import { HeaderMenu } from "./headerMenu";
import { usePathname } from "next/navigation";
import { ADMIN_MENU, MASTER_MENU } from "../model/menuData";

interface HeaderProps {
  role?: "ADMIN" | "MASTER";
}

export default function Header({ role = "ADMIN" }: HeaderProps) { // AMDIN 임시로 지정
  const pathname = usePathname();
  const isMaster = role === "MASTER";
  const menuList = isMaster ? MASTER_MENU : ADMIN_MENU;
  const gapClass = isMaster ? "gap-6" : "gap-30";

  const checkIsEventDay = () => {
    const now = new Date();
    return now.getMonth() + 1 === 12 && [28, 29].includes(now.getDate());
  };

  const [isEventDay, setIsEventDay] = useState(checkIsEventDay);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEventDay(checkIsEventDay());
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="h-20 w-full flex justify-center items-center border-b border-gray-70 bg-white">
      <Link href="/">
        <Image src={Logo} alt="홈으로 이동" width={61} height={56} priority />
      </Link>

      <div className={`flex ${gapClass} ml-[70px]`}>
        {menuList.map((menu) => (
          <HeaderMenu 
            key={menu.href} 
            title={menu.title}
            isActive={pathname === menu.href}
            href={menu.href}
            isEventDay={isEventDay}
          />
        ))}
      </div>
    </header>
  );
}
