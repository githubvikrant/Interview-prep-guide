# ⚡ Full-Stack Interview Prep Guide

A comprehensive, interactive study guide covering all critical topics for full-stack developer interviews. Built with pure HTML, CSS, and JavaScript — no build tools required. Host it live on **GitHub Pages** in under 2 minutes.

## 🌐 Live Demo

> After enabling GitHub Pages, your guide will be available at:
> `https://<your-username>.github.io/<repo-name>/`

## 📚 What's Inside

| # | Topic | Priority |
|---|-------|----------|
| 1 | Authentication & Authorization | 🔴 Very Important |
| 2 | Real-Time Systems (WebSockets/Socket.IO) | 🔴 Huge Value |
| 3 | Database Design (MongoDB) | 🔴 Extremely Important |
| 4 | Caching with Redis | 🔴 Huge Differentiator |
| 5 | Async & Backend Architecture | 🔴 Critical |
| 6 | System Design Thinking | 🔴 Most Important |
| 7 | File Storage & Upload Systems | 🟠 Very Useful |
| 8 | Security | 🔴 Massive Differentiator |
| 9 | Docker & Containerization | 🟠 Very High Value |
| 10 | Deployment & DevOps | 🔴 Must Know |
| 11 | AI Integration | 🟣 Optional But Powerful |
| 12 | Architecture & Code Quality | 🟠 Very Overlooked |

Plus: **Core Stack Mastery** and **OmniFlow Project Blueprint**

## ✨ Features

- 🌙 **Dark/Light mode** — persisted in localStorage
- 📌 **Sticky sidebar** with active-section scrollspy
- 🔍 **Search** — filter topics instantly
- 📊 **Interactive diagrams** via Mermaid.js (JWT flows, architecture maps, ERDs)
- 💻 **Syntax-highlighted code** via Prism.js
- 📋 **Copy code** buttons on every snippet
- 🎤 **Accordion Q&A** — 50+ interview questions with model answers
- 📱 **Responsive** — works on mobile, tablet, desktop
- 🖨️ **Print-friendly** CSS for offline use

## 🚀 Host on GitHub Pages (2 minutes)

```bash
# 1. Create a new GitHub repo (e.g., "interview-prep")

# 2. Push this folder to the repo
git init
git add .
git commit -m "Initial commit: Interview prep study guide"
git branch -M main
git remote add origin https://github.com/<your-username>/interview-prep.git
git push -u origin main

# 3. Enable GitHub Pages
# Go to: Settings → Pages → Source → "Deploy from a branch"
# Branch: main | Folder: / (root)
# Save → wait ~60 seconds → your site is live!
```

## 📁 File Structure

```
Interview preparation/
├── index.html          ← All content (open this to view locally)
├── css/
│   └── style.css       ← Dark theme, glassmorphism, animations
├── js/
│   └── main.js         ← Scrollspy, search, accordion, copy code
└── README.md           ← This file
```

## 🔧 Local Development

No server needed! Just open `index.html` directly in your browser:

```bash
# Option 1: Double-click index.html

# Option 2: Use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"

# Option 3: Python simple server
python -m http.server 8000
# Then open http://localhost:8000
```

## 🚀 Recommended Project: OmniFlow

A **Real-Time AI-Enhanced Project Management SaaS** — one project that demonstrates ALL 12 interview topics with justifiable architectural decisions.

**Key features:** Kanban boards, AI task breakdown, live presence indicators, BullMQ background jobs, Redis caching, JWT + RBAC auth, Multer/Cloudinary uploads, Docker Compose, GitHub Actions CI/CD.

## 📦 Tech Stack (CDN — no installation needed)

| Library | Purpose | Version |
|---------|---------|---------|
| Mermaid.js | Architecture diagrams | v10 |
| Prism.js | Syntax highlighting | v1.29 |
| Google Fonts | Inter + JetBrains Mono | Latest |

---

Made with ⚡ for interview success — good luck! 🎯
