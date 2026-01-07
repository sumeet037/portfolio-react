export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-8
                 bg-linear-to-b from-slate-900 via-slate-900 to-slate-800
                 animate-fade-in"
    >
      {/* Name */}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white
                   tracking-tight
                   opacity-0 animate-slide-up animation-delay-200"
      >
        Sumeet Pal
      </h1>

      {/* Role */}
      <p
        className="mt-4 text-base sm:text-lg md:text-xl text-slate-300
                   opacity-0 animate-slide-up animation-delay-400"
      >
        Full-Stack Web Developer | MERN Stack
      </p>

      {/* Short intro */}
      <p
        className="mt-3 max-w-xl text-sm sm:text-base text-slate-400 leading-relaxed
                   opacity-0 animate-slide-up animation-delay-600"
      >
        I build modern, scalable web applications using the MERN stack and
        modern JavaScript technologies.
      </p>

      {/* CTA Buttons */}
      <div
        className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto
                   opacity-0 animate-slide-up animation-delay-800"
      >
        <a
          href="https://drive.google.com/file/d/1OYCPQ8wUbJU_07EQ7XKdopLI5x1ExGOU/view?usp=drive_link"
          target="_blank"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-center font-medium
                     hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg
                     transition-all duration-300"
        >
          View Resume
        </a>
      </div>
      {/* Scroll Hint */}
      <div className="absolute bottom-8 text-slate-400 text-sm animate-bounce z-10">
        ↓ Scroll
      </div>
    </section>
  );
}
