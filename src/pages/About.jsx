import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext.jsx";
import translations from "../data/translations.js";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="bg-[#F4F1EA] text-[#171717]">
      {/* INTRODUCTION */}
      <section className="px-6 pb-16 pt-16 md:px-12 md:pb-24 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-[#3157FF]">
            {t.eyebrow}
          </p>

          <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            {t.title}
          </h1>

          <p className="mt-10 max-w-3xl text-xl font-medium leading-relaxed md:text-2xl">
            {t.intro}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#171717]/70 md:text-lg">
            {t.description}
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-4 border-b border-[#171717]/20 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-black uppercase md:text-5xl">
              {t.timelineTitle}
            </h2>

            <span className="text-sm font-bold text-[#3157FF]">
              01 — 05
            </span>
          </div>

          <div className="flex flex-col">
            {t.experiences.map((experience) => (
              <article
                key={`${experience.period}-${experience.company}`}
                className="flex flex-col gap-5 border-b border-[#171717]/20 py-8 md:flex-row md:gap-12 md:py-10"
              >
                {/* DATE */}
                <div className="w-full shrink-0 md:w-52">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#3157FF]">
                    {experience.period}
                  </p>
                </div>

                {/* EXPERIENCE */}
                <div className="flex-1">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#171717]/50">
                    {experience.category}
                  </p>

                  <h3 className="text-2xl font-black md:text-3xl">
                    {experience.title}
                  </h3>

                  <p className="mt-2 text-sm font-bold text-[#171717]/65">
                    {experience.company}
                  </p>

                  <p className="mt-4 max-w-2xl leading-relaxed text-[#171717]/75">
                    {experience.description}
                  </p>
                </div>

                {/* TIMELINE MARKER */}
                <div className="hidden pt-1 md:block">
                  <span className="block h-3 w-3 rounded-full bg-[#FF6B4A]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl border-t border-[#171717]/20 pt-10 md:pt-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#3157FF]">
            {t.certificationsSubtitle}
          </p>

          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-black uppercase md:text-5xl">
              {t.certificationsTitle}
            </h2>

            <span className="text-sm font-bold text-[#171717]/50">
              {String(t.certifications.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {t.certifications.map((certification) => (
              <article
                key={certification.title}
                className="flex flex-col gap-5 border border-[#171717]/20 p-6 transition-colors hover:border-[#3157FF] md:flex-row md:items-center md:justify-between md:p-8"
              >
                <div className="flex items-start gap-5">
                  {/* BADGE PLACEHOLDER */}
                  <div
                    aria-hidden="true"
                    className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#3157FF] text-xl font-black text-white"
                  >
                    AI
                  </div>

                  <div>
                    <h3 className="text-lg font-black md:text-xl">
                      {certification.title}
                    </h3>

                    <p className="mt-2 text-sm text-[#171717]/65">
                      {certification.issuer}
                    </p>

                    <p className="mt-3 text-xs font-bold uppercase tracking-widest text-[#3157FF]">
                      {certification.date}
                    </p>
                  </div>
                </div>

                <span className="self-start border border-[#171717]/20 px-3 py-2 text-xs font-bold uppercase tracking-wider md:self-center">
                  {language === "fr" ? "Badge obtenu" : "Badge earned"}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="bg-[#171717] px-6 py-16 text-[#F4F1EA] md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B4A]">
            {language === "fr" ? "Et maintenant ?" : "What's next?"}
          </p>

          <h2 className="max-w-4xl text-4xl font-black uppercase leading-tight md:text-6xl">
            {t.closingTitle}
          </h2>

          <p className="mt-6 max-w-2xl leading-relaxed text-white/70 md:text-lg">
            {t.closingText}
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-[#3157FF] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#FF6B4A]"
          >
            {t.contactButton}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}