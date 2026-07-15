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
  { name: "TypeScript", icon: "/assets/skills/javascript.webp", featured: true },
  { name: "React", icon: "/assets/skills/react.webp", featured: true },
  { name: "Next.js", icon: "/assets/skills/nextjs.webp", featured: true },
  { name: "Tailwind", icon: "/assets/skills/tailwind.webp", featured: true },
  { name: "GitHub", icon: "/assets/skills/github1.webp" },
  { name: "Firebase", icon: "/assets/skills/firebase.webp" },
];

export const radarData = [
  { subject: 'Frontend Arch', A: 95, fullMark: 100 },
  { subject: 'UI/UX Precision', A: 90, fullMark: 100 },
  { subject: 'Code Optimization', A: 85, fullMark: 100 },
  { subject: 'Security & QA', A: 88, fullMark: 100 },
  { subject: 'Team Leadership', A: 80, fullMark: 100 },
];

export const experiences = [
  {
    id: "habs",
    company: "PT HABS Konstruksi Karya",
    title: "Full Stack Web Developer",
    period: "01/2026 - Present",
    highlights: [
      "Merancang dan membangun website company profile interaktif serta sistem fitur absensi digital berbasis web secara end-to-end (mandiri) guna menyederhanakan manajemen kehadiran karyawan internal.",
      "Mendigitalisasi alur bisnis operasional dengan mengeksekusi arsitektur aplikasi inventarisasi aset perusahaan, mengelola integrasi basis data serta pengembangan antarmuka pengguna yang responsif.",
      "Bertanggung jawab penuh atas seluruh siklus hidup pengembangan aplikasi (Software Development Life Cycle / SDLC) internal, memastikan performa aplikasi optimal, aman, dan mudah dipelihara (maintainable).",
    ],
  },
  {
    id: "lppan-qa",
    company: "PT LPP Agro Nusantara",
    title: "IT Governance & Quality Assurance",
    period: "03/2025 - Present",
    highlights: [
      "Mengembangkan dan menguji arsitektur frontend pada proyek digitalisasi proses bisnis internal menggunakan Next.js dan TypeScript, memastikan kode berjalan optimal dan minim error sebelum diimplementasikan ke tahap production.",
      "Menyusun dan mengevaluasi SOP tata kelola TI berbasis COBIT 2019, mengawal standardisasi siklus hidup pengembangan perangkat lunak (SDLC) guna meningkatkan level kematangan (IT Maturity) teknologi perusahaan.",
      "Menyusun laporan teknis, test cases, serta dokumentasi penjaminan kualitas (Quality Assurance) untuk memastikan seluruh fitur aplikasi memenuhi standar kepatuhan teknologi sebelum dirilis ke manajemen.",
    ],
  },
  {
    id: "lppan-digital-talent",
    company: "PT LPP Agro Nusantara",
    title: "Digital Talent",
    period: "01/2025 - 02/2025",
    highlights: [
      "Menganalisis infrastruktur teknologi eksisting dan mengevaluasi tingkat kematangan TI (IT Maturity) menggunakan framework COBIT 2019, serta merumuskan penyempurnaan SOP operasional guna meningkatkan efisiensi tata kelola teknologi organisasi.",
      "Merancang dan membangun aplikasi dashboard peminjaman barang berbasis web menggunakan Next.js dan Tailwind CSS yang terintegrasi dengan RESTful API, berhasil mendigitalisasi alur proses manual menjadi sistem yang lebih efisien, transparan, dan terpusat.",
    ],
  },
  {
    id: "kai",
    company: "PT Reska Multi Usaha (KAI Services)",
    title: "Staff Purchasing",
    period: "11/2023 - 05/2024",
    highlights: [
      "Mengelola dan menyinkronkan data pengadaan menggunakan SAP HANA untuk memastikan akurasi data serta meminimalkan risiko kesalahan input manual pada proses bisnis.",
      "Menangani dukungan teknis dan troubleshooting perangkat keras, lunak, serta sistem SAP guna memastikan kelancaran aktivitas operasional dan kolaborasi harian antar divisi.",
      "Merancang dan mengembangkan aplikasi web internal untuk pencatatan nomor Purchase Order (PO), mengotomatisasi proses input data, serta meningkatkan efisiensi pelacakan dokumentasi transaksi.",
    ],
  },
  {
    id: "neura",
    company: "PT Neura Integrasi Solusi",
    title: "Android Developer Intern",
    period: "09/2021 - 12/2021",
    highlights: [
      "Melakukan cleanup dan refactoring kode pada aplikasi NeurabotSSI guna meningkatkan keterbacaan, struktur kode, dan skalabilitas aplikasi untuk pengembangan jangka panjang.",
      "Mengembangkan komponen antarmuka aplikasi menggunakan Android Studio dan Java dengan menerapkan arsitektur komponen serta manajemen lifecycle yang efisien.",
      "Membangun modul aplikasi yang mengintegrasikan komponen UI dinamis (Fragment & RecyclerView) dengan RESTful API, menciptakan antarmuka pengguna yang responsif, dinamis, dan mudah dipelihara (maintainable).",
    ],
  },
];

