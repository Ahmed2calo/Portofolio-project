import React from "react";
import { Link } from "react-scroll";
import gsap from "gsap";

const Navbar: React.FC = () => {
  React.useEffect(() => {
    // GSAP animation for the navbar items when the page loads
    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>
        <div className="space-x-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400 nav-item"
          >
            Home
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400 nav-item"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400 nav-item"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400 nav-item"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
