# 📚 ShelfSphere API

Backend REST API for the **ShelfSphere - Online Library Management System**.

## 🚀 Tech Stack

- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- JWT Authentication
- REST API

---

## 👥 Team Responsibilities

| Member | Module | Responsibilities |
|--------|--------|------------------|
| A | Auth & Users | `/auth/register`, `/auth/login`, `/auth/me` |
| B | Books & Categories | `/books`, `/books/:id` (CRUD + Many-to-Many with Category) |
| C | Borrowing & Returns | `/borrows`, `/borrows/myborrows`, `/borrows/:id/return` |
| D | Reservations & Member History | `/reservations`, `/reservations/:id`, `/members/:id/history` |
| E | Mailer, Docs & QA | Mailer, Swagger, README, Testing, Repository Management |

---

## 📂 Project Structure

```
src/
├── auth/
├── users/
├── books/
├── categories/
├── borrows/
├── reservations/
├── mail/
└── main.ts
```

---

## 📌 Project Status

