// frontend/components/Footer.jsx
import { motion } from "framer-motion";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function Footer() {
  const openEmail = () => {
    const email = "akhileshdamke7860@gmail.com";
    const subject = "Portfolio Contact";
    const body = "Hi Akhilesh,";

    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = mailto;
    } else {
      window.location.href = mailto;
      setTimeout(() => {
        window.open(gmail, "_blank");
      }, 300);
    }
  };

  return (
    <footer id="footer" className="w-full bg-black text-white py-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* Social Links */}
        <div className="flex items-center gap-6">
          <motion.a
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/autumn0w0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
            aria-label="GitHub"
          >
            <IconBrandGithub size={24} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/akhilesh-damke/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin size={24} />
          </motion.a>

          <motion.button
            type="button"
            onClick={openEmail}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-300 hover:text-white transition"
            aria-label="Email"
          >
            <IconMail size={24} />
          </motion.button>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} Akhilesh Damke. Made with ❤️ | Almost all rights reserved.
        </p>
      </div>
    </footer>
  );
}