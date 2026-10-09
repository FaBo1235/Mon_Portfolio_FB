import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext.jsx";
import translations from "../data/translations.js";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const technologies = [
    "React",
    "JavaScript",
    "PHP",
    "Node.js",
    "MySQL",
    "Figma",
  ];

  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col bg-[#F4F1EA]">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 md:px-10">
        {/* En-tête de section */}
        <div className="flex items-center justify-between border-b-2 border-[#171717] py-5">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
            {t.status.title}
          </span>

          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
            01 / 05
          </span>
        </div>

        {/* Présentation principale */}
        <div className="flex flex-1 flex-col justify-center py-12 md:py-16">
          <p className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#3157FF]">
            {t.home.location}
          </p>

          <h1
            className="flex flex-col text-[clamp(4rem,15vw,11rem)] font-black uppercase leading-[0.78] tracking-[-0.07em]"
            aria-label="Fanny Boireau"
          >
            <span>FANNY</span>

            <span className="ml-[8vw] text-[#3157FF]">
              BOIREAU<span className="text-[#FF6B4A]">.</span>
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-6 md:ml-auto md:max-w-xl">
            <p className="text-lg leading-relaxed text-[#555555] md:text-xl">
              {t.home.intro}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/portfolio"
                className="flex items-center justify-center gap-3 border-2 border-[#171717] bg-[#3157FF] px-6 py-4 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#FF6B4A]"
              >
                {t.home.viewProjects}
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                to="/about"
                className="flex items-center justify-center gap-3 border-2 border-[#171717] px-6 py-4 font-mono text-xs font-bold uppercase tracking-wider transition-colors hover:bg-[#171717] hover:text-white"
              >
                {t.home.aboutMe}
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-col gap-4 border-t-2 border-[#171717] py-6 md:flex-row md:items-center md:justify-between">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#555555]">
            {t.home.technologies}
          </span>

          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="font-mono text-xs font-bold uppercase"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}