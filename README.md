
<h1 align="center">NadanPure</h1>


<p align="center">
  <strong>Preservative-free Kerala organic produce</strong><br/>
  Handpicked from local farms · Delivered fresh to your doorstep
</p>

<p align="center">
  <a href="https://nadan-pure.vercel.app">
    <img src="https://img.shields.io/badge/Live%20Website-Visit%20Now-1b4332?style=for-the-badge&logo=vercel&logoColor=white"/>
  </a>
  <img src="https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript"/>
  <img src="https://img.shields.io/badge/Supabase-Backend-3ecf8e?style=for-the-badge&logo=supabase"/>
</p>

---

## Preview

<p align="center">
  <img src="<img width="1594" height="807" alt="image" src="https://github.com/user-attachments/assets/42f07091-d165-43a7-bf1c-8344bc6b1c2b" />" width="100%" alt="NadanPure Preview"/>
</p>

---

## Overview

NadanPure is a full-stack e-commerce platform built to deliver authentic Kerala organic products directly from local farms to consumers.

The platform focuses on transparency, performance, and design quality. Each product is enriched with a verified purity score, ensuring trust and authenticity.

---

## Key Features

- Clean and modern product interface with quick add functionality  
- Secure authentication and user management using Supabase  
- Purity score system for product transparency  
- Farm-to-table traceability experience  
- Fully responsive and performance-optimized UI  
- Real user rating system and product insights  

---

## Architecture


Client (Next.js App Router)
│
▼
UI Layer (Tailwind + shadcn/ui)
│
▼
Backend Services (Supabase Auth + Database)
│
▼
Deployment (Vercel Edge Network)


---

## Tech Stack

| Layer        | Technology                          |
|-------------|-------------------------------------|
| Frontend    | Next.js 14 (App Router)             |
| Language    | TypeScript                          |
| UI System   | Tailwind CSS + shadcn/ui            |
| Backend     | Supabase (Auth + PostgreSQL)        |
| Deployment  | Vercel                              |

---

## Project Structure


NadanPure/
├── app/
├── components/
├── lib/
├── hooks/
├── public/
├── styles/
├── scripts/
└── config files


---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/AVA-NTHIKA14/NadanPure.git
cd NadanPure
Install dependencies
npm install
Run development server
npm run dev

Application will be available at:
http://localhost:3000

Environment Configuration

Create a .env.local file and configure:

NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
Deployment

This project is optimized for deployment on Vercel.

Steps:

Import repository into Vercel
Configure environment variables
Deploy
Performance and Design Principles
Minimal and clean UI inspired by modern e-commerce systems
Component-driven architecture for scalability
Optimized loading using Next.js features
Mobile-first responsive design
Accessibility-focused layout and typography
Live Application

https://nadan-pure.vercel.app/

Author

Avanthika KS

License

© 2026 Nadan Pure. All rights reserved.
