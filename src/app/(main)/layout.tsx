import Header from "@/src/widget/header/ui";

export default function MainLayout({children} : {children: React.ReactNode}) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}
