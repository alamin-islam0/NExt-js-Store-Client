# ShopElite - Premium E-Commerce Client

A modern, responsive, and feature-rich e-commerce frontend built with **Next.js 16** and **Tailwind CSS v4**. This application provides a seamless shopping experience with a focus on aesthetics, performance, and usability.

![ShopElite Demo](https://images.unsplash.com/photo-1472851294608-4152ef336f6d?auto=format&fit=crop&q=80&w=1200&h=400)

## 🚀 Live Demo & Repo

- **Live Site:** [Visit ShopElite](https://n-ext-js-store-client-git-main-alamin-islam0s-projects.vercel.app/)
- **Backend Repository:** [Items Management API](https://github.com/alamin-islam0/Items-management-api)

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Directory)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State/Notifications:** React Hot Toast
- **Theming:** next-themes (Dark/Light mode)
- **Font:** Inter (Google Fonts)

## ✨ Key Features

- **Storefront UI:**
  - Stunning Hero section with gradient text and call-to-actions.
  - Featured sections: Trending Products, Testimonials, About Us, FAQ, and Newsletter.
  - Fully responsive design optimized for Mobile, Tablet, and Desktop.

- **Product Management:**
  - **Browse Items:** Dynamic grid layout displaying product cards with hover effects.
  - **Product Details:** Dedicated page for each item showing detailed specs, pricing, and stock status.
  - **Add Items:** Protected route to add new products (requires login).

- **User Experience (UX):**
  - **Dark Mode:** Fully integrated system-aware dark mode with a toggle switch.
  - **Responsive Navigation:** Interactive mobile hamburger menu with smooth transitions.
  - **Toast Notifications:** Real-time feedback for user actions (login, logout, errors).
  - **Loading States:** Graceful fallbacks and mock data support when the backend is unavailable.

- **Authentication:**
  - JWT-based authentication flow (Login/lines).
  - Middleware for route protection (redirects unauthenticated users from protected pages).

## 🔐 Login Credentials

Use the following mock credentials to test the authentication features:

- **Email:** `admin@example.com`
- **Password:** `123456`

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/alamin-islam0/NExt-js-Store-Client.git
   cd nextjs-store-client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory:

   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:5001
   API_TOKEN=your-secret-token
   ```

4. **Run the Development Server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router pages and layouts
│   ├── actions/          # Server Actions for form handling
│   ├── add-item/         # Add Item page
│   ├── items/            # Product listing and details pages
│   ├── login/            # Authentication page
│   ├── globals.css       # Global styles (Tailwind config)
│   └── layout.tsx        # Root layout with providers
├── components/           # Reusable UI components
│   ├── sections/         # Landing page sections
│   ├── Navbar.tsx        # Responsive navigation
│   ├── MobileMenu.tsx    # Mobile drawer menu
│   └── ThemeToggle.tsx   # Dark/Light mode switcher
└── middleware.ts         # Route protection logic
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Designed and developed by **Alamin Islam**.
