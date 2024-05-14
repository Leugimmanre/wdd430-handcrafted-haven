import { Navbar } from "../components/navbar/Navbar";

export default function PivatePagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar/>
      <main className="">
        {children}
      </main>
    </>
  );
}
