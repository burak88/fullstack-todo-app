# 📝 Advanced Todo App

An advanced **Todo Application** built with modern web technologies including **GraphQL**, **Prisma**, **Next.js 14 App Router**, **Redux**, **Tailwind CSS**, and **TypeScript**. This project focuses on modular component design and custom styling using Tailwind CSS.

## 🚀 Features

- 🗂 **GraphQL API**: Efficient data fetching with a flexible schema.
- 🛠 **Prisma ORM**: Simplified database operations.
- 🌐 **Next.js 14 App Router**: Modern routing system with improved server-side rendering and layouts.
- 📊 **Redux Toolkit**: Centralized and efficient state management.
- 🎨 **Tailwind CSS**: Fully customizable and responsive UI components.
- 🧑‍💻 **TypeScript**: Strongly typed code for better maintainability.

---

## 🛠️ Technologies Used

| Technology       | Description                          |
|-------------------|--------------------------------------|
| **Next.js 14**   | React-based framework for building web applications. |
| **GraphQL**      | API query language for efficient data fetching. |
| **Prisma**       | Modern database toolkit and ORM.     |
| **Redux Toolkit**| Simplified state management.         |
| **Tailwind CSS** | Utility-first CSS framework.         |
| **TypeScript**   | Type-safe JavaScript.                |

---
## 📂 Project Structure
├── app/
│   ├── layout.tsx         # Shared layout for all pages
│   ├── page.tsx           # Main page
│   ├── api/
│   │   └── graphql/
│   │       └── route.ts   # GraphQL API handler
├── components/
│   ├── Button.tsx         # Custom reusable button component
│   ├── TodoItem.tsx       # Todo item component
│   └── ...                # Other reusable components
├── prisma/
│   ├── schema.prisma      # Prisma schema
│   └── seed.ts            # Database seeding script
├── redux/
│   ├── store.ts           # Redux store setup
│   └── slices/
│       └── todoSlice.ts   # Todo slice for state management
├── styles/
│   └── globals.css        # Tailwind CSS global styles
└── tsconfig.json          # TypeScript configuration

## 🏗️ Installation

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/burak88/fullstack-todo-app
cd your-todo-app
