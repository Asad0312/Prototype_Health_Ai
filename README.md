# HealthCare AI with MySQL Backend

## Frontend (React/Vite)
```bash
npm run dev  # http://localhost:5173
```

## Backend (Node/Express/MySQL)
```bash
cd backend
npm install
copy .env.example .env
npm run dev  # http://localhost:5000
```

## Database Setup
1. Start XAMPP MySQL
2. phpMyAdmin → Create `healthcare_ai` DB
3. Run `backend/setup.sql`

## APIs
- POST /api/auth/login `{email, password}`
- GET /api/health/dashboard

Demo user: sarah@example.com
