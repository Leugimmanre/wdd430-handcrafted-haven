import Link from "next/link";
import { SignOutIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

export const Navbar = () => {
  const navItems = [
    { path: "/sellers", text: "Sellers" },
    { path: "/products", text: "Products" },
    { path: "/order/ceramics_and_pottery", text: "Orders" },
    { path: "/search", text: "Search" },
  ];
  return (
    <nav className="md:flex bg-blue-500 bg-opacity-30 p-4 m-2 rounded">
      {navItems.map((item) => (
        <ActiveLink key={item.text} {...item}/>
      ))}
      <div className="flex flex-1"></div>
      <Link className="flex items-center" href={"/"}>
        <SignOutIcon className="mr-2" />
        <span>Logout</span>
      </Link>
    </nav>
  );
};
