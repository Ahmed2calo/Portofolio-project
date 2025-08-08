import React, { useEffect } from "react";
import gsap from "gsap";

const Home: React.FC = () => {
  useEffect(() => {
    // GSAP animation for the Home section when it comes into view
    gsap.fromTo(
      ".home-section",
      {
        opacity: 0,
        y: 50, // Start from below
      },
      {
        opacity: 1,
        y: 0, // Animate to the original position
        duration: 1.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section
      id="home"
      className="home-section section min-h-screen bg-black text-white flex justify-center items-center text-center py-16"
    >
      <h1 className="text-5xl font-bold">Welcome to My Portfolio!</h1>
    </section>
  );
};

export default Home;
