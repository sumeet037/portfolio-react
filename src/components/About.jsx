export default function About() {
  return (
    <section
      id="about"
      className="px-4 md:px-8 py-20 max-w-4xl mx-auto
                 opacity-0 animate-slide-up animation-delay-200"
    >
      <h2
        className="text-2xl md:text-3xl font-bold mb-8
                   tracking-tight text-center
                   text-slate-900 dark:text-white"
      >
        About Me
      </h2>

      <div
        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur
                   p-6 md:p-8 rounded-2xl shadow-lg
                   border border-slate-200 dark:border-slate-700
                   hover:shadow-xl hover:-translate-y-1
                   transition-all duration-300"
      >
        <p
          className="text-sm md:text-base leading-7
                     text-gray-700 dark:text-gray-300"
        >
          I am a B.Sc. Information Technology graduate with hands-on experience
          in MERN stack development and professional exposure as a Sports Data
          Analyst at Hudl. I enjoy building scalable web applications, solving
          real-world problems, and continuously improving my technical skills.
          <br />
          <br />I am currently seeking opportunities as a Software Developer
          where I can contribute to impactful projects and grow as a
          professional.
        </p>
      </div>
    </section>
  );
}
