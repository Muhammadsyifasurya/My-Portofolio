# Product Requirements Document (PRD): My-Portofolio (Interactive Edition)

> [!NOTE]
> PRD ini telah diperbarui untuk branch `feat/new-portofolio`. Fokus utama pengembangan adalah mengoptimalkan performa Next.js 15 & Tailwind 4, menyelaraskan profil untuk posisi **Frontend Developer di BRI Insurance (BRINS)**, serta menyematkan fitur antarmuka interaktif yang kreatif, elegan, dan 100% berbasis data CV resmi.

## 1. Pendahuluan

### 1.1 Tujuan
Mendokumentasikan fungsionalitas, arsitektur, dan kebutuhan pengembangan dari website portfolio pribadi Muhammad Syifa Surya Saputra[cite: 1]. Website ini berfungsi sebagai *living proof* kapabilitas teknis *Frontend Engineering* (mengedepankan *Clean Architecture*) sekaligus memvalidasi pemahaman mendalam tentang kualitas sistem (*Quality Assurance*) dan tata kelola TI (*IT Governance*)[cite: 1].

### 1.2 Target Pengguna
- **HR Recruiter (Khususnya BRI Insurance)**: Mencari keselarasan data CV/LinkedIn, nilai budaya (AKHLAK), dan dibuat terkesan oleh efisiensi informasi yang disajikan[cite: 1].
- **Hiring Manager / Tech Lead**: Menilai kualitas arsitektur kode (*clean code*), performa optimasi web (*loading speed*), manajemen state, dan kemampuan *problem-solving* kandidat melalui dokumentasi proyek berbasis STAR[cite: 1].

---

## 2. Arsitektur dan Teknologi (Updated Stack)
Stack teknologi yang digunakan pada branch `feat/new-portofolio`:
- **Framework Utama**: Next.js 15 (App Router), React 19[cite: 1]
- **Styling & UI**: Tailwind CSS 4 & Shadcn UI Components[cite: 1]
- **State Management**: Zustand (untuk pengelolaan status UI global)
- **Animasi & Efek**: Framer Motion
- **Visualisasi Data**: Recharts (untuk grafik analitis keahlian)
- **Ikon & Bahasa**: Lucide React & TypeScript[cite: 1]
- **Deployment**: Vercel (Disarankan untuk optimasi performa Next.js)

---

## 3. Struktur Halaman & Fitur Utama (Target State)

### 3.1 Navigasi & Global Interactivity
- **Sticky / Floating Navbar**: Navigasi minimalis yang responsif menuju seksi utama.
- **Interactive Corporate Lanyard ID Badge**: Ornamen interaktif berupa gantungan ID Card karyawan (berbasis identitas korporat PT LPPAN / PT HABS) yang menjulur di sudut layar[cite: 1]. Memanfaatkan simulasi gaya pegas (*spring physics*) Framer Motion, pengunjung dapat menarik (*drag*) lanyard ini ke bawah, dan jika diklik, kartu akan membalik (*3D Card Flip*) untuk memunculkan jalan pintas cepat seperti unduh CV dan kontak langsung[cite: 1].

### 3.2 Detail Seksi Halaman (SPA Format)

#### 1. Hero Section & Pitch Video
- Menampilkan *headline* profesional yang kuat sebagai Frontend Engineer dengan fondasi *mindset* QA & Governance[cite: 1].
- **Video Player Card**: Wadah untuk memutar **Video Perkenalan Diri (60-90 detik)** yang sudah dibuat[cite: 1]. Ketika video selesai diputar, muncul *toast notification* berupa ucapan terima kasih atas waktu yang diluangkan rekruter.

#### 2. About & Analytics Stats Chart
- **Bento Grid Layout**: Menyusun profil perkenalan diri secara visual, bersih, dan mudah dipindai (*scannable*)[cite: 1].
- **Skills Radar Chart**: Menggunakan **Radar/Spider Web Chart** interaktif dari `Recharts` untuk memvisualisasikan data keahlian. Sumbu grafik menampilkan pilar kekuatan: *Frontend Architecture, UI/UX Precision, Code Optimization, Security & Compliance,* dan *Team Leadership*.

