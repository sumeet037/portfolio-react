import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY  
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <footer
      id="contact"
      className="relative bg-linear-to-b from-slate-900 to-slate-950
                 text-slate-300 px-6 md:px-12 py-20
                 overflow-hidden"
    >
      {/* Soft glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto space-y-14">
        
        {/* Get in Touch */}
        <div className="text-center space-y-4 opacity-0 animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Get in Touch
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Open to opportunities, collaborations, and freelance work.
          </p>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-xl mx-auto
                     bg-slate-800/70 backdrop-blur
                     p-6 md:p-7 rounded-2xl shadow-xl
                     space-y-4
                     border border-slate-700
                     opacity-0 animate-slide-up"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full bg-slate-900 border border-slate-700
                       px-4 py-2.5 rounded-lg text-white
                       placeholder-slate-500
                       focus:outline-none focus:ring-2 focus:ring-blue-600
                       transition"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full bg-slate-900 border border-slate-700
                       px-4 py-2.5 rounded-lg text-white
                       placeholder-slate-500
                       focus:outline-none focus:ring-2 focus:ring-blue-600
                       transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full bg-slate-900 border border-slate-700
                       px-4 py-2.5 rounded-lg text-white
                       placeholder-slate-500 resize-none
                       focus:outline-none focus:ring-2 focus:ring-blue-600
                       transition"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700
                       active:scale-[0.98]
                       transition-all duration-200
                       text-white py-2.5 rounded-lg font-medium"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-slate-400 animate-fade-in">
              {status}
            </p>
          )}
        </form>

        {/* Divider */}
        <div
          className="border-t border-slate-800 pt-6
                        flex flex-col md:flex-row
                        items-center justify-between gap-4
                        text-sm"
        >
          {/* Email */}
          <div className="flex items-center gap-2 text-slate-400 hover:text-white transition">
            <Mail size={18} />
            <span>sumeetpal06706@gmail.com</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/sumeet037"
              target="_blank"
              className="p-2 rounded-lg
                         hover:text-white hover:bg-slate-800
                         transition-all duration-200
                         hover:-translate-y-1"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/sumeet06706/"
              target="_blank"
              className="p-2 rounded-lg
                         hover:text-white hover:bg-slate-800
                         transition-all duration-200
                         hover:-translate-y-1"
            >
              <Linkedin />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-slate-500 tracking-wide">
          © {new Date().getFullYear()} Sumeet Pal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
