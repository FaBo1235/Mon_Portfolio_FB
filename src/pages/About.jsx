import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext.jsx";
import translations from "../data/translations.js";

export default function About() {
const { language } = useLanguage();
const t = translations[language];
const about = t.about;

return ( <section className="min-h-screen bg-[#F4F1EA]"> <div className="mx-auto flex max-w-7xl flex-col px-6 md:px-10">
{/* En-tête */} <div className="flex items-center justify-between border-b-2 border-[#171717] py-5"> <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
{t.nav.about} </span> <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
02 / 05 </span> </div>

    {/* Présentation */}
    <div className="flex flex-col py-16 md:py-24">
      <p className="mb-6 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#3157FF]">
        {about.eyebrow}
      </p>

      <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-8xl">
        {about.title}
      </h1>

      <div className="mt-10 flex flex-col gap-5 md:ml-auto md:max-w-2xl">
        <p className="text-xl font-bold leading-relaxed md:text-2xl">
          {about.intro}
        </p>

        <p className="text-sm leading-relaxed text-[#555555] md:text-base">
          {about.description}
        </p>
      </div>
    </div>

    {/* Chronologie */}
    <div className="flex flex-col border-t-2 border-[#171717]">
      <div className="flex flex-col gap-3 py-8 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-black uppercase md:text-3xl">
          {about.timelineTitle}
        </h2>

        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#555555]">
          01 — 04
        </span>
      </div>

      <div className="flex flex-col">
        {about.experiences.map((experience, index) => (
          <article
            key={`${experience.title}-${experience.period}`}
            className="flex flex-col gap-5 border-t border-[#171717]/30 py-8 md:flex-row md:gap-10 md:py-10"
          >
            {/* Date et repère */}
            <div className="flex items-start justify-between gap-4 md:w-56 md:shrink-0">
              <span className="max-w-48 font-mono text-[10px] font-bold uppercase leading-relaxed tracking-wider text-[#555555]">
                {experience.period}
              </span>

              <span
                className={`mt-1 h-3 w-3 shrink-0 ${
                  index % 2 === 0
                    ? "bg-[#3157FF]"
                    : "bg-[#FF6B4A]"
                }`}
                aria-hidden="true"
              />
            </div>

            {/* Détails de l'expérience */}
            <div className="flex flex-1 flex-col gap-4">
              <span
                className={`font-mono text-[10px] font-bold uppercase tracking-[0.15em] ${
                  index % 2 === 0
                    ? "text-[#3157FF]"
                    : "text-[#FF6B4A]"
                }`}
              >
                {experience.category}
              </span>

              <h3 className="text-2xl font-black uppercase leading-tight md:text-3xl">
                {experience.title}
              </h3>

              <p className="font-bold">{experience.company}</p>

              <p className="max-w-2xl text-sm leading-relaxed text-[#555555] md:text-base">
                {experience.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>

    {/* Conclusion */}
    <div className="my-12 flex flex-col gap-6 border-2 border-[#171717] bg-white p-6 md:my-16 md:flex-row md:items-center md:justify-between md:p-10">
      <div className="flex flex-col gap-4">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#3157FF]">
          {t.nav.about}
        </p>

        <h2 className="max-w-xl text-3xl font-black uppercase leading-tight md:text-4xl">
          {about.closingTitle}
        </h2>

        <p className="max-w-xl text-sm leading-relaxed text-[#555555]">
          {about.closingText}
        </p>
      </div>

      <Link
        to="/contact"
        className="flex shrink-0 items-center justify-center gap-3 border-2 border-[#171717] bg-[#3157FF] px-6 py-4 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#FF6B4A]"
      >
        {about.contactButton}
        <span aria-hidden="true">↗</span>
      </Link>
    </div>
  </div>
</section>

);
}
