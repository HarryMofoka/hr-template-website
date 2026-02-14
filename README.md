# For The People — Enterprise HR Platform
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg) ![React](https://img.shields.io/badge/react-18.0-61DAFB.svg) ![Tailwind](https://img.shields.io/badge/tailwind-3.4-38B2AC.svg)

> **Defining the standard for industrial recruitment.**  
> Built for the South African market with precision, trust, and technical expertise.

---

## 🚀 Overview

**For The People** is a modern, high-performance React application designed for an elite recruitment agency specializing in **High-Tech Engineering**, **Construction**, and **Logistics**. 

Authenticated by a "dark mode" aesthetic with glassmorphism effects, magnetic interactions, and smooth localized animations, this project serves as a premium digital storefront for connecting top-tier talent with industry-leading companies.

### ✨ Key Features

- **🇿🇦 Fully Localized**: Content, legal compliance (POPIA/CIPC), and contact details tailored for South Africa.
- **💼 Integrated Job Board**: Serverless job listing system with detailed role descriptions and direct email application flow.
- **🎨 Premium UI/UX**:
  - **Magnetic Navigation**: Interactive buttons that follow cursor movement.
  - **Glassmorphism**: Modern frosted glass effects on overlays and cards.
  - **Smooth Animations**: Powered by `framer-motion` for scroll reveals and transitions.
- **📱 Fully Responsive**: Flawless experience across desktop, tablet, and mobile devices with a custom touch-optimized navigation drawer.
- **⚡ High Performance**: Built on Vite for instant load times and optimized asset delivery.

---

## 🛠️ Technology Stack

| Core | Styling | Animation | Tooling |
| :--- | :--- | :--- | :--- |
| **React 18** | **Tailwind CSS** | **Framer Motion** | **Vite** |
| React Router v6 | Lucide React Icons | CSS Variables | PostCSS |
| JavaScript (ES6+) | Modern Reset | SVG Graphics | NPM |

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── layout/       # Navbar, Footer, Layout Wrappers
│   ├── sections/     # Hero, Stats, Services, Quote (Landing Page)
│   ├── jobs/         # JobCard, Job Board Components
│   └── utils/        # ScrollToTop, Helper Functions
├── data/
│   └── jobs.json     # Mock database for job listings
├── pages/
│   ├── Candidates.jsx  # Job Board & Candidate Info
│   ├── Companies.jsx   # B2B Partner Information
│   ├── JobDetail.jsx   # Dynamic Job Posting Page
│   └── ...             # Home, Imprint, Privacy, Terms
├── App.jsx           # Main Router Configuration
└── index.css         # Global Styles & Tailwind Directives
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/HarryMofoka/hr-template-website.git
    cd hr-template-website
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

---

## 🌍 Localization Details

This project is configured for the **South African** market context:
- **Currency**: ZAR (R)
- **Timezone**: SAST (UTC+2)
- **Legal Jurisdiction**: Johannesburg, South Africa
- **Data Privacy**: Compliant with **POPIA** (Protection of Personal Information Act)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

