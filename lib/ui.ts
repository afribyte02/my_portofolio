/** UI strings that are not content data (plain module: usable from server and client components). */
export const ui = {
  heading: {
    projects: { a: { fr: "PROJETS", en: "RECENT" }, b: { fr: "RÉCENTS", en: "PROJECTS" } },
    experience: { a: { fr: "MON", en: "MY" }, b: { fr: "EXPÉRIENCE", en: "EXPERIENCE" } },
    tools: { a: { fr: "STACK", en: "TECH STACK" }, b: { fr: "& OUTILS", en: "& TOOLS" } },
    featured: { a: { fr: "PROJETS", en: "FEATURED" }, b: { fr: "À LA UNE", en: "PROJECTS" } },
    contact: { a: { fr: "TRAVAILLONS", en: "LET'S WORK" }, b: { fr: "ENSEMBLE", en: "TOGETHER" } },
  },
  form: {
    name: { fr: "Nom", en: "Name" },
    namePh: { fr: "Votre nom", en: "Your Name" },
    email: { fr: "Email", en: "Email" },
    emailPh: { fr: "votre@email.com", en: "Your@email.com" },
    budget: { fr: "Budget", en: "Budget" },
    select: { fr: "Choisir...", en: "Select..." },
    message: { fr: "Message", en: "Message" },
    submit: { fr: "Envoyer", en: "Submit" },
    sending: { fr: "Envoi...", en: "Sending..." },
    ok: { fr: "Merci ! Votre message a bien été envoyé.", en: "Thanks! Your message has been sent." },
    fail: { fr: "Une erreur est survenue. Réessayez.", en: "Something went wrong. Please try again." },
  },
  contact: {
    cv: { fr: "Télécharger mon CV", en: "Download My CV" },
    visit: { fr: "Voir le projet", en: "Visit project" },
  },
} satisfies Record<string, Record<string, unknown>>;
