import React, { useEffect } from "react";
import gsap from "gsap";

const Contacts: React.FC = () => {
  useEffect(() => {
    // GSAP animation for the Contact section when it comes into view
    gsap.fromTo(
      ".contact-section",
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
      id="contact"
      className="contact-section section min-h-screen bg-black text-white flex justify-center items-center text-center py-16"
    >
      <div className="max-w-4xl w-full px-6 py-10 bg-gray-800 rounded-xl shadow-2xl">
        <h2 className="text-4xl font-semibold text-center mb-6">Contact Me</h2>

        {/* Personal Information */}
        <div className="space-y-4 mb-8">
          <p className="text-xl">
            My Name: <span className="font-bold text-blue-400">Ahmed</span>
          </p>
          <p className="text-xl">
            Phone: <span className="font-bold text-blue-400">0557539539</span>
          </p>
          <p className="text-xl">
            Email:{" "}
            <span className="font-bold text-blue-400">202111434@aau.ac.ae</span>
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg w-72 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg w-72 text-black mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded-lg w-72 h-32 text-black mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
