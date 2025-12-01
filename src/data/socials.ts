export const tag: string = "@cojocaru-david";
export const author: string = "Alban Laparcerie";
export const github: string = "https://github.com/albanlpcr";

export const title: string = "Alban - Developpeur Informatique";
export const description: string =
  "Etudiant en 2ème année de BUT Informatique à l'IUT de Bordeaux, je suis particulièrement attiré par le développement backend. Ce portefolio est une vitrine sur mes projets et compétences informatiques. J'ai pour objectif d'effectuer un stage de 8 à 10 semaines entre le 6 avril et le 12 juin 2026.";
export const country: string = "Bordeaux 33000";

export const FooterSocials = [
  {
    name: "GitHub",
    url: github,
    icon: "mdi:github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/alban-laparcerie-b71bba388/",
    icon: "mdi:linkedin",
  },
  {
    name: "Email",
    url: "mailto:alban.laparcerie@gmail.com",
    icon: "mdi:email",
  },
];

interface Meta {
  title: string;
  description: string;
  keywords: string[];
  ogImage: {
    src: string;
    alt: string;
  };
}

export const defaultMeta: Meta = {
  title: "Alban Laparcerie - Accueil",
  description:
    "Etudiant en 2ème année de BUT Informatique à l'IUT de Bordeaux, je suis particulièrement attiré par le développement backend." +
    "Ce portefolio est une vitrine sur mes projets et compétences informatiques."
    +"J'ai pour objectif d'effectuer un stage de 8 à 10 semaines entre le 6 avril et le 12 juin 2026.",
  keywords: [
    "alban laparcerie",
    "junior software developer",
    "junior",
    "cybersecurity enthusiast",
    "web development",
    "programming",
    "portfolio",
    "blog",
    "romania",
  ],
  ogImage: {
    src: "/banner.png",
    alt: "Alban Laparcerie - Home",
  },
};

export interface Category {
  text: string;
  logo: string;
}

export type Technologies = {
  "Web Development": Category[];
  "Development Tools": Category[];
  "Hosting and Cloud Services": Category[];
  "Operating Systems": Category[];
  "Other Programming Languages and Technologies": Category[];
  "Web Servers": Category[];
  Databases: Category[];
  "Other Software": Category[];
};

export const technologies: Technologies = {
  "Web Development": [
    { text: "HTML", logo: "mdi:language-html5" },
    { text: "JavaScript", logo: "mdi:language-javascript" },
    { text: "CSS", logo: "mdi:language-css3" },
    { text: "PHP", logo: "mdi:language-php" },
    { text: "Astro", logo: "simple-icons:astro" },
    { text: "Tailwind CSS", logo: "mdi:tailwind" },
  ],
  "Development Tools": [
    { text: "Visual Studio Code", logo: "mdi:visual-studio-code" },
    { text: "Git", logo: "mdi:git" },
  ],
  "Hosting and Cloud Services": [
    { text: "DigitalOcean", logo: "mdi:digital-ocean" },
    { text: "Cloudflare", logo: "cib:cloudflare" },
    { text: "Netlify", logo: "cib:netlify" },
  ],
  "Operating Systems": [
    { text: "Windows", logo: "mdi:windows" },
    { text: "Ubuntu", logo: "mdi:ubuntu" },
  ],
  "Other Programming Languages and Technologies": [
    { text: "Lua", logo: "mdi:language-lua" },
    { text: "Golang", logo: "mdi:language-go" },
    { text: "Node.js", logo: "mdi:nodejs" },
  ],
  "Web Servers": [
    { text: "Apache", logo: "cib:apache" },
    { text: "Nginx", logo: "cib:nginx" },
  ],
  Databases: [
    { text: "MySQL", logo: "cib:mysql" },
    { text: "MongoDB", logo: "cib:mongodb" },
  ],
  "Other Software": [
    { text: "Discord", logo: "mdi:discord" },
    { text: "Spotify", logo: "mdi:spotify" },
    { text: "Visual Studio", logo: "mdi:visual-studio" },
    { text: "Brave", logo: "cib:brave" },
  ],
};
