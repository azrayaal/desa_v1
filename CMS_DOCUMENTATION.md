# 📚 Dokumentasi Lengkap CMS Dashboard Desa

## 📖 Daftar Isi

1. [Overview](#overview)
2. [Arsitektur Sistem](#arsitektur-sistem)
3. [Struktur Project](#struktur-project)
4. [Setup & Installation](#setup--installation)
5. [Cara Penggunaan](#cara-penggunaan)
6. [API Documentation](#api-documentation)
7. [Integrasi](#integrasi)
8. [Deployment](#deployment)
9. [Troubleshooting](#troubleshooting)

---

## Overview

Sistem CMS Dashboard Desa adalah solusi lengkap untuk mengelola dan menampilkan data desa secara dinamis. Sistem ini terdiri dari:

- **Backend API** (Express.js + PostgreSQL): REST API untuk CRUD operations
- **Frontend CMS** (React): Interface untuk admin mengelola data
- **Dashboard Public** (React): Dashboard untuk menampilkan data ke publik
- **Integrasi**: Custom hooks dan services untuk menghubungkan semua komponen

### 🎯 Fitur Utama

#### Backend API
- ✅ RESTful API dengan Express.js
- ✅ PostgreSQL database dengan migrations
- ✅ JWT Authentication & Authorization
- ✅ Role-based access control
- ✅ CRUD operations untuk semua entitas
- ✅ Data seeding untuk development
- ✅ Error handling & validation

#### Frontend CMS
- ✅ Modern UI dengan React & Tailwind CSS
- ✅ Authentication & authorization
- ✅ Dashboard overview dengan statistics
- ✅ Desa management (CRUD)
- ✅ Products management per desa
- ✅ Talents management per desa
- ✅ Responsive design
- ✅ Toast notifications

#### Dashboard Public
- ✅ Real-time data dari API
- ✅ Interactive maps dengan Leaflet
- ✅ Charts & visualizations dengan Recharts
- ✅ Sentiment analysis
- ✅ Meta sections (Marketplace, Export, Talent, Art)
- ✅ Fallback ke data statis jika API offline

---

## Arsitektur Sistem

```
┌─────────────────────────────────────────────────────────────┐
│                     User Layer                               │
├─────────────────────┬───────────────────────────────────────┤
│                     │                                        │
│  Admin              │           Public User                  │
│  (CMS Frontend)     │           (Dashboard)                  │
│  Port: 5174         │           Port: 5173                   │
│                     │                                        │
└──────────┬──────────┴────────────────┬──────────────────────┘
           │                           │
           │ HTTP/REST API             │ HTTP/REST API
           │                           │
           v                           v
┌──────────────────────────────────────────────────────────────┐
│                  Backend API Layer                           │
│              (Express.js Server)                             │
│                  Port: 5000                                  │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌────────────────┐      │
│  │ Auth        │  │ Controllers │  │ Middleware     │      │
│  │ - JWT       │  │ - Desa      │  │ - Auth         │      │
│  │ - bcrypt    │  │ - Products  │  │ - Error        │      │
│  └─────────────┘  │ - Talents   │  │ - CORS         │      │
│                   └─────────────┘  └────────────────┘      │
└────────────────────────┬─────────────────────────────────────┘
                         │
                         │ SQL Queries
                         v
┌──────────────────────────────────────────────────────────────┐
│                  Database Layer                              │
│                  (PostgreSQL)                                │
│                                                              │
│  Tables:                                                     │
│  - users          - desa              - achievements        │
│  - issues         - sentiment         - top_people          │
│  - articles       - products          - exports             │
│  - talents        - meta_data         - meta_issues         │
└──────────────────────────────────────────────────────────────┘
```

---

## Struktur Project

```
dashboard_desa/
├── cms/                              # CMS System
│   ├── backend/                      # Backend API
│   │   ├── src/
│   │   │   ├── config/
│   │   │   │   └── database.js       # PostgreSQL connection
│   │   │   ├── controllers/
│   │   │   │   ├── authController.js
│   │   │   │   ├── desaController.js
│   │   │   │   ├── productsController.js
│   │   │   │   └── talentsController.js
│   │   │   ├── database/
│   │   │   │   ├── schema.sql        # Database schema
│   │   │   │   ├── migrate.js        # Migration script
│   │   │   │   └── seed.js           # Seed data script
│   │   │   ├── middleware/
│   │   │   │   ├── auth.js           # JWT authentication
│   │   │   │   └── errorHandler.js
│   │   │   ├── routes/
│   │   │   │   ├── authRoutes.js
│   │   │   │   ├── desaRoutes.js
│   │   │   │   ├── productsRoutes.js
│   │   │   │   └── talentsRoutes.js
│   │   │   └── server.js             # Main server file
│   │   ├── .env.example
│   │   ├── package.json
│   │   └── README.md
│   │
│   ├── frontend/                     # Frontend CMS
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   └── Layout.jsx        # Main layout
│   │   │   ├── context/
│   │   │   │   └── AuthContext.jsx   # Auth context
│   │   │   ├── pages/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── DesaList.jsx
│   │   │   │   ├── DesaEdit.jsx
│   │   │   │   ├── Products.jsx
│   │   │   │   └── Talents.jsx
│   │   │   ├── utils/
│   │   │   │   └── api.js            # Axios instance
│   │   │   ├── App.jsx
│   │   │   └── main.jsx
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── vite.config.js
│   │   └── README.md
│   │
│   ├── INTEGRATION_GUIDE.md          # Integration guide
│   ├── README.md                     # Main CMS docs
│   ├── setup.bat                     # Windows setup script
│   ├── setup.sh                      # Linux/Mac setup script
│   ├── start-all.bat                 # Windows start script
│   └── start-all.sh                  # Linux/Mac start script
│
├── src/                              # Main Dashboard (existing)
│   ├── hooks/                        # Custom hooks for API
│   │   ├── useDesaData.ts
│   │   ├── useProducts.ts
│   │   └── useTalents.ts
│   ├── services/
│   │   └── api.ts                    # API service layer
│   ├── pages/desa/
│   │   ├── DashboarDesa.tsx
│   │   ├── DesaDashboardRefactored.tsx
│   │   └── desaPublic.tsx
│   └── ...
│
├── CMS_DOCUMENTATION.md              # This file
└── package.json
```

---

## Setup & Installation

### Prerequisites

- Node.js (v18 atau lebih tinggi)
- PostgreSQL (v14 atau lebih tinggi)
- npm atau yarn

### Cara 1: Automatic Setup (Recommended)

#### Windows:
```bash
cd cms
setup.bat
```

#### Linux/Mac:
```bash
cd cms
chmod +x setup.sh
./setup.sh
```

### Cara 2: Manual Setup

#### 1. Setup Backend

```bash
cd cms/backend
npm install

# Copy environment file
cp .env.example .env

# Edit .env dan sesuaikan konfigurasi database
# DB_HOST=localhost
# DB_PORT=5432
# DB_NAME=cms_desa
# DB_USER=postgres
# DB_PASSWORD=your_password

# Create database
createdb cms_desa

# Run migrations
npm run db:migrate

# Seed database (optional)
npm run db:seed

# Start backend
npm run dev
```

Backend akan berjalan di: `http://localhost:5000`

#### 2. Setup Frontend CMS

```bash
cd cms/frontend
npm install

# Copy environment file
cp .env.example .env

# Start frontend
npm run dev
```

Frontend CMS akan berjalan di: `http://localhost:5174`

#### 3. Setup Main Dashboard

```bash
# Di root project
npm install
npm run dev
```

Dashboard akan berjalan di: `http://localhost:5173`

---

## Cara Penggunaan

### 1. Login ke CMS

1. Buka browser: `http://localhost:5174`
2. Login dengan credentials default:
   - Username: `admin`
   - Password: `admin123`

### 2. Mengelola Data Desa

#### Tambah Desa Baru:
1. Klik menu "Desa" di sidebar
2. Klik tombol "Add New Desa"
3. Isi form:
   - Nama Desa
   - Latitude & Longitude
   - Populasi
   - Luas Area
   - Nama Kepala Desa
4. Klik "Save"

#### Edit Desa:
1. Klik menu "Desa"
2. Klik icon "Edit" pada desa yang ingin diedit
3. Update data yang diperlukan
4. Klik "Save"

#### Hapus Desa:
1. Klik menu "Desa"
2. Klik icon "Delete" pada desa yang ingin dihapus
3. Konfirmasi penghapusan

### 3. Mengelola Products

1. Klik menu "Products"
2. Pilih desa dari dropdown
3. View products yang ada
4. (CRUD operations bisa ditambahkan)

### 4. Mengelola Talents

1. Klik menu "Talents"
2. Pilih desa dari dropdown
3. View talents yang ada
4. (CRUD operations bisa ditambahkan)

### 5. Melihat Dashboard Public

1. Buka `http://localhost:5173`
2. Data akan otomatis diambil dari API
3. Jika API offline, akan fallback ke data statis

---

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123"
}

Response:
{
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "username": "admin",
    "email": "admin@example.com",
    "role": "admin"
  }
}
```

#### Get Profile
```http
GET /api/auth/profile
Authorization: Bearer {token}
```

### Desa Endpoints

#### Get All Desa
```http
GET /api/desa

Response:
{
  "desa": [
    {
      "id": 1,
      "name": "Desa Bojonggede",
      "lat": "-6.5632",
      "lng": "106.794",
      "population": 3850,
      "area": "12.2 km²",
      "leader": "Ibu Siti Rohmah",
      "achievements": [...],
      "issues": [...]
    }
  ]
}
```

#### Get Desa by ID
```http
GET /api/desa/:id

Response:
{
  "desa": {
    "id": 1,
    "name": "Desa Bojonggede",
    ...
    "achievements": [...],
    "issues": [...],
    "sentiment": {...},
    "topPeople": [...],
    "articles": [...],
    "products": [...],
    "talents": [...]
  }
}
```

#### Create Desa
```http
POST /api/desa
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Desa Baru",
  "lat": -6.5,
  "lng": 106.8,
  "population": 3000,
  "area": "10 km²",
  "leader": "Nama Leader"
}
```

#### Update Desa
```http
PUT /api/desa/:id
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Updated Name",
  "population": 3500
}
```

#### Delete Desa
```http
DELETE /api/desa/:id
Authorization: Bearer {token}
```

### Products Endpoints

#### Get Products by Desa
```http
GET /api/products/desa/:desaId

Response:
{
  "products": [
    {
      "id": 1,
      "desa_id": 1,
      "name": "Keripik Singkong",
      "category": "Makanan",
      "price": 15000,
      "sold": 89,
      "stock": 45
    }
  ]
}
```

### Talents Endpoints

#### Get Talents by Desa
```http
GET /api/talents/desa/:desaId

Response:
{
  "talents": [
    {
      "id": 1,
      "desa_id": 1,
      "name": "Ahmad Suryadi",
      "skill": "Web Development",
      "level": "Expert",
      "certified": true,
      "projects": 12
    }
  ]
}
```

---

## Integrasi

### Menggunakan API di Dashboard

#### 1. Install dependencies (sudah ada)

```typescript
// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const desaService = {
  getAllDesa: async () => {
    const response = await api.get('/desa');
    return response.data.desa;
  },
  
  getDesaById: async (id: number) => {
    const response = await api.get(`/desa/${id}`);
    return response.data.desa;
  }
};
```

#### 2. Gunakan Custom Hooks

```typescript
// Di komponen React
import { useDesaData } from '../hooks/useDesaData';

const MyComponent = () => {
  const { data, loading, error } = useDesaData(1);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <div>{data.name}</div>;
};
```

Lihat `cms/INTEGRATION_GUIDE.md` untuk panduan lengkap integrasi.

---

## Deployment

### Backend API

#### Heroku:
```bash
cd cms/backend

# Create Heroku app
heroku create your-app-name

# Add PostgreSQL
heroku addons:create heroku-postgresql:hobby-dev

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your_secret_key

# Deploy
git push heroku main

# Run migrations
heroku run npm run db:migrate

# Seed database (optional)
heroku run npm run db:seed
```

#### VPS (Ubuntu):
```bash
# Install Node.js & PostgreSQL
sudo apt update
sudo apt install nodejs npm postgresql

# Clone & setup
git clone your-repo
cd cms/backend
npm install

# Setup PostgreSQL
sudo -u postgres psql
CREATE DATABASE cms_desa;
\q

# Setup environment
cp .env.example .env
# Edit .env

# Run migrations
npm run db:migrate

# Use PM2 for process management
npm install -g pm2
pm2 start src/server.js --name cms-api
pm2 save
pm2 startup
```

### Frontend CMS

#### Vercel:
```bash
cd cms/frontend

# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify:
```bash
cd cms/frontend

# Build
npm run build

# Deploy dist folder to Netlify
```

### Main Dashboard

Same as Frontend CMS deployment.

---

## Troubleshooting

### Problem: CORS Error

**Solusi:**
1. Pastikan backend running di port 5000
2. Check CORS configuration di `cms/backend/src/server.js`
3. Tambahkan origin yang diperlukan:

```javascript
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}));
```

### Problem: Database connection error

**Solusi:**
1. Pastikan PostgreSQL running
2. Check credentials di `.env`
3. Pastikan database `cms_desa` sudah dibuat
4. Test connection:

```bash
psql -U postgres -d cms_desa
```

### Problem: JWT Token expired

**Solusi:**
1. Login ulang di CMS
2. Token default berlaku 7 hari
3. Untuk extend, edit `cms/backend/src/controllers/authController.js`:

```javascript
const token = jwt.sign(
  { id: user.id, username: user.username },
  process.env.JWT_SECRET,
  { expiresIn: '30d' } // Change to 30 days
);
```

### Problem: Data tidak muncul di Dashboard

**Solusi:**
1. Check browser console untuk errors
2. Verify API endpoint: `http://localhost:5000/api/desa`
3. Pastikan data sudah di-seed:

```bash
cd cms/backend
npm run db:seed
```

4. Check network tab di browser DevTools

### Problem: Port already in use

**Solusi:**

Windows:
```cmd
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

Linux/Mac:
```bash
lsof -i :5000
kill -9 <PID>
```

---

## 🔐 Security Checklist

### Production:
- [ ] Change default admin password
- [ ] Use strong JWT_SECRET
- [ ] Enable HTTPS
- [ ] Setup rate limiting
- [ ] Enable SQL injection protection
- [ ] Setup firewall rules
- [ ] Regular database backups
- [ ] Monitor logs
- [ ] Update dependencies regularly

---

## 📊 Database Schema

### Main Tables

- `users` - Authentication
- `desa` - Village data
- `achievements` - Village achievements
- `issues` - Development priorities
- `sentiment` - Public sentiment
- `top_people` - Popular figures
- `articles` - News articles
- `products` - Marketplace products
- `exports` - Export products
- `talents` - Village talents
- `meta_data` - META sections data

Lihat detail schema di: `cms/backend/src/database/schema.sql`

---

## 📝 Credits

- Backend: Express.js, PostgreSQL, JWT
- Frontend: React, Tailwind CSS, Vite
- Charts: Recharts
- Maps: Leaflet
- Icons: React Icons

---

## 📞 Support

Untuk pertanyaan atau masalah:
1. Check dokumentasi di folder `cms/`
2. Lihat `cms/INTEGRATION_GUIDE.md` untuk integrasi
3. Check logs di backend untuk debugging

---

## 🎉 Selamat!

Sistem CMS Dashboard Desa sudah siap digunakan! 🚀

Next steps:
1. Customize tampilan sesuai kebutuhan
2. Tambahkan fitur baru
3. Deploy ke production
4. Monitor & maintain

---

**Version**: 1.0.0  
**Last Updated**: November 2025

