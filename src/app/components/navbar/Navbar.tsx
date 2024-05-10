import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

export const Navbar = () => {
  const navItems = [
    { path: "/sellers", text: "Sellers" },
    { path: "/products", text: "Products" },
    { path: "/search", text: "Search" },
  ];
  return (
    <nav className="flex bg-blue-500 bg-opacity-30 p-4 m-2 rounded">
      <Link className="flex items-center" href={"/"}>
        <HomeIcon className="mr-2" />
        <span>Logout</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((item) => (
        <ActiveLink key={item.text} {...item}/>
      ))}
    </nav>
  );
};
