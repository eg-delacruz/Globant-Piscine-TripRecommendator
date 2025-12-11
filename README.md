<div align="center">

# 🌍 Trip Recommendator

### *Your intelligent travel assistant*

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Gemini-2.5-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

**Chat with AI + Interactive Maps + Modern Design**

</div>

---

## ✨ What is Trip Recommendator?

**Trip Recommendator** is a web application that combines **Google Gemini AI** with **interactive maps** to help you discover travel destinations. Ask in natural language and get recommendations visualized in real-time.

```
💬 "I want to go to tropical beaches"
    ↓
🤖 AI analyzes and suggests locations
    ↓
🗺️ Map shows locations with interactive markers
```

### 🎯 Features


**🤖 Artificial Intelligence**
- Powered by Google Gemini 2.5
- Responses in natural language
- JSON parsing with error handling

**🗺️ Interactive Maps**
- Personalized markers
- Automatic geocoding
- Smooth zoom and navigation

**🎨 Modern Interface**
- Dark styled interface
- Smooth animations
- Responsive design

---

## 🛠️ Technology Stack

| Category | Technology | Usage |
|-----------|------------|-----|
| **Frontend** | React 19 + TypeScript | Reactive UI with typing |
| **Styles** | Tailwind CSS | Modern and responsive design |
| **Maps** | Leaflet + React Leaflet | Geographic visualization |
| **AI** | Google Gemini 2.5 Flash | Recommendation generation |
| **Geocoding** | Nominatim (OSM) | Name → coordinates conversion |
| **DevOps** | Docker | Containerization and automation |

---

## 🚀 How to use

### Prerequisites
```bash
node >= 20.x
docker >= 24.x (recommended)
```

### 1. Clone
```bash
git clone git@github.com:eg-delacruz/Globant-Piscine-TripRecommendator.git trip-recommendator
cd trip-recommendator/ex00
```

### 2. Configure API Key
Create `.env` in `frontend/`:
```bash
VITE_API_URL=http://localhost:3000
```

Create `./backend/app/.env`:
```bash
PORT=3000
API_KEY=your_google_gemini_api_key_here
```

> 🔑 **Get your Google Gemini API Key**: [Google AI Studio](https://makersuite.google.com/app/apikey) (free, 60 req/min)

### 3. Run

**With Docker (recommended):**
```bash
docker compose up --build -d
```

Open in browser: **http://localhost:3000** 🎉



---

<div align="center">

### 🌟 Roadmap

Chat IA ✅ | Mapas ✅

---

**⭐ If you like this project, give it a star on GitHub! ⭐**

</div>