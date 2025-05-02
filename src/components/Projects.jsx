import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AfroShop E-Commerce",
    description:
      "An e-commerce platform for African artisans to sell their products globally with multi-currency support.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    gradient: "from-primary to-secondary",
    technologies: [
      { name: "React", color: "text-primary" },
      { name: "Node.js", color: "text-secondary" },
      { name: "MongoDB", color: "text-accent" },
      { name: "Payment Gateway", color: "text-purple-400" },
    ],
    links: { github: "#", demo: "#" },
  },
  {
    title: "HealthTrack Ghana",
    description:
      "A telemedicine platform connecting patients with doctors across Ghana, featuring appointment scheduling and e-prescriptions.",
    image:
      "https://images.unsplash.com/photo-1581092921461-39b2f1c9ff0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    gradient: "from-secondary to-accent",
    technologies: [
      { name: "Vue.js", color: "text-primary" },
      { name: "Python", color: "text-secondary" },
      { name: "PostgreSQL", color: "text-accent" },
      { name: "WebRTC", color: "text-blue-400" },
    ],
    links: { github: "#", demo: "#" },
  },
  {
    title: "AgriConnect",
    description:
      "A marketplace connecting small-scale farmers in Ghana with buyers, featuring real-time price tracking and logistics.",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    gradient: "from-accent to-purple-500",
    technologies: [
      { name: "React Native", color: "text-primary" },
      { name: "Firebase", color: "text-secondary" },
      { name: "Google Maps API", color: "text-accent" },
      { name: "Push Notifications", color: "text-green-400" },
    ],
    links: { github: "#", demo: "#" },
  },
  {
    title: "EduLink Africa",
    description:
      "An educational platform providing free learning resources for African students, with interactive quizzes and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    gradient: "from-purple-500 to-pink-500",
    technologies: [
      { name: "Next.js", color: "text-primary" },
      { name: "Strapi", color: "text-secondary" },
      { name: "PostgreSQL", color: "text-accent" },
      { name: "Interactive Content", color: "text-yellow-400" },
    ],
    links: { github: "#", demo: "#" },
  },
  {
    title: "FinTrack Mobile",
    description:
      "A personal finance app helping users track expenses, set budgets, and analyze spending patterns with beautiful visualizations.",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    gradient: "from-pink-500 to-red-500",
    technologies: [
      { name: "Flutter", color: "text-primary" },
      { name: "Firebase", color: "text-secondary" },
      { name: "Dart", color: "text-accent" },
      { name: "Data Visualization", color: "text-blue-400" },
    ],
    links: { github: "#", demo: "#" },
  },
  {
    title: "Eventify Ghana",
    description:
      "An event management platform for discovering and booking tickets to events across Ghana with social features.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    gradient: "from-red-500 to-yellow-500",
    technologies: [
      { name: "Angular", color: "text-primary" },
      { name: "NestJS", color: "text-secondary" },
      { name: "MongoDB", color: "text-accent" },
      { name: "Social Features", color: "text-purple-400" },
    ],
    links: { github: "#", demo: "#" },
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-dark rounded-xl mt-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold gradient-text inline-block">
          My Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was built to solve a
          specific problem or explore new technologies.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="project-card bg-darker rounded-xl overflow-hidden"
          >
            <div
              className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className={`text-xs bg-gray-800 ${tech.color} px-2 py-1 rounded`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <a
                  href={project.links.github}
                  className="text-primary hover:text-blue-400 transition flex items-center"
                >
                  <Github className="mr-1" /> Code
                </a>
                <a
                  href={project.links.demo}
                  className="text-secondary hover:text-green-400 transition flex items-center"
                >
                  <ExternalLink className="mr-1" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-blue-900 hover:bg-opacity-20 rounded-lg font-medium transition"
        >
          <Github className="mr-2" /> View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
