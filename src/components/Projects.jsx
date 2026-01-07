export default function Projects() {
  const projects = [
    {
      title: "Chatty - Realtime Chat Application",
      description:
        "A real-time chat application built using the MERN stack with user authentication and responsive UI.",
      tech: "React, Node.js, Express, MongoDB, Socket.io",
      github: "https://github.com/sumeet037/mern-chat-app",
      live: "https://mern-chat-app-j8up.onrender.com/",
    },
    {
      title: "SneakerWorld - E-commerce Website",
      description:
        "A responsive e-commerce web application with product listing, cart functionality, and API integration.",
      tech: "React, Tailwind CSS, REST API",
      github: "https://github.com/sumeet037/sneakerworld-mern",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="px-4 md:px-8 py-24 max-w-6xl mx-auto opacity-0 animate-fade-in"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-14 text-slate-900 dark:text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 120}ms` }}
            className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur
                       p-6 md:p-7 rounded-2xl shadow-md
                       border border-slate-200 dark:border-slate-700
                       flex flex-col hover:shadow-xl hover:-translate-y-1
                       transition-all duration-300
                       opacity-0 animate-slide-up"
          >
            <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">
              {project.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>

            <p className="text-sm font-medium mb-6 text-slate-700 dark:text-slate-300">
              Tech: <span className="font-normal">{project.tech}</span>
            </p>

            {/* Buttons */}
            <div className="mt-auto flex gap-4">
              {/* GitHub */}
              <a
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2
                           px-4 py-2 text-sm font-medium
                           rounded-lg border border-slate-300 dark:border-slate-600
                           text-slate-800 dark:text-slate-200
                           hover:bg-slate-900 hover:text-white
                           dark:hover:bg-white dark:hover:text-slate-900
                           transition"
              >
                {/* GitHub Icon */}
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.385.6.113.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.338.727-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.37.823 1.096.823 2.21 0 1.595-.014 2.877-.014 3.27 0 .322.19.694.8.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>

              {/* Live Demo */}
              <a
                href={project.live}
                target="_blank"
                className="inline-flex items-center gap-2
                           px-4 py-2 text-sm font-medium
                           rounded-lg bg-blue-600 text-white
                           hover:bg-blue-700 transition"
              >
                {/* External Link Icon */}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 3h7v7m0-7L10 14M5 5h6a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                  />
                </svg>
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

