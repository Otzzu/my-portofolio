export const experiences: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Crayon OCBC",
    period: "Jul 2025 - Sep 2025",
    descriptionShort:
      "Developed an internal web application for API documentation and API Gateway management using React and Spring Boot WebFlux, improving developer productivity and CI/CD efficiency.",
    descriptionLong:
      "Developed an internal web application for API documentation and API Gateway management. Collaborated within a 5-member team under the guidance of 2 buddies and 1 mentor. Built applications using React for the frontend and Spring Boot WebFlux for the backend. Enhanced developer productivity by reducing time spent searching for documentation and accelerating application delivery by minimizing CI/CD processing time.",
    logo: "/assets/img/logo-crayon-ocbc.webp",
  },
  {
    role: "Head of IT Division",
    company: "HMIF SPARTA ITB",
    period: "May 2024 - Sep 2024",
    descriptionShort:
      "Led the IT division operations and supported full-stack web development initiatives for internal projects.",
    descriptionLong:
      "Collaborated with the vice chairman to ensure the IT division operated effectively, completing all assigned tasks on time. Led a team of 12 members, divided into three divisions: frontend, backend, and UI/UX. Assisted in all processes of website creation and maintenance, both frontend and backend. Developed an internal website for SPARTA activities using React (frontend) and Golang (backend), which included key features such as authentication, viewing activity information, task submission, scoring system for tasks, an admin panel to create and review tasks, and many other supporting functionalities.",
    logo: "/assets/img/logo-sparta.webp",
  },
  {
    role: "Vice Manager Web Development",
    company: "Skillup",
    period: "Jan 2024 - Oct 2024",
    descriptionShort:
      "Partnered with the manager to streamline the division and assisted with end-to-end website delivery and maintenance.",
    descriptionLong:
      "Collaborated with the manager to ensure the web development division operated effectively, completing all assigned tasks on time. Led a team of 10 members, divided into three divisions: frontend, backend, and UI/UX. Assisted in all processes of website creation and maintenance within SkillUp, both on the frontend and backend. Maintained existing main website and admin website of SkillUp, while also developing new features such as a Learning Management System (LMS) similar to Udemy, fully integrated with both the main website and admin panel. Tech Stack: React, Next.js, Firebase, Shadcn UI, Tailwind CSS.",
    logo: "/assets/img/logo-skillup.webp",
  },
  {
    role: "Frontend Web Developer",
    company: "TEDxITB",
    period: "Oct 2023 - Feb 2024",
    descriptionShort:
      "Created core frontend components for the TEDxITB website including quiz page, home page, and reusable UI elements.",
    descriptionLong:
      "Assisted in creating the frontend of the TEDxITB website according to provided UI/UX designs. Developed components for file upload, pagination, and carousel. Created quiz page and home page (main page) for the TEDxITB website. Tech Stack: React, Next.js with Shadcn UI components and Tailwind CSS.",
    logo: "/assets/img/logo-tedxitb.webp",
  },
  {
    role: "Backend Web Developer",
    company: "Wisokto ITB",
    period: "Sep 2023 - Oct 2023",
    descriptionShort:
      "Developed backend system for login, file upload, and graduate data retrieval.",
    descriptionLong:
      "Developed a backend system for login, file upload, and user data retrieval (graduates). Assisted the frontend team in creating and integrating a file upload component with the backend system. Tech Stack: Next.js and Prisma.",
    logo: "/assets/img/logo-wisokto.webp",
  },
  {
    role: "Backend Web Developer",
    company: "SANDBOX IEEE ITB",
    period: "Aug 2023 - Mar 2024",
    descriptionShort:
      "Developed and managed ticketing, login, voting systems, and email integration using Next.js API routes and CockroachDB.",
    descriptionLong:
      "Worked independently as a backend developer and communicated with several frontend team members. Created a backend system for ticketing processes (competitions and main events), login, and voting, including email sending and data transfer to spreadsheets. Tech Stack: Next.js, CockroachDB, Brevo, Prisma, Vercel, and App Script.",
    logo: "/assets/img/logo-sandbox.webp",
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
  { name: "Java", icon: "/assets/img/java.webp" },
];

