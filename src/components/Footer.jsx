import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext.jsx";

const footerContent = {
  fr: {
    role: "Junior Software Engineer",
    intro: "Je transforme des idées en expériences web utiles et intuitives.",
    navigation: "NAVIGATION",
    links: [
      { label: "Accueil", path: "/" },
      { label: "À propos", path: "/about" },
      { label: "Projets", path: "/portfolio" },
      { label: "Services", path: "/services" },
      { label: "Contact", path: "/contact" },
    ],
    social: "RETROUVEZ-MOI",
    contact: "UN PROJET EN TÊTE ?",
    contactLink: "Parlons-en ↗",
    rights: "Tous droits réservés.",
    backToTop: "RETOUR EN HAUT ↑",
  },
  en: {
    role: "Junior Software Engineer",
    intro: "I turn ideas into useful and intuitive web experiences.",
    navigation: "NAVIGATION",
    links: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Projects", path: "/portfolio" },
      { label: "Services", path: "/services" },
      { label: "Contact", path: "/contact" },
    ],
    social: "FIND ME ONLINE",
    contact: "HAVE A PROJECT IN MIND?",
    contactLink: "Let's talk ↗",
    rights: "All rights reserved.",
    backToTop: "BACK TO TOP ↑",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = footerContent[language];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#171717] px-6 pb-8 pt-16 text-[#F4F1EA] md:px-12 md:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-12 border-b border-white/20 pb-12 md:flex-row md:items-start">
          <div className="max-w-md">
            <Link
              to="/"
              className="text-3xl font-black uppercase tracking-tight transition-colors hover:text-[#FF6B4A] md:text-4xl"
            >
              FANNY<span className="text-[#3157FF]">.</span>
            </Link>

            <p className="mt-4 text-sm font-bold uppercase tracking-widest text-[#FF6B4A]">
              {t.role}
            </p>

            <p className="mt-4 max-w-sm leading-relaxed text-white/65">
              {t.intro}
            </p>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-20">
            <div>
              <h2 className="mb-5 text-xs font-bold tracking-[0.2em] text-white/50">
                {t.navigation}
              </h2>

              <nav className="flex flex-col items-start gap-3">
                {t.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm transition-colors hover:text-[#FF6B4A]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h2 className="mb-5 text-xs font-bold tracking-[0.2em] text-white/50">
                {t.contact}
              </h2>

              <Link
                to="/contact"
                className="inline-block border-b border-[#3157FF] pb-1 text-lg font-bold transition-colors hover:text-[#FF6B4A]"
              >
                {t.contactLink}
              </Link>

              <div className="mt-8">
                <h2 className="mb-4 text-xs font-bold tracking-[0.2em] text-white/50">
                  {t.social}
                </h2>

                <a
                  href="https://github.com/FaBo1235"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm transition-colors hover:text-[#FF6B4A]"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {year} Fanny Boireau. {t.rights}
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="self-start font-bold tracking-widest transition-colors hover:text-[#F4F1EA] sm:self-auto"
          >
            {t.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
