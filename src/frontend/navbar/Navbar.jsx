import { useState, useEffect } from "react";
import logoImg from '../images/logo/logo.png';

const Navbar = ({ sections }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionRef, sectionName) => {
    setActiveSection(sectionName);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "Skills", key: "skills" },
    { name: "Experience", key: "experience" },
    { name: "Projects", key: "projects" },
    { name: "About Me", key: "about" },
    { name: "Testimonials", key: "testimonials" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        width: "calc(100% - 4rem)",
        maxWidth: "1400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: "auto",
      }}
    >
      {/* Main Navbar Container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: isSticky ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "50px",
          padding: "0.5rem 1rem",
          boxShadow: isSticky 
            ? "0 8px 32px rgba(0, 0, 0, 0.4)" 
            : "0 4px 20px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Logo Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            padding: "0.25rem 0.75rem",
          }}
          onClick={() => scrollToSection(sections.home, "home")}
        >
          <img
            src={logoImg}
            alt="Logo"
            style={{
              width: "32px",
              height: "32px",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Navigation Items */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            marginLeft: "1.5rem",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollToSection(sections[item.key], item.key)}
              style={{
                padding: "0.65rem 1.25rem",
                fontSize: "0.9rem",
                fontWeight: "500",
                color: activeSection === item.key ? "#ffffff" : "#b0b0b0",
                backgroundColor:
                  activeSection === item.key
                    ? "rgba(255, 255, 255, 0.15)"
                    : "transparent",
                border: "none",
                borderRadius: "25px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.key) {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                  e.target.style.color = "#ffffff";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.key) {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#b0b0b0";
                }
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Contact Me Button */}
      <button
        onClick={() => scrollToSection(sections.contact, "contact")}
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "0.9rem",
          fontWeight: "500",
          color: "#ffffff",
          backgroundColor: isSticky ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "25px",
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          whiteSpace: "nowrap",
          boxShadow: isSticky 
            ? "0 8px 32px rgba(0, 0, 0, 0.4)" 
            : "0 4px 20px rgba(0, 0, 0, 0.3)",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
          e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = isSticky ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.6)";
          e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
        }}
      >
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;