import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Kwame <span className="wave">👋</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 gradient-text">
            Full-Stack Developer
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Building digital solutions that make an impact. Based in Accra,
            Ghana 🇬🇭
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-primary text-primary hover:bg-blue-900 hover:bg-opacity-20 px-6 py-3 rounded-lg font-medium transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="Kwame Asante"
                className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-dark"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-accent text-dark px-4 py-2 rounded-lg font-bold">
              3+ Years Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
