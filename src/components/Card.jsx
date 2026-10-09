import { useState } from "react";
import { useLanguage } from "../LanguageContext.jsx";

const labels = {
  fr: {
    project: "Projet digital",
    details: "Détails",
    github: "GitHub",
    demo: "Démo",
  },
  en: {
    project: "Digital project",
    details: "Details",
    github: "GitHub",
    demo: "Demo",
  },
};

export default function Card({ project, onOpen }) {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();

  const t = labels[language];
  const isBlue = project.color === "blue";

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex min-w-0 flex-1 flex-col border-2 border-[#171717] bg-white transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center justify-between gap-3 border-b-2 border-[#171717] px-5 py-4">
        <span className="font-mono text-xs font-bold">
          {project.number} / {project.category[language]}
        </span>

        <span
          className={`h-3 w-3 shrink-0 ${
            isBlue ? "bg-[#3157FF]" : "bg-[#FF6B4A]"
          }`}
        />
      </div>

      <div
        className={`flex min-h-48 flex-col justify-between gap-8 p-6 transition-colors duration-300 md:min-h-56 ${
          isBlue ? "bg-[#E8ECFF]" : "bg-[#FFE9E2]"
        }`}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#555555]">
            {t.project}
          </span>

          <span className="font-mono text-[10px] font-bold uppercase text-[#555555]">
            {project.status[language]}
          </span>
        </div>

        <h2
          className={`wrap-break-word text-4xl font-black uppercase leading-[0.9] tracking-tight transition-colors duration-300 md:text-5xl ${
            isHovered
              ? isBlue
                ? "text-[#3157FF]"
                : "text-[#FF6B4A]"
              : "text-[#171717]"
          }`}
        >
          {project.title[language]}
        </h2>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <p className="flex-1 text-sm leading-relaxed text-[#555555]">
          {project.description[language]}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="border border-[#171717]/20 px-2 py-1 font-mono text-[10px] font-bold uppercase"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 border-t border-[#171717]/20 pt-4">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className={`flex flex-1 items-center justify-center gap-2 border-2 border-[#171717] px-3 py-3 font-mono text-[10px] font-bold uppercase text-white transition ${
              isBlue
                ? "bg-[#3157FF] hover:bg-[#FF6B4A]"
                : "bg-[#FF6B4A] hover:bg-[#3157FF]"
            }`}
          >
            {t.details} <span aria-hidden="true">↗</span>
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center border-2 border-[#171717] px-4 py-3 font-mono text-[10px] font-bold uppercase transition hover:bg-[#171717] hover:text-white"
            >
              {t.github}
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center border-2 border-[#171717] px-4 py-3 font-mono text-[10px] font-bold uppercase transition hover:bg-[#171717] hover:text-white"
            >
              {t.demo}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}