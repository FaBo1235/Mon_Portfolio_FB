import { useState } from "react";
import { useLanguage } from "../LanguageContext.jsx";

const content = {
  fr: {
    eyebrow: "05 / CONTACT",
    title: "ON PARLE",
    titleAccent: "DE VOTRE PROJET ?",
    intro:
      "Vous avez une opportunité, un projet ou simplement envie d'échanger ? Je serais ravie d'en discuter avec vous.",
    emailLabel: "ME CONTACTER PAR EMAIL",
    email: "fannyboireaupro@gmail.com",
    locationLabel: "LOCALISATION",
    location: "France · Ouverte aux opportunités à l'international",
    availabilityLabel: "DISPONIBILITÉ",
    availability: "À l'écoute de nouvelles opportunités",
    formTitle: "ENVOYEZ-MOI UN MESSAGE",
    name: "Votre nom",
    emailField: "Votre adresse email",
    subject: "Objet du message",
    message: "Votre message",
    send: "PRÉPARER MON EMAIL ↗",
    note:
      "Ce formulaire prépare un email dans votre application de messagerie. Il ne transmet pas directement les données depuis le site.",
    footer: "Au plaisir d'échanger avec vous.",
    required: "Veuillez remplir tous les champs.",
  },
  en: {
    eyebrow: "05 / CONTACT",
    title: "LET'S TALK",
    titleAccent: "ABOUT YOUR PROJECT.",
    intro:
      "Have an opportunity, a project, or simply want to connect? I'd be happy to hear from you.",
    emailLabel: "GET IN TOUCH BY EMAIL",
    email: "fannyboireaupro@gmail.com",
    locationLabel: "LOCATION",
    location: "France · Open to international opportunities",
    availabilityLabel: "AVAILABILITY",
    availability: "Open to new opportunities",
    formTitle: "SEND ME A MESSAGE",
    name: "Your name",
    emailField: "Your email address",
    subject: "Subject",
    message: "Your message",
    send: "PREPARE MY EMAIL ↗",
    note:
      "This form prepares an email in your email application. It does not send data directly from the website.",
    footer: "Looking forward to hearing from you.",
    required: "Please complete all fields.",
  },
};

export default function Contact() {
  const { language } = useLanguage();
  const t = content[language];
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setError(t.required);
      return;
    }

    setError("");

    const recipient = t.email;

    if (
      recipient === "VOTRE_EMAIL_ICI" ||
      recipient === "YOUR_EMAIL_HERE"
    ) {
      setError(
        language === "fr"
          ? "Remplacez d'abord VOTRE_EMAIL_ICI par votre adresse email dans Contact.jsx."
          : "First replace YOUR_EMAIL_HERE with your email address in Contact.jsx."
      );
      return;
    }

    const body = [
      `${language === "fr" ? "Nom" : "Name"} : ${form.name}`,
      `${language === "fr" ? "Email" : "Email"} : ${form.email}`,
      "",
      form.message,
    ].join("\n");

    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  const inputClass =
    "w-full border-b border-[#171717]/30 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-[#171717]/45 focus:border-[#3157FF]";

  return (
    <section className="min-h-screen bg-[#F4F1EA] px-6 py-16 text-[#171717] md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-[#3157FF]">
          {t.eyebrow}
        </p>

        <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
          {t.title}
          <span className="mt-2 block text-[#3157FF]">
            {t.titleAccent}
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#171717]/75 md:text-xl">
          {t.intro}
        </p>

        <div className="mt-16 flex flex-col gap-12 border-t border-[#171717]/20 pt-10 md:flex-row md:gap-20">
          <div className="w-full md:w-5/12">
            <div className="mb-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#171717]/55">
                {t.emailLabel}
              </p>
              <p className="wrap-break-word text-lg font-bold md:text-xl">
                {t.email === "VOTRE_EMAIL_ICI" ||
                t.email === "YOUR_EMAIL_HERE"
                  ? language === "fr"
                    ? "Adresse à configurer"
                    : "Email to be configured"
                  : t.email}
              </p>
            </div>

            <div className="mb-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#171717]/55">
                {t.locationLabel}
              </p>
              <p className="leading-relaxed">{t.location}</p>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#171717]/55">
                {t.availabilityLabel}
              </p>
              <p className="font-medium">{t.availability}</p>
            </div>
          </div>

          <div className="w-full md:w-7/12">
            <h2 className="mb-8 text-xl font-black uppercase md:text-2xl">
              {t.formTitle}
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                className={inputClass}
                type="text"
                name="name"
                placeholder={t.name}
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />

              <input
                className={inputClass}
                type="email"
                name="email"
                placeholder={t.emailField}
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />

              <input
                className={inputClass}
                type="text"
                name="subject"
                placeholder={t.subject}
                value={form.subject}
                onChange={handleChange}
                required
              />

              <textarea
                className={`${inputClass} min-h-32 resize-y`}
                name="message"
                placeholder={t.message}
                value={form.message}
                onChange={handleChange}
                required
              />

              {error && (
                <p className="text-sm font-medium text-[#FF6B4A]" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="mt-4 self-start bg-[#3157FF] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#171717]"
              >
                {t.send}
              </button>

              <p className="text-xs leading-relaxed text-[#171717]/55">
                {t.note}
              </p>
            </form>
          </div>
        </div>

        <p className="mt-20 border-t border-[#171717]/20 pt-6 text-sm font-medium">
          {t.footer}
        </p>
      </div>
    </section>
  );
}

