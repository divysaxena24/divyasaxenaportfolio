# 💎 Divya Saxena | FAANG-Level Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-6366F1?style=for-the-badge&logo=framer)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A premium, high-performance portfolio website engineered for excellence. This project showcases a blend of cutting-edge frontend aesthetics and robust backend logic, featuring advanced glassmorphism, cinematic animations, and a secure verification-based contact system.

---

## ✨ Premium Features

### 🎨 Design & Aesthetics
- **FAANG-Inspired Glassmorphism**: High-density blur effects with dynamic border glows and ambient mesh gradients.
- **Cinematic Experience**: Staggered entrance animations, parallax effects, and smooth layout transitions powered by Framer Motion.
- **Responsive Symmetry**: Precision-engineered layouts for mobile, tablet, and 4K displays.

### 🛠️ Technical Innovations
- **Secure OTP Verification**: Custom multi-step contact flow using **Nodemailer** and a server-side OTP store for anti-spam security.
- **Panoramic Project Showcase**: Interactive project cards with integrated tech-stack badges and real-time hover states.
- **Dynamic Experience Timeline**: A professional, dual-sided chronological journey with interactive timeline nodes.
- **Live Status Indicator**: Real-time availability status integrated directly into the Hero section.

---

## 🛠️ Technical Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router), React 19 |
| **Styling** | Tailwind CSS, Lucide Icons |
| **Animations** | Framer Motion, React-Type-Animation |
| **Backend** | Next.js API Routes, Nodemailer |
| **Infrastructure** | Vercel, Git/GitHub |

---

## 📂 Project Architecture

```text
Portfolio/
├── src/
│   ├── app/                # Next.js App Router (Pages & API)
│   │   ├── api/            # Serverless functions (OTP logic)
│   │   └── layout.tsx      # Global shell & SEO metadata
│   ├── components/         # Modular React components
│   │   ├── sections/      # Section-specific components (Hero, Skills, etc.)
│   │   └── ui/            # Reusable primitive components
│   ├── lib/               # Shared utilities (Nodemailer, cn helper)
│   └── styles/            # Global design tokens
├── public/                # Static assets & branding
└── .env.local             # Environment configuration (SMTP)
```

---

## 🚀 Getting Started

### 1. Installation
```bash
git clone https://github.com/divysaxena24/Divya_Saxena_Portfolio.git
cd Divya_Saxena_Portfolio
npm install
```

### 2. Configure Environment
Create a `.env.local` file with your secure SMTP credentials:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-google-app-password
```
> [!IMPORTANT]
> Use a Google App Password (16 characters) for `EMAIL_PASS`, not your standard account password.

### 3. Development
```bash
npm run dev
```

---

## 🎯 Optimization & SEO
- **Core Web Vitals**: Optimized for LCP and FID with Next.js image optimization and efficient font loading.
- **Semantic HTML**: Fully accessible structure using descriptive tags for maximum SEO reach.
- **Modern Performance**: Zero-flicker transitions and minimal bundle size.

---

## 👤 Contact & Support

Divya Saxena - [divysaxena2402@gmail.com](mailto:divysaxena2402@gmail.com)

**Portfolio Link**: [https://github.com/divysaxena24/Divya_Saxena_Portfolio](https://github.com/divysaxena24/Divya_Saxena_Portfolio)

---

## 📝 License
Distributed under the MIT License. See `LICENSE` for details.
