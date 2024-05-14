
export default function PublicPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col items-center p-20">
        {children}
      </main>
    </>
  );
}
