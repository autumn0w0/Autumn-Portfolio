import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4" />,
    },
  ];

  return (
    <div className="sticky top-0 left-0 w-full z-50">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
