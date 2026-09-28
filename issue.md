# 🚀 Issue: Inisiasi Project Portfolio

## Overview

Buat project portfolio personal dari nol di direktori ini menggunakan Astro sebagai framework utama, dilengkapi Tailwind CSS untuk styling, Framer Motion untuk animasi, dan Plausible Analytics untuk tracking tanpa cookie.

---

## Tech Stack

| Tool                                            | Versi        | Kegunaan                    |
| ----------------------------------------------- | ------------ | --------------------------- |
| [Astro](https://astro.build)                    | Latest       | Framework utama (SSG/SSR)   |
| [Tailwind CSS](https://tailwindcss.com)         | v4           | Utility-first styling       |
| [Framer Motion](https://www.framer.com/motion/) | Latest       | Animasi & transisi          |
| [Plausible Analytics](https://plausible.io)     | Script embed | Analytics ringan, no-cookie |

---

## Tasks

### 1. Project Initialization

- Inisialisasi project Astro baru di folder ini (`./`)
- Pilih template minimal/blank
- Integrasikan Tailwind CSS via Astro integration official (`@astrojs/tailwind`)
- Install Framer Motion sebagai dependency

### 2. Konfigurasi & Setup

- Setup Tailwind config: font, warna, dan breakpoint sesuai desain portofolio
- Tambahkan Plausible Analytics script ke layout global (cukup embed script tag dari Plausible dashboard)
- Pastikan Framer Motion dapat digunakan di Astro (gunakan island / React integration jika diperlukan)

### 3. Struktur Halaman

Buat halaman-halaman berikut secara minimal:

- **`/`** — Landing / Hero section (nama, tagline, CTA)
- **`/about`** — Tentang saya (bio singkat, skills)
- **`/projects`** — Daftar project dengan card
- **`/contact`** — Form atau link kontak

### 4. Layout & Komponen Dasar

- Buat global layout (`Layout.astro`) yang mencakup: Navbar, Footer, dan script Plausible
- Buat komponen reusable: `Navbar`, `Footer`, `ProjectCard`
- Terapkan animasi masuk (fade-in / slide-up) menggunakan Framer Motion pada section utama

### 5. Deployment Setup (Opsional)

- Tambahkan konfigurasi output untuk static hosting (Vercel / Netlify)
- Pastikan `astro.config.mjs` sudah dikonfigurasi dengan benar

---

## Acceptance Criteria

- [x] Project bisa dijalankan dengan `npm run dev`
- [x] Semua halaman bisa diakses dan tidak ada error
- [x] Tailwind utility classes berfungsi
- [x] Animasi Framer Motion muncul di halaman utama
- [x] Plausible script ter-load di setiap halaman

---

## Notes

- Tidak perlu konten nyata dulu — placeholder/dummy content sudah cukup
- Fokus pada struktur dan integrasi, bukan desain final
- Gunakan TypeScript jika memungkinkan, tapi tidak wajib
