import Header from '@/widget/header/ui';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header role="MASTER" />
      <main className="flex flex-col h-[calc(100vh-80px)]">{children}</main>
    </>
  );
}
