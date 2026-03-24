import Header from "@/src/widget/header/ui";

export default function MainLayout({children} : {children: React.ReactNode}) {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
        {children}
      </main>
    </>
  );
}
