import type { Metadata } from "next";
import { Navbar } from '../../components/navbar/Navbar';

export const metadata: Metadata = {
  title: "Sellers | Handcrafted Haven",
  description: "SEO Title",
  keywords: ["Sellers Page"],
};

export default function SellersPage() {
  return (
    <>
      <Navbar/>
      <h1>SellersPage</h1>
    </>
  )
}
