# PlantCarePro Backend

## Overview
This is the NestJS backend for PlantCarePro, providing a REST API for plant management. It uses SQLite with TypeORM for data persistence.

## Prerequisites
- Node.js (v18 or later)
- npm

## Installation
```bash
npm install
```

## Environment Variables
Create a `.env` file in the root of the backend directory:

```env
PORT=3000
DATABASE_NAME=plantcarepro.db
NODE_ENV=development
FRONTEND_URL=http://localhost:3001
```

## Security & Best Practices
- **CORS**: Configured to only allow requests from `FRONTEND_URL`.
- **Validation**: All inputs are validated using `class-validator` and `ValidationPipe`.
- **Database**: `synchronize: true` is automatically disabled in production to prevent data loss.

## Running the App

### Development
```bash
npm run start:dev
```

### Production Build
1.  Build the application:
    ```bash
    npm run build
    ```
2.  Start the production server:
    ```bash
    npm run start:prod
    ```

## API Documentation
The API follows RESTful principles.
- `GET /plants` - List all plants
- `GET /plants/:id` - Get a single plant
- `POST /plants` - Create a new plant
- `PATCH /plants/:id` - Update a plant
- `DELETE /plants/:id` - Delete a plant
