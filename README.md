# 🌿 PlantCare Pro API

<div align="center">

![PlantCare Pro API](https://img.shields.io/badge/PlantCare-API-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
[![NestJS](https://img.shields.io/badge/NestJS-10-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![SQLite](https://img.shields.io/badge/SQLite-3-003B57?style=for-the-badge&logo=sqlite)](https://www.sqlite.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

**Robust Backend for PlantCare Pro** 🌱

Scalable REST API built with NestJS to manage your indoor jungle data securely and efficiently.

[Features](#features) • [Getting Started](#getting-started) • [Tech Stack](#tech-stack) • [License](#license)

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔒 **Secure API** | CORS enabled, Input Validation, and Environment Configuration |
| 🗄️ **Data Persistence** | Lightweight SQLite database with TypeORM |
| 🚀 **High Performance** | Built on fast & efficient NestJS framework |
| 🧩 **Modular Design** | Resource-based architecture (Plants, Users, Logs) |
| 🛠️ **Production Ready** | Optimized build and configuration for deployment |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm

### Installation

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install
```

### Configuration

Create a `.env` file in the root directory:

```env
PORT=3000
DATABASE_NAME=plantcarepro.db
NODE_ENV=development
FRONTEND_URL=http://localhost:3001
```

### Running the Server

```bash
# Development (Watch Mode)
npm run start:dev

# Production Build
npm run build
npm run start:prod
```

API will be available at [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="120">

**Framework**

![NestJS](https://img.shields.io/badge/-NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)

</td>
<td align="center" width="120">

**Language**

![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

</td>
<td align="center" width="120">

**Database**

![SQLite](https://img.shields.io/badge/-SQLite-003B57?style=flat&logo=sqlite&logoColor=white)

</td>
<td align="center" width="120">

**ORM**

![TypeORM](https://img.shields.io/badge/-TypeORM-FE0803?style=flat&logo=typeorm&logoColor=white)

</td>
</tr>
</table>

### Architecture

```
src/
├── app.module.ts           # Root Module (Config, Database)
├── main.ts                 # Entry point (CORS, Pipes)
├── plants/                 # Plants Resource
│   ├── dto/                # Data Transfer Objects
│   ├── entities/           # Database Models
│   ├── plants.controller.ts# API Endpoints
│   ├── plants.service.ts   # Business Logic
│   └── plants.module.ts    # Module Definition
└── ...
```

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

**Made with 💚 by [NirussVn0](https://github.com/NirussVn0)**

© 2026 NirussVn0. All rights reserved.

</div>
