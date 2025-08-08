import React, { useEffect } from "react";
import gsap from "gsap";

const Projects: React.FC = () => {
  useEffect(() => {
    // GSAP animation for the Projects section when it comes into view
    gsap.fromTo(
      ".projects-section",
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
      id="projects"
      className="projects-section section min-h-screen bg-black text-white text-center py-16 px-4"
    >
      <h2 className="text-4xl font-semibold mb-12">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Movie Search App</h3>
          <p className="text-lg text-gray-300">
            Your movie search app allows users to easily browse and discover movies by title, genre, or actor. With a sleek and intuitive interface, users can search for their favorite films, read summaries, check ratings, and even find movie trailers. The app may feature filters like release date, genre, or ratings to refine the search, helping users find exactly what they’re looking for quickly and efficiently. It also includes options for saving favorite movies or sharing them with others.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Quote App</h3>
          <p className="text-lg text-gray-300">
            A Quote App Generator could be an app that provides a random collection of quotes or allows users to browse through different categories, like motivational, love, or wisdom quotes. Users can also save their favorite quotes, share them on social media, or even submit their own.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Tasks App</h3>
          <p className="text-lg text-gray-300">
            A Tasks App is a productivity tool that helps users organize and manage their tasks and to-do lists effectively. It allows users to break down their day-to-day activities into manageable actions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
