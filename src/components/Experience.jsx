const Experience = () => {
  const experience = [
    {
      role: "Sports Analyst",
      company: "Hudl Pvt Ltd.",
      duration: "July 2025 - Nov 2025",
      description: [
        "Transformed complex sports footage into actionable performance insights for global clients.",
        "Used advanced analytics tools and structured workflows to ensure high data accuracy.",
        "Collaborated with cross-functional teams in a fast-paced, deadline-driven environment.",
        "Contributed to data validation, reporting, and quality assurance processes.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-gray-50 dark:bg-slate-900
                 opacity-0 animate-fade-in"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-14
                     text-gray-800 dark:text-white
                     tracking-tight"
        >
          Experience
        </h2>

        {experience.map((item, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 120}ms` }}
            className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur
                       p-6 md:p-8 rounded-2xl
                       shadow-md border border-gray-200 dark:border-slate-700
                       mb-8
                       hover:shadow-xl hover:-translate-y-1
                       transition-all duration-300
                       opacity-0 animate-slide-up"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5 gap-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {item.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.company}
                </p>
              </div>

              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.duration}
              </span>
            </div>

            {/* Description */}
            <ul
              className="list-disc list-inside space-y-3
                           text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
