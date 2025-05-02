import React from "react";
import {
  Code,
  Server,
  GitBranch,
  Palette,
  Smartphone,
  Search,
  BarChart,
  Megaphone,
} from "lucide-react";

const skillGroups = [
  {
    category: "Frontend",
    dotColor: "bg-primary",
    skills: [
      { name: "React", icon: Code, iconColor: "text-primary" },
      { name: "Vue.js", icon: Code, iconColor: "text-green-500" },
      { name: "Angular", icon: Code, iconColor: "text-red-500" },
      { name: "JavaScript", icon: Code, iconColor: "text-yellow-400" },
      { name: "CSS3", icon: Code, iconColor: "text-blue-400" },
      { name: "HTML5", icon: Code, iconColor: "text-orange-500" },
      { name: "Sass", icon: Code, iconColor: "text-pink-500" },
      { name: "Bootstrap", icon: Code, iconColor: "text-purple-500" },
      { name: "Tailwind", icon: Code, iconColor: "text-cyan-400" },
    ],
  },
  {
    category: "Backend",
    dotColor: "bg-secondary",
    skills: [
      { name: "Node.js", icon: Server, iconColor: "text-green-600" },
      { name: "Express", icon: Server, iconColor: "text-gray-400" },
      { name: "Python", icon: Code, iconColor: "text-blue-500" },
      { name: "MongoDB", icon: Server, iconColor: "text-blue-400" },
      { name: "PostgreSQL", icon: Server, iconColor: "text-blue-300" },
      { name: "Firebase", icon: Server, iconColor: "text-yellow-500" },
      { name: "REST APIs", icon: Code, iconColor: "text-gray-300" },
      { name: "GraphQL", icon: Code, iconColor: "text-purple-400" },
    ],
  },
  {
    category: "DevOps & Tools",
    dotColor: "bg-accent",
    skills: [
      { name: "Git", icon: GitBranch, iconColor: "text-orange-600" },
      { name: "GitHub", icon: GitBranch, iconColor: "text-gray-300" },
      { name: "Docker", icon: Server, iconColor: "text-blue-400" },
      { name: "AWS", icon: Server, iconColor: "text-yellow-500" },
      { name: "Nginx", icon: Server, iconColor: "text-green-500" },
      { name: "Linux", icon: Code, iconColor: "text-gray-400" },
      { name: "Jenkins", icon: Server, iconColor: "text-red-500" },
    ],
  },
  {
    category: "Design & Other",
    dotColor: "bg-purple-500",
    skills: [
      { name: "Figma", icon: Palette, iconColor: "text-purple-400" },
      { name: "Adobe XD", icon: Palette, iconColor: "text-pink-400" },
      { name: "Responsive", icon: Smartphone, iconColor: "text-blue-300" },
      { name: "SEO", icon: Search, iconColor: "text-blue-500" },
      { name: "Analytics", icon: BarChart, iconColor: "text-green-400" },
      { name: "Marketing", icon: Megaphone, iconColor: "text-yellow-400" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold gradient-text inline-block">
          My Skills
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Here are the technologies and tools I work with on a daily basis to
          create amazing digital experiences.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="bg-dark p-6 rounded-xl border border-gray-800"
          >
            <div className="flex items-center mb-4">
              <div
                className={`w-3 h-3 rounded-full ${group.dotColor} mr-2`}
              ></div>
              <h3 className="font-semibold">{group.category}</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="tech-icon flex flex-col items-center"
                >
                  <skill.icon className={`text-4xl ${skill.iconColor} mb-2`} />
                  <span className="text-xs">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
