export const profile = {
  name: "Hydriss Tshwala Mangala",
  tagline: "A Software Engineer who has developed countless innovative solutions.",
  title: ["SOFTWARE", "ENGINEER"],
  bio: "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
    { label: "Facebook", href: "https://www.facebook.com", icon: "facebook" },
    { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
    { label: "GitHub", href: "https://github.com", icon: "github" },
  ],
} as const;

export const stats = [
  { value: "+6", label: "YEARS OF EXPERIENCE" },
  { value: "+25", label: "PROJECTS COMPLETED" },
  { value: "+20", label: "WORLDWIDE CLIENTS" },
];

export const skills = [
  { text: "WEB & MOBILE APP DEVELOPMENT", variant: "brand", icon: "layers" },
  { text: "NEXT.JS, LARAVEL, FLUTTER, AUTOMATION", variant: "lime", icon: "layout" },
] as const;

export const projects = [
  { name: "Kabadeal", desc: "Community marketplace", href: "https://kabadeal.com", logo: "/logos/kabadeal.jpg", bg: "#f90030", pad: false, crop: false },
  { name: "KabaShop", desc: "WhatsApp stores for African sellers", href: "https://kabashop.africa", logo: "/logos/kabashop-favicon.png", bg: "#0f2a3f", pad: false, crop: false },
  { name: "VivaCollab", desc: "Web platform", href: "", logo: "/logos/vivacollab.png", bg: "#ffffff", pad: false, crop: true },
];

export const experience = [
  { company: "PixelForge Studios", desc: "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.", period: "Jan 2020 - Present" },
  { company: "BlueWave Innovators", desc: "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.", period: "Jun 2017 - Dec 2019" },
  { company: "TrendCraft Solutions", desc: "Designed user interfaces for e-commerce platforms, focusing on enhancing usability and visual appeal.", period: "Mar 2015 - May 2017" },
];

export const tools = [
  { name: "Claude Code", desc: "AI Coding Assistant", href: "https://claude.com/claude-code", logo: "/logos/claude.svg" },
  { name: "Next.js", desc: "React framework", href: "https://nextjs.org", logo: "/logos/nextdotjs.svg" },
  { name: "Laravel", desc: "PHP framework", href: "https://laravel.com", logo: "/logos/laravel.svg" },
  { name: "Flutter", desc: "Cross-platform mobile apps", href: "https://flutter.dev", logo: "/logos/flutter.svg" },
  { name: "TypeScript", desc: "Typed JavaScript", href: "https://www.typescriptlang.org", logo: "/logos/typescript.svg" },
  { name: "Docker", desc: "Containers & deployment", href: "https://www.docker.com", logo: "/logos/docker.svg" },
  { name: "GitHub", desc: "Version control & CI/CD", href: "https://github.com", logo: "/logos/github.svg" },
  { name: "n8n", desc: "Workflow automation", href: "https://n8n.io", logo: "/logos/n8n.svg" },
  { name: "Notion", desc: "Productivity & docs", href: "https://notion.so", logo: "/logos/notion.svg" },
  { name: "Figma", desc: "UI/UX design", href: "https://figma.com", logo: "/logos/figma.svg" },
];
export const posts = [
  { title: "Starting and Growing a Career in Web Design", excerpt: "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.", date: "Apr 8, 2022", read: "6min read", href: "#" },
  { title: "Create a Landing Page That Performs Great", excerpt: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.", date: "Mar 15, 2022", read: "6min read", href: "#" },
  { title: "How Can Designers Prepare for the Future?", excerpt: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.", date: "Feb 28, 2022", read: "6min read", href: "#" },
];

export const budgets = ["Less than $1k", "$1k - $5k", "$5k - $10k", "$10k+"];
