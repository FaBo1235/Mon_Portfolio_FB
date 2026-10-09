import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext.jsx";

const servicesByLanguage = {
fr: {
eyebrow: "Ce que je peux développer",
heading: "WHAT I",
headingAccent: "CAN BUILD.",
intro:
"Je conçois et développe des applications web en combinant interface utilisateur, logique métier et gestion des données.",
description:
"Chaque projet est une occasion de construire une solution claire, utile et adaptée à son objectif.",
servicesTitle: "Mes domaines d'intervention",
services: [
{
number: "01",
title: "Interfaces web",
description:
"Des interfaces modernes, accessibles et responsive, pensées pour offrir une expérience claire sur ordinateur, tablette et mobile.",
technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
color: "blue",
},
{
number: "02",
title: "Applications web",
description:
"Des applications web fonctionnelles, de l'interface utilisateur aux fonctionnalités côté serveur.",
technologies: ["React", "Node.js", "Express"],
color: "coral",
},
{
number: "03",
title: "API & bases de données",
description:
"Des API REST pour faire communiquer les différentes parties d'une application, avec une base de données adaptée aux besoins du projet.",
technologies: ["REST API", "Express", "MySQL", "Sequelize"],
color: "blue",
},
{
number: "04",
title: "Maintenance & évolution",
description:
"L'amélioration progressive d'une application : correction de bugs, ajustements d'interface et ajout de nouvelles fonctionnalités.",
technologies: ["Débogage", "Git", "JavaScript", "PHP"],
color: "coral",
},
],
closingEyebrow: "Et maintenant ?",
closingTitle: "UN PROJET À CONSTRUIRE ?",
closingText:
"Discutons de ton besoin et des solutions techniques possibles.",
contact: "Me contacter",
},

en: {
eyebrow: "What I can build",
heading: "WHAT I",
headingAccent: "CAN BUILD.",
intro:
"I design and develop web applications by combining user interfaces, business logic and data management.",
description:
"Every project is an opportunity to build a clear, useful solution tailored to its purpose.",
servicesTitle: "What I work on",
services: [
{
number: "01",
title: "Web interfaces",
description:
"Modern, accessible and responsive interfaces designed to provide a clear experience on desktop, tablet and mobile.",
technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
color: "blue",
},
{
number: "02",
title: "Web applications",
description:
"Functional web applications, from the user interface to server-side features.",
technologies: ["React", "Node.js", "Express"],
color: "coral",
},
{
number: "03",
title: "APIs & databases",
description:
"REST APIs that connect the different parts of an application, supported by a database suited to the project's needs.",
technologies: ["REST API", "Express", "MySQL", "Sequelize"],
color: "blue",
},
{
number: "04",
title: "Maintenance & improvements",
description:
"Continuous application improvements, including bug fixes, interface refinements and new features.",
technologies: ["Debugging", "Git", "JavaScript", "PHP"],
color: "coral",
},
],
closingEyebrow: "What's next?",
closingTitle: "SOMETHING TO BUILD?",
closingText:
"Let's discuss your needs and the technical solutions that could work for your project.",
contact: "Contact me",
},
};

export default function Services() {
const { language } = useLanguage();
const t = servicesByLanguage[language];

return ( <section className="min-h-screen bg-[#F4F1EA]"> <div className="mx-auto flex max-w-7xl flex-col px-6 md:px-10">
{/* En-tête */} <div className="flex items-center justify-between border-b-2 border-[#171717] py-5"> <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
{language === "fr" ? "Services" : "Services"} </span> <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
04 / 05 </span> </div>

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
          {t.intro}
        </p>
        <p className="text-sm leading-relaxed text-[#555555]">
          {t.description}
        </p>
      </div>
    </div>

    {/* Liste des services */}
    <div className="flex flex-col border-t-2 border-[#171717]">
      <h2 className="py-7 text-2xl font-black uppercase md:text-3xl">
        {t.servicesTitle}
      </h2>

      {t.services.map((service) => {
        const isBlue = service.color === "blue";

        return (
          <article
            key={service.number}
            className="flex flex-col gap-6 border-t border-[#171717]/30 py-8 md:flex-row md:items-start md:gap-10 md:py-12"
          >
            <div className="flex items-center justify-between md:w-24 md:shrink-0">
              <span
                className={`font-mono text-sm font-bold ${
                  isBlue ? "text-[#3157FF]" : "text-[#FF6B4A]"
                }`}
              >
                / {service.number}
              </span>

              <span
                className={`h-3 w-3 md:hidden ${
                  isBlue ? "bg-[#3157FF]" : "bg-[#FF6B4A]"
                }`}
                aria-hidden="true"
              />
            </div>

            <div className="flex flex-1 flex-col gap-5">
              <h3 className="wrap-break-word text-3xl font-black uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
                {service.title}
              </h3>

              <p className="max-w-2xl text-sm leading-relaxed text-[#555555] md:text-base">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-[#171717]/25 px-3 py-2 font-mono text-[10px] font-bold uppercase"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden justify-end md:flex md:w-16 md:shrink-0">
              <span
                className={`flex h-12 w-12 items-center justify-center border-2 border-[#171717] text-xl transition-transform duration-300 hover:rotate-12 ${
                  isBlue
                    ? "bg-[#3157FF] text-white"
                    : "bg-[#FF6B4A] text-[#171717]"
                }`}
                aria-hidden="true"
              >
                ↗
              </span>
            </div>
          </article>
        );
      })}
    </div>

    {/* Appel à l'action */}
    <div className="flex flex-col gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
      <div className="flex flex-col gap-3">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#3157FF]">
          {t.closingEyebrow}
        </p>

        <h2 className="text-3xl font-black uppercase leading-tight md:text-4xl">
          {t.closingTitle}
        </h2>

        <p className="max-w-lg text-sm leading-relaxed text-[#555555]">
          {t.closingText}
        </p>
      </div>

      <Link
        to="/contact"
        className="flex items-center justify-center gap-3 border-2 border-[#171717] bg-[#3157FF] px-6 py-4 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#FF6B4A] md:shrink-0"
      >
        {t.contact}
        <span aria-hidden="true">↗</span>
      </Link>
    </div>
  </div>
</section>

);
}
