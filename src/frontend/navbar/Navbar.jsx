import { FloatingNav } from "../components/ui/floating-navbar";
import { 
  IconHome, 
  IconUser, 
  IconCode, 
  IconBriefcase, 
  IconRocket,
  IconStar
} from "@tabler/icons-react";

export default function Navbar({ sections }) {
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
      name: "Skills",
      ref: sections.skills,
      icon: <IconCode className="h-5 w-5" />,
    },
    {
      name: "Experience",
      ref: sections.experience,
      icon: <IconBriefcase className="h-5 w-5" />,
    },
    {
      name: "Projects",
      ref: sections.projects,
      icon: <IconRocket className="h-5 w-5" />,
    },
    {
      name: "Testimonials",
      ref: sections.testimonials,
      icon: <IconStar className="h-5 w-5" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
}