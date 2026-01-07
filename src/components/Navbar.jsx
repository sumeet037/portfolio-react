import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    const navHeight = 80; // adjust if needed

    if (section) {
      const y =
        section.getBoundingClientRect().top + window.pageYOffset - navHeight;

      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo / Name */}
        <button
          onClick={() => handleScroll("home")}
          className="group font-bold text-lg md:text-xl transition"
        >
          <span className="text-white group-hover:text-blue-500 transition-colors duration-300">
            Sumeet
          </span>
          <span className="text-blue-500 group-hover:text-white transition-colors duration-300">
            .dev
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["about", "skills", "projects", "experience", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className="hover:text-blue-500 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white hover:text-blue-400 transition duration-300"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-slate-900/95 backdrop-blur px-6 pb-6 flex flex-col gap-5">
          {["about", "skills", "projects", "experience", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => handleScroll(item)}
                className="text-left py-3 border-b border-white/10
                text-base hover:text-blue-400 active:scale-95 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
