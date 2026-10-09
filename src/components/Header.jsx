import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../LanguageContext.jsx";
import translations from "../data/translations.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];

  const links = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.projects, path: "/portfolio" },
    { label: t.nav.services, path: "/services" },
    { label: t.nav.contact, path: "/contact" },
  ];

  function selectLanguage(newLanguage) {
    changeLanguage(newLanguage);
    setMenuOpen(false);
  }

  const linkClass = ({ isActive }) =>
    `text-xs font-bold uppercase tracking-wider transition-colors ${
      isActive
        ? "text-[#3157FF]"
        : "text-[#171717] hover:text-[#FF6B4A]"
    }`;

  return (
    <header className="relative z-50 border-b-2 border-[#171717] bg-[#F4F1EA]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-10">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="shrink-0 text-lg font-black uppercase tracking-tight"
        >
          FB<span className="text-[#3157FF]">.</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <span className="mr-2 h-2 w-2 rounded-full bg-[#3157FF]" />
          <span className="mr-3 font-mono text-[10px] font-bold uppercase">
            {t.status.available}
          </span>

          <button
            type="button"
            onClick={() => selectLanguage("fr")}
            aria-pressed={language === "fr"}
            className={`px-2 py-1 font-mono text-xs font-bold ${
              language === "fr"
                ? "bg-[#171717] text-white"
                : "hover:text-[#3157FF]"
            }`}
          >
            FR
          </button>

          <button
            type="button"
            onClick={() => selectLanguage("en")}
            aria-pressed={language === "en"}
            className={`px-2 py-1 font-mono text-xs font-bold ${
              language === "en"
                ? "bg-[#171717] text-white"
                : "hover:text-[#3157FF]"
            }`}
          >
            EN
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border-2 border-[#171717] lg:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-[#171717] transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-[#171717] transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-[#171717] transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col border-b-2 border-[#171717] bg-[#171717] px-6 py-6 text-white lg:hidden">
          <nav className="flex flex-col">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-white/20 py-4 text-sm font-bold uppercase tracking-wider ${
                    isActive ? "text-[#3157FF]" : "hover:text-[#FF6B4A]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-6 flex items-center justify-between">
            <span className="font-mono text-xs font-bold uppercase">
              {t.status.available}
            </span>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => selectLanguage("fr")}
                aria-pressed={language === "fr"}
                className={`px-3 py-2 font-mono text-xs font-bold ${
                  language === "fr"
                    ? "bg-white text-[#171717]"
                    : "border border-white text-white"
                }`}
              >
                FR
              </button>

              <button
                type="button"
                onClick={() => selectLanguage("en")}
                aria-pressed={language === "en"}
                className={`px-3 py-2 font-mono text-xs font-bold ${
                  language === "en"
                    ? "bg-white text-[#171717]"
                    : "border border-white text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}