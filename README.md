# 🛍️ Product Manager - Full Stack Application

Full stack application for product management with React, Node.js, Express, PostgreSQL, and TypeScript.

## 📋 Description

Complete product administration system that allows CRUD operations (Create, Read, Update, Delete) with a modern and responsive interface. The project includes a RESTful backend with validations, unit tests, and Swagger documentation, along with a frontend developed in React with React Router and Tailwind CSS.

## ✨ Features

- ✅ Complete product CRUD
- ✅ Data validation with Express Validator (backend) and Valibot (frontend)
- ✅ RESTful API with Express
- ✅ PostgreSQL database with Sequelize ORM
- ✅ Modern interface with React and Tailwind CSS
- ✅ Routing with React Router
- ✅ API documentation with Swagger
- ✅ Unit tests with Jest and Supertest
- ✅ TypeScript in frontend and backend
- ✅ Centralized error handling
- ✅ CORS configured

## 🚀 Technologies

### Backend

- Node.js
- Express
- TypeScript
- PostgreSQL
- Sequelize ORM
- Express Validator
- Jest & Supertest
- Swagger (API documentation)
- Morgan (logs)
- CORS

### Frontend

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Axios
- Valibot (validations)
- ESLint

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/your-username/product-manager-fullstack.git
cd product-manager-fullstack
```

### 2. Configure Backend

```bash
cd backend
npm install
```

Create `.env` file based on `.env.example`:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
FRONTEND_URL=http://localhost:5173
PORT=4000
```

Create the database in PostgreSQL:

```sql
CREATE DATABASE rest_api;
```

### 3. Configure Frontend

```bash
cd ../frontend
npm install
```

## 🎯 Usage

### Start Backend

```bash
cd backend
npm run dev
```

The server will be running at `http://localhost:4000`

**API Documentation (Swagger):** `http://localhost:4000/api-docs`

### Start Frontend

```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173`

## 🧪 Testing

### Backend

```bash
cd backend

# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📁 Project Structure

```
.
├── backend/
│   ├── src/
│   │   ├── config/         # Database and Swagger configuration
│   │   ├── controller/     # Controllers
│   │   ├── middleware/     # Middlewares
│   │   ├── models/         # Sequelize models
│   │   ├── utils/          # Validations and utilities
│   │   ├── __tests__/      # Tests
│   │   ├── router.ts       # Routes
│   │   ├── server.ts       # Server configuration
│   │   └── index.ts        # Entry point
│   ├── .env.example
│   ├── jest.config.js
│   ├── tsconfig.json
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/     # Reusable components
    │   ├── layouts/        # Layouts
    │   ├── services/       # API services
    │   ├── types/          # TypeScript types
    │   ├── utils/          # Utilities
    │   ├── views/          # Views/Pages
    │   ├── router.tsx      # Route configuration
    │   └── main.tsx        # Entry point
    ├── index.html
    ├── vite.config.ts
    ├── tsconfig.json
    └── package.json
```

## 🔌 API Endpoints

### Products

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/products`     | Get all products     |
| GET    | `/api/products/:id` | Get a product by ID  |
| POST   | `/api/products`     | Create a new product |
| PUT    | `/api/products/:id` | Update a product     |
| PATCH  | `/api/products/:id` | Update availability  |
| DELETE | `/api/products/:id` | Delete a product     |
