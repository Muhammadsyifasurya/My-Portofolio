export const siteConfig = {
  name: "Muhammad Syifa Surya Saputra",
  role: "Front End Developer",
  email: "syifamuhamamd3139@gmail.com",
  resume: "/document/ATS_CV_Muhammad Syifa Surya Saputra.pdf",
  social: {
    github: "https://github.com/muhammadsyifasurya",
    linkedin: "https://www.linkedin.com/in/muhammadsyifasuryasaputra/",
    instagram: "https://www.instagram.com/muhammadsyifasurya/",
    facebook: "https://www.facebook.com/radenmanggalaa",
    tiktok: "https://www.tiktok.com/@radenmanggala_",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  { name: "HTML", icon: "/assets/skills/html.webp", featured: true },
  { name: "CSS", icon: "/assets/skills/css.webp" },
  { name: "JavaScript", icon: "/assets/skills/javascript.webp" },
  { name: "Java", icon: "/assets/skills/java.webp" },
  { name: "React", icon: "/assets/skills/react.webp", featured: true },
  { name: "Next.js", icon: "/assets/skills/nextjs.webp" },
  { name: "GitHub", icon: "/assets/skills/github1.webp" },
  { name: "Firebase", icon: "/assets/skills/firebase.webp" },
  { name: "Tailwind", icon: "/assets/skills/tailwind.webp", featured: true },
];

export const experiences = [
  {
    id: "revou",
    company: "RevoU",
    title: "Software Engineer Bootcamp",
    period: "October 2024 - May 2025",
    highlights: [
      "Built full-stack web apps using HTML, CSS, JavaScript, TypeScript, React.js, Next.js, TailwindCSS, and Flask.",
      "Developed an e-commerce platform with product filtering, shopping cart, user authentication, and checkout flow.",
      "Applied global state management using React Context and wrote unit tests with Jest.",
      "Practiced Agile development, Git collaboration, clean code principles, and integrated RESTful APIs in team projects.",
    ],
  },
  {
    id: "kai",
    company: "PT Reska Multi Usaha (KAI Service)",
    title: "Staff Purchasing",
    period: "November 2023 - May 2024",
    highlights: [
      "Coordinated the procurement of IT and operational equipment to support business continuity across multiple departments.",
      "Provided technical assistance, including troubleshooting hardware and software issues, and supporting basic network maintenance.",
      "Monitored and documented purchasing activities in line with budget constraints and vendor agreements.",
      "Managed IT inventory and ensured consistent availability of essential supplies for internal stakeholders.",
    ],
  },
  {
    id: "neura",
    company: "PT Neura Integrasi Solusi",
    title: "Android Developer Intern",
    period: "July 2020 - December 2020",
    highlights: [
      "Developed a photo-based QR code scanner feature using Java and Android Studio for an internal application.",
      "Built simple user interfaces using XML, ensuring responsive layout and clean design.",
      "Assisted in integrating the application with backend services via RESTful API.",
      "Participated in debugging and testing to ensure functionality and performance across Android devices.",
    ],
  },
];

export const projects = [
  {
    title: "Nexcent",
    description:
      "I developed a responsive and accessible website using semantic HTML and Tailwind CSS with a mobile-first approach. I implemented flexible layouts with Flexbox and Grid, ensuring smooth navigation across devices. I was responsible for the entire frontend and deployed the project via GitHub Pages.",
    image: "/assets/Nexcent.jpg",
    tech: ["VS Code", "HTML", "CSS", "JavaScript", "Tailwind"],
    github: "https://github.com/Muhammadsyifasurya/Nexcent.git",
    live: "https://muhammadsyifasurya.github.io/Nexcent/",
    reverse: false,
  },
  {
    title: "E-KUR BANK BTN",
    description:
      "I developed a responsive web interface simulating a real government KUR loan portal. Using semantic HTML, mobile-first CSS, and layout with Flexbox and Grid, I focused on usability and accessibility across devices. I was responsible for the frontend and deployed the site via Firebase.",
    image: "/assets/e-kur-btn.jpg",
    tech: ["VS Code", "HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/Muhammadsyifasurya/e-kur.btn.co.id.git",
    live: "https://muhammadsyifasurya.github.io/e-kur.btn.co.id/",
    reverse: true,
  },
  {
    title: "Twibbon Maker",
    description:
      "I built a responsive Twibbon Maker platform using Tailwind CSS with Flexbox and Grid in a mobile-first approach. Users can upload and adjust images to fit templates. I handled the entire frontend, ensuring usability and accessibility across all screen sizes.",
    image: "/assets/twibbon.jpg",
    tech: ["VS Code", "HTML", "CSS", "JavaScript", "Tailwind"],
    github: "https://github.com/Muhammadsyifasurya/Twibbon.git",
    live: "https://muhammadsyifasurya.github.io/Twibbon/",
    reverse: false,
  },
];

export const aboutParagraphs = [
  "Hello! I'm Muhammad Syifa Surya Saputra, a passionate Frontend Developer with a strong foundation in building responsive and scalable web applications using Next.js, TypeScript, and React.js.",
  "I gained hands-on experience through the Full-Stack Software Engineering program at RevoU and my real-world contributions at PT LPP Agro Nusantara, where I built internal dashboards, integrated RESTful APIs, and optimized inventory workflows using TailwindCSS.",
  "My technical stack includes JavaScript, TypeScript, Flask, Laravel, MySQL, and Firebase. I follow best practices in clean code, component-based architecture, and global state management with React Context.",
  "I've worked with Agile teams, applied unit testing with Jest, and managed code with Git and GitHub. Beyond frontend, I also bring experience in IT governance, COBIT 2019 process evaluation, and SOP documentation.",
  "I'm passionate about crafting impactful digital solutions and committed to continuous learning to build high-quality, user-centered products.",
];
