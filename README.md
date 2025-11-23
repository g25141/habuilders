# HA-Builders Construction Website

A modern construction company website built with ReactJS frontend and FastAPI backend, inspired by professional construction company layouts.

## Project Structure

```
HK-20250906/
├── frontend/          # ReactJS frontend application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   └── utils/
│   ├── public/
│   └── package.json
├── backend/           # FastAPI backend application
│   ├── app/
│   │   ├── api/
│   │   ├── models/
│   │   ├── schemas/
│   │   └── services/
│   ├── requirements.txt
│   └── main.py
└── README.md
```

## Features

- **Home Page**: Hero section, services overview, company introduction
- **Services**: Detailed pages for construction services
  - House Extensions
  - Loft Conversions
  - Garage Conversions
  - Property Refurbishments
  - Outdoor Living
  - Roof Renovation
  - Landscaping Services
  - Kitchens
  - Bathrooms
- **Contact**: Contact form and company details
- **Responsive Design**: Mobile and desktop optimized

## Technology Stack

- **Frontend**: ReactJS, React Router, CSS3, Axios
- **Backend**: FastAPI, SQLAlchemy, SQLite/PostgreSQL
- **Styling**: Modern CSS with construction company color palette

## Getting Started

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## Color Palette
- Primary: #1a365d (Dark Blue)
- Secondary: #2d5a87 (Medium Blue)
- Accent: #f7b731 (Golden Yellow)
- Text: #2d3748 (Dark Gray)
- Background: #f7fafc (Light Gray)
