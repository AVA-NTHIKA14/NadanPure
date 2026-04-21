# NadanPure

**Preservative-free Kerala organic produce**  
Handpicked from local farms · Delivered fresh to your doorstep

[![Live Website](https://img.shields.io/badge/Live%20Website-Visit%20Now-1b4332?style=for-the-badge&logo=vercel&logoColor=white)](https://nadan-pure.vercel.app)  
![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js)  
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript)  
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ecf8e?style=for-the-badge&logo=supabase)

---

## Preview

![NadanPure Preview](https://github.com/user-attachments/assets/42f07091-d165-43a7-bf1c-8344bc6b1c2b)

---

## Overview

NadanPure is a full-stack e-commerce platform built to deliver authentic Kerala organic products directly from local farms to consumers.

The platform focuses on transparency, performance, and design quality. Each product includes a verified purity score to ensure trust and authenticity.

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

```
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
```

---

## Tech Stack

| Layer        | Technology                       |
|-------------|----------------------------------|
| Frontend    | Next.js 14 (App Router)          |
| Language    | TypeScript                       |
| UI System   | Tailwind CSS + shadcn/ui         |
| Backend     | Supabase (Auth + PostgreSQL)     |
| Deployment  | Vercel                           |

---

## Project Structure

```
NadanPure/
├── app/
├── components/
├── lib/
├── hooks/
├── public/
├── styles/
├── scripts/
└── config files
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/AVA-NTHIKA14/NadanPure.git
cd NadanPure
```

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Application runs at:  
http://localhost:3000

---

## Environment Configuration

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

---

## Deployment

This project is optimized for deployment on Vercel.

1. Import repository into Vercel  
2. Configure environment variables  
3. Deploy  

---

## Performance and Design Principles

- Minimal and clean UI inspired by modern e-commerce systems  
- Component-driven architecture for scalability  
- Optimized loading using Next.js features  
- Mobile-first responsive design  
- Accessibility-focused layout and typography  

---

## Live Application

https://nadan-pure.vercel.app/

---

## Designed and Developed by Avanthika KS

---

## License

© 2026 Nadan Pure. All rights reserved.
