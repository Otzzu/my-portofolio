export const experiences: Experience[] = [
  {
    role: "Backend Web Developer",
    company: "SANDBOX IEEE ITB",
    period: "Aug 2023 - Mar 2024",
    description:
      "Developed and managed ticketing, login, voting systems, and email integration using Next.js API routes and CockroachDB.",
    logo: "/assets/img/logo-sandbox.webp",
  },
  {
    role: "Vice Manager Web Development",
    company: "Skillup",
    period: "Jan 2024 - Present",
    description:
      "Partnered with the manager to streamline the division and assisted with end-to-end website delivery and maintenance.",
    logo: "/assets/img/logo-skillup.webp",
  },
  {
    role: "Head of IT Division",
    company: "SPARTA HMIF ITB",
    period: "May 2024 - Sept 2024",
    description:
      "Led the IT division operations and supported full-stack web development initiatives for internal projects.",
    logo: "/assets/img/logo-sparta.webp",
  },
];

export const tools: Tool[] = [
  { name: "JavaScript", icon: "/assets/img/js.webp" },
  { name: "TypeScript", icon: "/assets/img/TypeScript.webp" },
  { name: "Next.js", icon: "/assets/img/nextjs-icon.webp" },
  { name: "React", icon: "/assets/img/React.webp" },
  { name: "Node.js", icon: "/assets/img/Node.js.webp" },
  { name: "Tailwind", icon: "/assets/img/Tailwind_CSS.webp" },
  { name: "Golang", icon: "/assets/img/go.webp" },
  { name: ".NET", icon: "/assets/img/dotnet.webp" },
  { name: "Docker", icon: "/assets/img/Docker.webp" },
  { name: "PostgreSQL", icon: "/assets/img/PostgresSQL.webp" },
  { name: "MySQL", icon: "/assets/img/MySQL.webp" },
  { name: "GitHub", icon: "/assets/img/GitHub.webp" },
  { name: "Gin Gonic", icon: "/assets/img/gin.webp" },
];

export const projects: Project[] = [
  {
    title: "VisuMatch",
    description:
      "Feature-rich content-based image retrieval system that enables intuitive search based on color and texture with advanced tooling such as web scraping, camera integration, and automated reports.",
    tags: [
      "Next.js",
      "React",
      "Golang",
      "Gin Gonic",
      "Docker",
      "Tailwind",
      "PostgreSQL",
      "Chromium",
      "TypeScript",
    ],
    image: "/assets/img/visu.webp",
    href: "https://github.com/Otzzu/Algeo02-22077",
  },
  {
    title: "GoPat",
    description:
      "Web app that compares BFS and IDS algorithms to uncover the shortest path between Wikipedia URLs using Go-colly powered scraping and a Next.js front end.",
    tags: [
      "Next.js",
      "React",
      "Golang",
      "Gin Gonic",
      "Docker",
      "Tailwind",
      "PostgreSQL",
      "TypeScript",
    ],
    image: "/assets/img/gopat.webp",
    href: "https://github.com/Otzzu/Tubes2_GoPat",
  },
  {
    title: "Fingerprint Matcher",
    description:
      "Pattern-matching desktop app leveraging KMP, Boyer-Moore, and Levenshtein algorithms with a .NET and WPF interface packaged with Docker and MySQL support.",
    tags: [".NET SDK", "WPF", "Docker"],
    image: "/assets/img/matcher.webp",
    href: "https://github.com/Otzzu/Tubes3_apaKek",
  },
  {
    title: "Cyberpunk 2077 Breach Protocol Solver",
    description:
      "Next.js and TypeScript tool that brute-forces the optimal buffer for the Cyberpunk 2077 hacking mini-game with CSV, manual, and random inputs plus downloadable outputs.",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    image: "/assets/img/cyber22.webp",
    href: "https://github.com/Otzzu/tucil-stima-satu",
  },
];

export const skills = [
  {
    name: "Front End Web",
    level: 0.6,
  },
  {
    name: "Back End",
    level: 0.8,
  },
];