export const projects = [
  {
    id: "sigap-it",
    category: "Web & Enterprise Apps",
    title: "SIGAP-IT — IT Governance & QA Platform",
    role: "Lead Frontend Engineer & IT Governance",
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "Shadcn UI", "Zustand"],
    image: "/assets/Nexcent.jpg", // placeholder
    background: "Proses monitoring tingkat kematangan TI (IT Maturity) serta siklus hidup pengembangan perangkat lunak (SDLC) di lingkungan PT LPP Agro Nusantara memerlukan standardisasi yang lebih terpusat. Tantangannya adalah membangun antarmuka sistem yang mampu mengintegrasikan penyusunan SOP berbasis COBIT 2019 sekaligus menjadi wadah pelaporan test cases dan dokumentasi Quality Assurance (QA).",
    method: "Mengembangkan modul frontend menggunakan Next.js 15 App Router dan TypeScript dengan memisahkan logic validasi kepatuhan dari komponen presentasional. Merancang antarmuka penjaminan kualitas digital dan memanfaatkan Tailwind CSS 4 serta Zustand.",
    result: "Berhasil mengawal standardisasi siklus SDLC perusahaan dan meningkatkan efisiensi pelacakan dokumen QA hingga tahap siap rilis ke manajemen.",
    github: "",
    live: "",
  },
  {
    id: "sipinjam",
    category: "Web & Enterprise Apps",
    title: "SIPINJAM — Dashboard Peminjaman Aset",
    role: "Frontend Developer (Digital Talent)",
    tech: ["Next.js", "Tailwind CSS", "RESTful API Integration", "Custom Hooks"],
    image: "/assets/Nexcent.jpg", // placeholder
    background: "Alur proses peminjaman barang dan aset operasional internal organisasi awalnya masih ditangani secara manual. Hal ini memicu ketidaktransparan data dan potensi bentrok jadwal peminjaman.",
    method: "Merancang dan membangun aplikasi dashboard berbasis web menggunakan Next.js yang terintegrasi penuh dengan RESTful API. Menggunakan Tailwind CSS untuk menciptakan tata letak antarmuka yang intuitif dan mengimplementasikan proteksi client-side.",
    result: "Sukses mendigitalisasi alur peminjaman barang menjadi sistem yang 100% lebih efisien, transparan, dan terpusat.",
    github: "",
    live: "",
  },
  {
    id: "ekur-btn",
    category: "Web & Enterprise Apps",
    title: "E-KUR Bank BTN",
    role: "Frontend Developer",
    tech: ["Next.js", "TypeScript", "React Hooks", "Tailwind CSS"],
    image: "/assets/e-kur-btn.jpg",
    background: "Proses pengisian formulir pengajuan Kredit Usaha Rakyat (KUR) secara digital menuntut alur yang aman dan presisi karena melibatkan data finansial sensitif.",
    method: "Membangun komponen formulir multi-tahap yang modular dan terstruktur menggunakan Next.js dan TypeScript. Menerapkan validasi data frontend yang ketat dan mengoptimalkan kegunaan antarmuka dengan Tailwind CSS.",
    result: "Menghasilkan antarmuka sistem aplikasi pengajuan KUR yang sangat interaktif, andal, dan minim error input pada sisi pengguna.",
    github: "https://github.com/Muhammadsyifasurya/e-kur.btn.co.id.git",
    live: "https://muhammadsyifasurya.github.io/e-kur.btn.co.id/",
  },
  {
    id: "habs-comprof",
    category: "Web & Enterprise Apps",
    title: "Sistem Absensi Digital & Company Profile",
    role: "Full Stack Web Developer",
    tech: ["Next.js", "Tailwind CSS", "Asset Inventory System", "Database Integration"],
    image: "/assets/Nexcent.jpg", // placeholder
    background: "Perusahaan konstruksi membutuhkan digitalisasi alur bisnis operasional harian, mencakup penyederhanaan manajemen kehadiran karyawan lapangan serta pelacakan sistem inventarisasi aset perusahaan.",
    method: "Mengambil tanggung jawab penuh atas seluruh siklus hidup pengembangan aplikasi (SDLC) internal. Membangun website company profile interaktif, fitur absensi digital, serta modul arsitektur inventarisasi aset.",
    result: "Berhasil mendigitalisasi sistem manajemen kehadiran dan inventarisasi perusahaan menjadi aplikasi yang aman, optimal, dan mudah dipelihara.",
    github: "",
    live: "",
  },
  {
    id: "nexcent",
    category: "Web & Enterprise Apps",
    title: "Nexcent",
    role: "Advanced Frontend Engineer",
    tech: ["Next.js (SSR)", "TypeScript", "Tailwind CSS", "React Hooks", "Context API", "Jest"],
    image: "/assets/Nexcent.jpg",
    background: "Sebagai bagian dari akselerasi kompetensi di RevoU, proyek Nexcent dirancang untuk mensimulasikan pembuatan aplikasi web modern dengan performa tinggi.",
    method: "Mengembangkan web dengan teknologi SSR Next.js dan TypeScript. Menerapkan pengujian unit terotomatisasi menggunakan Jest dan mengatur alur data menggunakan React Hooks dan Context API.",
    result: "Lulus program dengan predikat Proficient, membuktikan pemahaman mendalam tentang arsitektur Next.js standar industri.",
    github: "https://github.com/Muhammadsyifasurya/Nexcent.git",
    live: "https://muhammadsyifasurya.github.io/Nexcent/",
  },
  {
    id: "twibbon",
    category: "Web & Enterprise Apps",
    title: "Twibbon Maker",
    role: "Frontend Developer",
    tech: ["React", "Tailwind CSS", "HTML5 Canvas API"],
    image: "/assets/twibbon.jpg",
    background: "TK N 1 Pundong membutuhkan sebuah alat digital yang memudahkan pembuatan bingkai foto profil (twibbon) untuk kegiatan hari besar sekolah tanpa software rumit.",
    method: "Memanfaatkan HTML5 Canvas API pada sisi frontend untuk menangani proses penggabungan foto pengguna dengan aset bingkai secara instan. Merancang tata letak antarmuka yang sangat sederhana dengan Tailwind CSS.",
    result: "Aplikasi berhasil digunakan secara aktif oleh lingkungan TK N 1 Pundong, mempercepat proses pembuatan media kampanye sekolah.",
    github: "https://github.com/Muhammadsyifasurya/Twibbon.git",
    live: "https://muhammadsyifasurya.github.io/Twibbon/",
  },
  {
    id: "hidroponik",
    category: "Mobile & IoT Automation",
    title: "Sistem Kontrol & Monitoring Nutrisi Hidroponik",
    role: "IoT Engineer",
    tech: ["IoT Hardware", "Android", "Java/Kotlin"],
    image: "/assets/twibbon.jpg", // placeholder
    background: "Pemberian nutrisi pada tanaman hidroponik secara manual sering kali tidak konsisten, yang berpotensi menurunkan kualitas hasil panen.",
    method: "Merancang antarmuka sistem kontrol dan monitoring otomatis berbasis Android untuk menyajikan visualisasi data sensor secara real-time. Mengintegrasikan komunikasi data perangkat keras IoT dengan aplikasi mobile.",
    result: "Berhasil membangun sistem otomasi yang memudahkan pengguna dalam menjaga kestabilan nutrisi tanaman secara real-time dan akurat.",
    github: "",
    live: "",
  },
  {
    id: "cabai",
    category: "Mobile & IoT Automation",
    title: "Dashboard Interaktif Perkebunan Cabai",
    role: "IoT Engineer",
    tech: ["Web/Mobile Dashboard", "IoT Integration"],
    image: "/assets/twibbon.jpg", // placeholder
    background: "Kondisi tanah perkebunan cabai yang fluktuatif memerlukan pengawasan berkala agar manajemen pengairan dan pemupukan tidak salah sasaran.",
    method: "Mengembangkan aplikasi dashboard interaktif khusus untuk memantau parameter kondisi tanah secara berkala. Mengintegrasikan fitur kontrol manual serta otomatis ke dalam dashboard.",
    result: "Menghasilkan sistem manajemen pertanian presisi yang mampu membantu optimalisasi perawatan lahan cabai berbasis data dashboard.",
    github: "",
    live: "",
  },
  {
    id: "smart-trash",
    category: "Mobile & IoT Automation",
    title: "Dashboard Otomasi Mobile",
    role: "Mobile Developer",
    tech: ["Mobile App", "RESTful API/Mqtt", "Notification System"],
    image: "/assets/twibbon.jpg", // placeholder
    background: "Perangkat otomasi rumah tangga seperti tempat sampah pintar dan pemberi makan hewan otomatis membutuhkan sistem pemantauan terpusat yang responsif.",
    method: "Membangun berbagai aplikasi dashboard berbasis mobile untuk sistem otomasi dengan fokus utama pada pengalaman pengguna (UX) yang bersih. Mengoptimalkan responsivitas penerimaan notifikasi sistem.",
    result: "Aplikasi berhasil memberikan alur kontrol yang seamless dan responsif.",
    github: "",
    live: "",
  }
];

export const aboutParagraphs = [
  "Hello! I'm Muhammad Syifa Surya Saputra, a passionate Frontend Developer with a strong foundation in building responsive and scalable web applications using Next.js, TypeScript, and React.js.",
  "I gained hands-on experience through the Full-Stack Software Engineering program at RevoU and my real-world contributions at PT LPP Agro Nusantara, where I built internal dashboards, integrated RESTful APIs, and optimized inventory workflows using TailwindCSS.",
  "My technical stack includes JavaScript, TypeScript, Flask, Laravel, MySQL, and Firebase. I follow best practices in clean code, component-based architecture, and global state management with React Context.",
  "I've worked with Agile teams, applied unit testing with Jest, and managed code with Git and GitHub. Beyond frontend, I also bring experience in IT governance, COBIT 2019 process evaluation, and SOP documentation.",
  "I'm passionate about crafting impactful digital solutions and committed to continuous learning to build high-quality, user-centered products.",
];
