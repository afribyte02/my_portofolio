/** Bilingual string: rendered with <L v={...} /> (client) or tr(v, lang). */
export type Bi = { fr: string; en: string };
const bi = (fr: string, en: string): Bi => ({ fr, en });

export const site = {
  url: "https://my-portofolio-pink-five.vercel.app",
  // Public-facing name used for SEO / share previews.
  seoName: "Hydriss Tshwala Mangala",
  seoTitle: "Hydriss Tshwala Mangala | Full-Stack Developer & Software Engineer",
  seoDescription:
    "Découvrez le portfolio de Hydriss Tshwala Mangala, développeur full-stack spécialisé dans les applications web et mobiles, les plateformes numériques et les solutions innovantes.",
};

export const contact = {
  email: "hydrissmangala@gmail.com",
  whatsapp: "+905338438529",
  // PDFs live in /public. Set a language to "" to hide the CV button for that language.
  cvUrl: { fr: "/cv-fr.pdf", en: "/cv-en.pdf" },
};

export const profile = {
  name: "Hydriss Tshwala Mangala",
  tagline: bi(
    "Je conçois des produits numériques qui résolvent de vrais problèmes.",
    "Building digital products that solve real-world problems.",
  ),
  title: ["FULL-STACK", "DEVELOPER"],
  subtitle: "Software Engineer",
  bio: bi(
    "Développeur full-stack avec 5 ans d'expérience, je conçois et développe des applications web et mobiles ainsi que des plateformes numériques. J'accompagne les projets de la conception au déploiement en privilégiant la performance, l'expérience utilisateur et des solutions adaptées aux besoins réels.",
    "Full-stack developer with 5 years of experience, I design and build web and mobile applications and digital platforms. I support projects from design to deployment, focusing on performance, user experience and solutions tailored to real needs.",
  ),
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/chris-mangala-325260325/", icon: "linkedin" },
    { label: "Facebook", href: "https://www.facebook.com/chrismangala02", icon: "facebook" },
    { label: "Instagram", href: "https://www.instagram.com/kabadeal", icon: "instagram" },
    { label: "GitHub", href: "https://github.com/afribyte02", icon: "github" },
  ],
} as const;

export const stats = [
  { value: "+5", label: bi("ANS D'EXPÉRIENCE", "YEARS OF EXPERIENCE") },
  { value: "+25", label: bi("PROJETS RÉALISÉS", "PROJECTS COMPLETED") },
  { value: "+20", label: bi("CLIENTS DANS LE MONDE", "WORLDWIDE CLIENTS") },
];

export const skills = [
  { text: bi("DÉVELOPPEMENT WEB & MOBILE", "WEB & MOBILE APP DEVELOPMENT"), variant: "brand", icon: "layers" },
  {
    text: bi(
      "DÉVELOPPEMENT FULL-STACK · NEXT.JS · LARAVEL · FLUTTER · TYPESCRIPT · AUTOMATISATION",
      "FULL-STACK DEVELOPMENT · NEXT.JS · LARAVEL · FLUTTER · TYPESCRIPT · AUTOMATION",
    ),
    variant: "lime",
    icon: "layout",
  },
] as const;

export const projects = [
  {
    name: "Kabadeal",
    desc: bi("Petites annonces pour l'Afrique francophone", "Classified ads for French-speaking Africa"),
    href: "https://kabadeal.com",
    logo: "/logos/kabadeal.jpg",
    bg: "#f90030",
    pad: false,
    crop: false,
  },
  {
    name: "KabaShop",
    desc: bi("Boutiques en ligne pour les commerçants africains", "Online stores for African businesses"),
    href: "https://kabashop.africa",
    logo: "/logos/kabashop-favicon.png",
    bg: "#0f2a3f",
    pad: false,
    crop: false,
  },
  {
    name: "VivaCollab",
    desc: bi("Marques et créateurs de contenu", "Brands and content creators"),
    href: "https://vivacollab.com",
    logo: "/logos/vivacollab.png",
    bg: "#ffffff",
    pad: false,
    crop: true,
  },
];

