# Bean Tradition - Artisanal Coffee Experience

A premium, full-stack coffee e-commerce application designed to provide a luxury brewing experience. This platform allows users to explore artisanal coffee beans, manage a cart, and complete secure checkouts with Razorpay integration, all backed by a Supabase/PostgreSQL database.

## 🌟 Features

- **Premium UI/UX**: Cinematic Hero sections, artisan covenant displays, and a seamless shopping experience.
- **Full-Stack Integration**: Real-time product management and order tracking via Supabase.
- **Secure Payments**: Integrated with Razorpay for seamless and secure transactions.
- **Admin Dashboard**: Manage orders, track sales, and oversee the product catalog.
- **User Profiles**: Track "Brew History" and manage personal details.
- **Responsive Design**: Optimized for both mobile and desktop users.

## 🛠 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Axios.
- **Backend**: Node.js, Express.
- **Database**: Supabase (PostgreSQL).
- **Authentication**: JWT based auth with Supabase user management.
- **Payments**: Razorpay API.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- Supabase Account
- Razorpay Account (for keys)

### Run in GitHub Codespaces

This repo includes a dev container so it runs in Codespaces with almost no setup.

1. On GitHub, click **Code → Codespaces → Create codespace on main**.
2. Wait for the container to build. It automatically runs `npm run setup`, which
   installs the frontend and backend dependencies and creates starter `.env`
   files from the provided examples.
3. Add your credentials:
   - `server/.env` — Supabase, JWT, Razorpay, and email values (see
     `server/.env.example`). The backend will not start until
     `SUPABASE_URL` and `SUPABASE_KEY` are set to real values.
   - `.env` (root) — `GEMINI_API_KEY` if you use the AI features
     (see `.env.example`).
4. Start both the frontend and backend together:
   ```bash
   npm run dev:all
   ```
5. When port **3000** is forwarded, open the preview (Codespaces shows a
   notification, or use the **Ports** tab). The frontend proxies `/api`
   requests to the backend on port **5000** automatically.

> The frontend renders even before the backend is configured, but product data,
> auth, and checkout require a running backend with a valid Supabase project.

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd bean-tradition
   ```

2. **Install Dependencies and create env files (one command):**
   ```bash
   npm run setup
   ```
   This installs both the frontend and backend dependencies and creates `.env`
   and `server/.env` from the example files.

   To do it manually instead:
   ```bash
   npm install
   npm --prefix server install
   cp .env.example .env
   cp server/.env.example server/.env
   ```

3. **Environment Setup:**
   Fill in `server/.env` using `server/.env.example` as a template.
   ```env
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_service_role_key
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY_ID=your_razorpay_id
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   ```
   Optionally set `GEMINI_API_KEY` in the root `.env` for the AI features.

4. **Run the Application:**
   - Start both the frontend and backend together (from root `/`):
     ```bash
     npm run dev:all
     ```
   - Or run them separately:
     ```bash
     npm run dev:server   # backend on http://localhost:5000
     npm run dev          # frontend on http://localhost:3000
     ```

## 📜 License

Created for **Bean Tradition**. All rights reserved 2026.