export const projects: Project[] = [
  {
    title: "Asko",
    description:
      "Asko is a web-based investment tool designed to help users manage their investments effectively. The platform allows users to explore a wide range of listed stocks along with detailed financial data such as profits, debts, assets, and more—presented through interactive charts. Users can also create personalized stock watchlists and build investment portfolios to track their performance and returns.\n\nIn addition, Asko provides a scenario analysis feature that enables users to forecast potential company earnings, giving them deeper insights for investment decisions. The platform also includes an admin dashboard for managing listed stocks and maintaining the accuracy of financial data.",
    tags: [
      "TypeScript",
      "React",
      "Tailwind",
      "Shadcn UI",
      "React Router",
      "Tanstack Query",
      "NestJS",
      "MySQL",
      "DrizzleORM",
      "Swagger",
    ],
    image: "/assets/img/Asko.webp",
    href: "",
    context: "Paid Project",
  },
  {
    title: "LinkInPurry",
    description:
      "LinkInPurry is a full-stack LinkedIn-inspired platform that helps professionals build meaningful connections through an intuitive web experience. Users can register, sign in securely, and curate comprehensive profiles by updating their personal details, work history, skills, and profile imagery. The platform encourages networking by enabling connection requests, approvals, and rejections, while delivering a dynamic feed where members can publish updates, browse posts from their network, and stay engaged with the community. \n\nBeyond social features, LinkInPurry prioritizes real-time collaboration. Built-in private messaging powered by WebSockets lets users converse seamlessly and revisit chat history, while integrated notifications keep them informed about new messages and relevant feed activity. The application is containerized with Docker and Docker Compose, allowing quick local deployment and providing access to live API documentation through Swagger once the services are running.",
    tags: [
      "TypeScript",
      "React",
      "Tailwind",
      "Shadcn UI",
      "React Router",
      "Tanstack Query",
      "Docker",
      "Hono",
      "Redis",
      "PosgreSQL",
      "DrizzleORM",
      "WebPush",
      "WebSocket",
      "Swagger",
    ],
    image: "/assets/img/LinkInPurry.webp",
    href: "https://github.com/Labpro-21/if-3310-2024-2-k02-18",
    context: "University Project",
  },
  {
    title: "Purrytify",
    description:
      "Purrytify is a Spotify-inspired Android streaming app built with Kotlin and Jetpack Compose that lets listeners build their own libraries, enjoy high-quality playback, and manage fully customizable queues and playlists through an intuitive mobile interface. Beyond core playback, the project adds modern conveniences such as browsing global charts, discovering personalized recommendations, and capturing listening trends in a “Sound Capsule” analytics hub that can be shared with friends via URLs or QR codes. Users can upload and edit songs, toggle offline mode for uninterrupted listening, and seamlessly return online with their preferences preserved.",
    tags: ["Kotlin", "Jetpack Compose", "Android Studio"],
    image: "/assets/img/purrytify.webp",
    href: "https://github.com/Otzzu/if3210-tubes-mad-2025-if3210-2025-mad-bos",
    context: "University Project",
  },
  {
    title: "Kelola Kerajaan",
    description:
      "Kelola Kerajaan is a Java-based card-management strategy game that reimagines farm simulation as a duel between two players, each tending a grid-based field where cards represent crops, livestock, and other interactive assets that can be harvested, traded, or sold for profit over 20 turns. The game challenges players to balance growth and defense as random bear attacks threaten their carefully placed cards, while a modular save/load system—powered by extensible plugins for multiple file formats—lets them capture and resume their farm-building progress with ease.",
    tags: ["Java", "JavaFX", "OOP"],
    image: "/assets/img/Kerajaan.webp",
    href: "https://github.com/Otzzu/IF2210_TB2_SMH",
    context: "University Project",
  },
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
    context: "University Project",
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
    context: "University Project",
  },
  {
    title: "Fingerprint Matcher",
    description:
      "Pattern-matching desktop app leveraging KMP, Boyer-Moore, and Levenshtein algorithms with a .NET and WPF interface packaged with Docker and MySQL support.",
    tags: [".NET SDK", "WPF", "Docker"],
    image: "/assets/img/matcher.webp",
    href: "https://github.com/Otzzu/Tubes3_apaKek",
    context: "University Project",
  },
  {
    title: "Cyberpunk 2077 Breach Protocol Solver",
    description:
      "Next.js and TypeScript tool that brute-forces the optimal buffer for the Cyberpunk 2077 hacking mini-game with CSV, manual, and random inputs plus downloadable outputs.",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    image: "/assets/img/cyber22.webp",
    href: "https://github.com/Otzzu/tucil-stima-satu",
    context: "University Project",
  },
];