export const experience = [
  {
    company: "Freelance",
    role: bi("Full-Stack Developer / Software Engineer", "Full-Stack Developer / Software Engineer"),
    desc: bi(
      "Conception et lancement de plateformes numériques (annonces, boutiques en ligne, collaboration marques-créateurs), de la conception au déploiement.",
      "Design and launch of digital platforms (classifieds, online stores, brand–creator collaboration), from design to deployment.",
    ),
    period: bi("2024 - Aujourd'hui", "2024 - Present"),
  },
  {
    company: "Freelance",
    role: bi("Full-Stack Developer", "Full-Stack Developer"),
    desc: bi(
      "Développement d'applications web et mobiles (Next.js, Laravel, Flutter), intégration d'API et gestion de bases de données (MySQL, MongoDB, Firebase).",
      "Building web and mobile applications (Next.js, Laravel, Flutter), API integration and database management (MySQL, MongoDB, Firebase).",
    ),
    period: bi("2022 - 2024", "2022 - 2024"),
  },
  {
    company: "Freelance",
    role: bi("Web Developer", "Web Developer"),
    desc: bi(
      "Premiers projets pour des clients : sites web, automatisation de tâches et déploiement d'applications.",
      "First client projects: websites, task automation and application deployment.",
    ),
    period: bi("2021 - 2022", "2021 - 2022"),
  },
];

export const tools = [
  { name: "Claude Code", desc: bi("Assistant de code IA", "AI Coding Assistant"), href: "https://claude.com/claude-code", logo: "/logos/claude.svg" },
  { name: "Next.js", desc: bi("Framework React", "React framework"), href: "https://nextjs.org", logo: "/logos/nextdotjs.svg" },
  { name: "Laravel", desc: bi("Framework PHP", "PHP framework"), href: "https://laravel.com", logo: "/logos/laravel.svg" },
  { name: "Flutter", desc: bi("Apps mobiles multiplateformes", "Cross-platform mobile apps"), href: "https://flutter.dev", logo: "/logos/flutter.svg" },
  { name: "TypeScript", desc: bi("JavaScript typé", "Typed JavaScript"), href: "https://www.typescriptlang.org", logo: "/logos/typescript.svg" },
  { name: "Docker", desc: bi("Conteneurs & déploiement", "Containers & deployment"), href: "https://www.docker.com", logo: "/logos/docker.svg" },
  { name: "GitHub", desc: bi("Versioning & CI/CD", "Version control & CI/CD"), href: "https://github.com", logo: "/logos/github.svg" },
  { name: "Node.js", desc: bi("Environnement JavaScript", "JavaScript runtime"), href: "https://nodejs.org", logo: "/logos/nodedotjs.svg" },
  { name: "MongoDB", desc: bi("Base de données NoSQL", "NoSQL database"), href: "https://www.mongodb.com", logo: "/logos/mongodb.svg" },
  { name: "MySQL", desc: bi("Base de données relationnelle", "Relational database"), href: "https://www.mysql.com", logo: "/logos/mysql.svg" },
  { name: "Firebase", desc: bi("Backend & authentification", "Backend & authentication"), href: "https://firebase.google.com", logo: "/logos/firebase.svg" },
];

// Featured projects. Add a real screenshot by setting `image` (file in /public); otherwise the logo is shown on `bg`.
export const featured = [
  {
    name: "Kabadeal",
    desc: bi(
      "Plateforme de petites annonces pour l'Afrique francophone permettant de découvrir, acheter et vendre des produits et services.",
      "Classified-ads platform for French-speaking Africa to discover, buy and sell products and services.",
    ),
    tags: ["Laravel", "Next.js", "Flutter"],
    href: "https://kabadeal.com",
    image: "",
    logo: "/logos/kabadeal.jpg",
    bg: "#f90030",
  },
  {
    name: "KabaShop",
    desc: bi(
      "Plateforme digitale qui permet aux entreprises africaines de créer des boutiques en ligne professionnelles, des menus QR, des pages de réservation, des pages d'événements et des cartes de visite digitales.",
      "A digital platform empowering African businesses to create professional online stores, QR menus, booking pages, event pages and digital business cards.",
    ),
    tags: ["Laravel", "React", "TypeScript", "Flutter"],
    href: "https://kabashop.africa",
    image: "",
    logo: "/logos/kabashop.png",
    bg: "#ffffff",
  },
  {
    name: "VivaCollab",
    desc: bi(
      "Plateforme qui connecte les marques et les créateurs de contenu pour faciliter les collaborations, les campagnes et les partenariats.",
      "Platform connecting brands and content creators to simplify collaborations, campaigns and partnerships.",
    ),
    tags: ["Full-Stack"],
    href: "https://vivacollab.com",
    image: "",
    logo: "/logos/vivacollab.png",
    bg: "#ffffff",
  },
];

// Stable ids are what the API validates; labels are shown per language.
export const budgets = [
  { id: "lt1k", label: bi("Moins de 1 000 $", "Less than $1,000") },
  { id: "1k-5k", label: bi("1 000 $ - 5 000 $", "$1,000 - $5,000") },
  { id: "5k-10k", label: bi("5 000 $ - 10 000 $", "$5,000 - $10,000") },
  { id: "10k+", label: bi("Plus de 10 000 $", "More than $10,000") },
] as const;
export const budgetIds = budgets.map((b) => b.id) as [string, ...string[]];
