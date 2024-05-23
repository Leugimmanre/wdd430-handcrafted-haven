import { ActiveLink } from "../active-link/ActiveLink";

export const MainMenu = ({ orientation = "vertical" }) => {
  const navItems = [
    { path: "/order/ceramics_and_pottery", text: "Buy" },
    { path: "/contact", text: "Sell" },
    { path: "/about", text: "About" },
    { path: "/contact", text: "Contact" },
    { path: "/login", text: "Login" },
  ];

  const isVertical = orientation === "vertical";

  return (
    <nav
      className={`mt-10 text-center ${isVertical
        ? "flex flex-col w-48"
        : "flex flex-row justify-center space-x-4 mt-0"
        } sm:flex-row sm:justify-center sm:space-x-4 sm:mt-0`}
    >
      {navItems.map((item) => (
        <ActiveLink key={item.text} {...item} />
      ))}
    </nav>
  );
};
