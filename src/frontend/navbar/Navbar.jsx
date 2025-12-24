import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function Navbar({sections}) {
  const navItems = [
    {
      name: "Home",
      ref: sections.home,
      icon: <IconHome className="h-5 w-5" />,
    },
    {
      name: "About",
      ref: sections.about,
      icon: <IconUser className="h-5 w-5" />,
    },
    {
      name: "Contact",
      ref: sections.contact,
      icon: <IconMessage className="h-5 w-5" />,
    },
  ];

  return (
    <div className="sticky top-0 z-50 flex justify-center">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
