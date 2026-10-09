import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext.jsx";
import projects from "../data/projects.js";
import Card from "../components/Card.jsx";

const labels = {
  fr: {
    eyebrow: "Une sélection de projets",
    heading: "SELECTED",
    headingAccent: "WORKS.",
    description:
      "Des projets conçus pour apprendre, résoudre des problèmes et transformer des idées en applications fonctionnelles.",
    projectCount: "projets présentés",
    filtersTitle: "Filtrer les projets",
    filters: [
      { label: "Tous", value: "all" },
      { label: "Full Stack", value: "fullstack" },
      { label: "Application web", value: "webapp" },
    ],
    closingTitle: "Un projet en tête ?",
    contact: "Parlons-en",
    project: "Projet",
    status: "Statut",
    details: "Détails",
    close: "Fermer les détails",
    github: "Voir le code GitHub",
    demo: "Voir la démo",
  },
  en: {
    eyebrow: "A selection of projects",
    heading: "SELECTED",
    headingAccent: "WORKS.",
    description:
      "Projects built to learn, solve problems and turn ideas into functional applications.",
    projectCount: "projects showcased",
    filtersTitle: "Filter projects",
    filters: [
      { label: "All", value: "all" },
      { label: "Full Stack", value: "fullstack" },
      { label: "Web application", value: "webapp" },
    ],
    closingTitle: "Have a project in mind?",
    contact: "Let's talk",
    project: "Project",
    status: "Status",
    details: "Details",
    close: "Close project details",
    github: "View GitHub code",
    demo: "View live demo",
  },
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const { language } = useLanguage();

  const t = labels[language];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) => project.categoryKey === activeFilter
        );

  return (
    <section className="min-h-screen bg-[#F4F1EA]">
      <div className="mx-auto flex max-w-7xl flex-col px-6 md:px-10">
        {/* En-tête */}
        <div className="flex items-center justify-between border-b-2 border-[#171717] py-5">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
            {t.eyebrow}
          </span>

          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
            03 / 05
          </span>
        </div>

        {/* Introduction */}
        <div className="flex flex-col py-16 md:py-24">
          <p className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#3157FF]">
            {t.eyebrow}
          </p>

          <h1 className="text-6xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-8xl lg:text-9xl">
            {t.heading}
            <span className="block text-[#3157FF]">
              {t.headingAccent}
            </span>
          </h1>

          <div className="mt-8 flex flex-col gap-4 md:ml-auto md:max-w-xl">
            <p className="text-lg leading-relaxed text-[#555555] md:text-xl">
              {t.description}
            </p>

            <p className="font-mono text-xs font-bold uppercase tracking-widest">
              {projects.length} {t.projectCount}
            </p>
          </div>
        </div>

        {/* Filtres */}
        <div className="flex flex-col gap-4 border-y-2 border-[#171717] py-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-xs font-bold uppercase tracking-widest">
            {t.filtersTitle}
          </span>

          <div className="flex flex-wrap gap-2">
            {t.filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={activeFilter === filter.value}
                className={`border-2 border-[#171717] px-4 py-2 font-mono text-[10px] font-bold uppercase transition ${
                  activeFilter === filter.value
                    ? "bg-[#171717] text-white"
                    : "bg-transparent text-[#171717] hover:bg-[#3157FF] hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cartes : Flexbox uniquement */}
        <div className="flex flex-col gap-6 py-10 md:flex-row md:flex-wrap md:items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex min-w-0 flex-1 basis-full md:basis-[calc(50%-12px)]"
            >
              <Card
                project={project}
                onOpen={setSelectedProject}
              />
            </div>
          ))}
        </div>

        {/* Appel à l'action */}
        <div className="flex flex-col gap-5 border-t-2 border-[#171717] py-12 md:flex-row md:items-center md:justify-between">
          <p className="text-2xl font-black uppercase md:text-3xl">
            {t.closingTitle}
          </p>

          <Link
            to="/contact"
            className="flex items-center justify-center gap-3 border-2 border-[#171717] bg-[#3157FF] px-6 py-4 font-mono text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#FF6B4A]"
          >
            {t.contact} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      {/* Fenêtre de détails */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-[#171717]/80 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="my-auto flex w-full max-w-2xl flex-col border-2 border-[#171717] bg-[#F4F1EA]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b-2 border-[#171717] p-5">
              <span className="font-mono text-xs font-bold uppercase">
                {t.project} {selectedProject.number}
              </span>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label={t.close}
                className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#171717] text-xl transition hover:bg-[#FF6B4A] hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col gap-6 p-6 md:p-10">
              <h2
                id="project-modal-title"
                className="wrap-break-word text-4xl font-black uppercase leading-tight md:text-6xl"
              >
                {selectedProject.title[language]}
              </h2>

              <p className="leading-relaxed text-[#555555]">
                {selectedProject.description[language]}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-[#171717]/30 px-3 py-2 font-mono text-xs font-bold uppercase"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <p className="font-mono text-xs font-bold uppercase">
                {t.status}: {selectedProject.status[language]}
              </p>

              <div className="flex flex-wrap gap-3">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border-2 border-[#171717] px-5 py-3 font-mono text-xs font-bold uppercase transition hover:bg-[#171717] hover:text-white"
                  >
                    {t.github} ↗
                  </a>
                )}

                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="border-2 border-[#171717] bg-[#3157FF] px-5 py-3 font-mono text-xs font-bold uppercase text-white transition hover:bg-[#FF6B4A]"
                  >
                    {t.demo} ↗
                  </a>
                )}
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}