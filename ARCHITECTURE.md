# PlantCarePro Architecture

## Overview
PlantCarePro is a full-stack application designed for managing plant care schedules, tracking growth, and maintaining a personal plant encyclopedia.

## System Architecture

### Frontend (Next.js)
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **State Management**: React Hooks & Context
- **Responsibilities**:
  - UI rendering and user interaction.
  - Client-side routing.
  - API communication via Service Layer.

### Backend (NestJS)
- **Framework**: NestJS (Node.js)
- **Database**: SQLite
- **ORM**: TypeORM
- **Responsibilities**:
  - Data persistence and retrieval.
  - Business logic validation.
  - API endpoints for frontend consumption.

## Data Flow
1.  **User Action**: User interacts with the UI (e.g., adds a plant).
2.  **Service Layer**: Frontend Service (e.g., `PlantService`) makes an HTTP request to the Backend API.
3.  **Controller**: Backend Controller receives the request.
4.  **Service**: Backend Service processes the logic.
5.  **Repository**: Backend Repository interacts with the SQLite database via TypeORM.
6.  **Response**: Data is returned up the chain to the Frontend.

## Directory Structure
```
/
├── frontend/ (was plant-care-pro)
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   └── ...
├── backend/
│   ├── src/
│   │   ├── app.module.ts
│   │   ├── plants/
│   │   └── ...
├── AGENT.md
├── TASK.md
└── ARCHITECTURE.md
```

## Key Technologies
- **Frontend**: Next.js, Tailwind CSS, Anime.js, Lucide React
- **Backend**: NestJS, TypeORM, SQLite
- **Tools**: npm, Git
