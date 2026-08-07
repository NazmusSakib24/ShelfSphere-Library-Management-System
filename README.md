# 📚 ShelfSphere Library Management System API

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
| Sakib | Auth & Users | `/auth/register`, `/auth/login`, `/auth/me` |
| Zunaed | Books & Categories | `/books`, `/books/:id` (CRUD + Many-to-Many with Category), ER Diagram |
| Adittya | Borrowing & Returns | `/borrows`, `/borrows/myborrows`, `/borrows/:id/return` |
| Prithwib | Reservations & Member History | `/reservations`, `/reservations/:id`, `/members/:id/history` |
| Extras | Mailer, Docs & QA | Mailer, Swagger, README, Testing, Repository Management |

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

## 📊 Entity–Relationship Diagram

<img width="1684" height="1204" alt="AWT Mid ER Diagram 2 drawio" src="https://github.com/user-attachments/assets/ad1770af-3088-43bb-a38b-0dbb668ef68a" />





