import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "SQL", icon: <DiMysql className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    { name: "RESTful APIs", icon: <FaNodeJs className="text-lime-400" /> },
  ];

  return (
    <section
      id="skills"
      className="px-4 md:px-8 py-20
                 bg-slate-100 dark:bg-slate-900
                 opacity-0 animate-fade-in"
    >
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-12
                   text-slate-900 dark:text-white tracking-tight"
      >
        Skills
      </h2>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3
                   gap-6 max-w-5xl mx-auto"
      >
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            style={{ animationDelay: `${index * 80}ms` }}
            className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur
                       p-5 rounded-xl
                       shadow-md border border-slate-200 dark:border-slate-700
                       flex flex-col items-center gap-3
                       hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03]
                       transition-all duration-300
                       opacity-0 animate-slide-up"
          >
            <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>

            <span className="text-sm md:text-base font-medium
                             text-slate-700 dark:text-slate-200">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
