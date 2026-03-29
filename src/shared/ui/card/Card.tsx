import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`flex flex-col w-[500px] min-h-[100px] py-[30px] px-[50px] bg-main-card border-t-5 border-main rounded-[10px] ${className}`}
    >
      {children}
    </div>
  );
}
