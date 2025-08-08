import React from "react";

const Home: React.FC = () => (
  <section className="min-h-screen bg-black text-white flex justify-center items-center text-center py-16 px-4">
    <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section - Text */}
      <div className="flex flex-col justify-center items-start space-y-4">
        <h1 className="text-5xl font-bold">Hello, I'm Ahmed!</h1>
        <p className="text-2xl">I am a passionate Frontend Developer</p>
        <p className="text-lg">
          I specialize in building responsive and interactive user interfaces using React, Tailwind CSS, TypeScript, and more.
        </p>
      </div>

      {/* Right Section - Photo */}
      <div className="flex justify-center items-center">
        <img
          src="https://via.placeholder.com/300" // Replace this URL with your photo URL
          alt="Ahmed"
          className="rounded-full w-48 h-48 object-cover shadow-xl"
        />
      </div>
    </div>
  </section>
);

export default Home;