#### 3. Interactive Horizontal Timeline (Experience Section)
- Mengubah riwayat kerja konvensional menjadi **Timeline Horizontal** yang bergerak dinamis menggunakan efek *scroll* horizontal yang mulus.
- Menyusun riwayat berdasarkan kronologis terbalik (*Reverse Chronological*) sesuai CV asli[cite: 1]:
  1. *PT HABS Konstruksi Karya (Full Stack Web Developer | 01/2026 - Present)*[cite: 1]
  2. *PT LPP Agro Nusantara (IT Governance & Quality Assurance | 03/2025 - Present)*[cite: 1]
  3. *PT LPP Agro Nusantara (Digital Talent | 01/2025 - 02/2025)*[cite: 1]
  4. *PT Reska Multi Usaha / KAI Services (Staff Purchasing | 11/2023 - 05/2024)*[cite: 1]
  5. *PT Neura Integrasi Solusi (Android Developer Intern | 09/2021 - 12/2021)*[cite: 1]

#### 4. The Project Vault (Work Section)
- Menampilkan daftar proyek lengkap dalam kartu interaktif yang bisa difilter berdasarkan kategori (*Web & Enterprise Apps* vs *Mobile & IoT Automation*)[cite: 1].
- **Daftar Proyek Resmi**: SIGAP-IT (PT LPPAN), SIPINJAM (PT LPPAN), E-KUR Bank BTN (External Fintech), Sistem Absensi & Comprof (PT HABS), Nexcent (RevoU Faculty Project), Twibbon Maker (TK N 1 Pundong), serta Proyek IoT Otomasi[cite: 1].
- **Struktur Konten Proyek (Framework STAR)**: Ditulis mendalam mencakup *Background, Method,* dan *Result*[cite: 1].
- **CTA**: Tombol akses langsung menuju `Live Demo` dan `View Code (GitHub)`[cite: 1].

#### 5. Compatibility Calculator & Contact Section
- **Matchmaker Widget**: Widget kalkulator kualifikasi sebelum *footer*. HRD dapat mencentang kriteria kebutuhan tim mereka (contoh: *Paham Next.js, Peduli Kualitas/QA, Kerja Terstruktur*). Setiap kotak yang dicentang akan menggerakkan animasi angka secara dinamis hingga menyentuh angka **"100% Match for BRI Insurance! [Hubungi Syifa Sekarang]"**.
- Jalur kontak langsung menuju Email profesional (syifamuhamamd3139@gmail.com), LinkedIn, dan GitHub[cite: 1].

---

## 4. Advanced Engineering (Branch `feat/new-portofolio`)

- [ ] **Interactive Physics Lanyard Component**: Membangun komponen gantungan ID Card karyawan interaktif menggunakan teknik *physics-based animations*, interaksi *drag-and-drop* vertikal, serta animasi *3D card flip*[cite: 1].
- [ ] **Optimized Bento Grid & Core Layout**: Menyusun tata letak grid modular responsif yang bersih, efisien, dan bebas dari beban *script* yang tidak diperlukan[cite: 1].

---

## 5. Metrik Keberhasilan

- **Google Lighthouse Score**: Mengamankan skor ≥ **90%** untuk aspek *Performance, Accessibility, Best Practices,* dan *SEO* dengan memanfaatkan optimalisasi bawaan Next.js 15 (`next/image`, `next/font`, *dynamic imports*)[cite: 1].
- **Seamless Micro-interactions**: Semua transisi animasi (Framer Motion) berjalan stabil di 60fps tanpa adanya *layout shifting* (CLS = 0)[cite: 1].
- **Kecocokan Data**: Seluruh informasi teks di website 100% sinkron dan selaras dengan CV serta profil LinkedIn resmi[cite: 1].