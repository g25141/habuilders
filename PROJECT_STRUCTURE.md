# HA-Builders Website - Project Structure

## Overview
A complete construction company website built with ReactJS frontend and FastAPI backend, inspired by professional construction company layouts.

## Project Structure

```
HK-20250906/
├── README.md                    # Project overview and setup instructions
├── PROJECT_STRUCTURE.md         # This file - detailed project structure
├── setup.sh                     # Automated setup script
│
├── backend/                     # FastAPI Backend
│   ├── app/                     # Main application package
│   │   ├── __init__.py         # Package initialization
│   │   ├── api/                # API routes
│   │   │   ├── __init__.py
│   │   │   ├── services_api.py # Services API endpoints
│   │   │   └── contact.py      # Contact form endpoints
│   │   ├── models.py           # SQLAlchemy database models
│   │   ├── schemas.py          # Pydantic schemas
│   │   ├── services.py         # Business logic and utilities
│   │   └── database.py         # Database configuration
│   ├── main.py                 # FastAPI application entry point
│   ├── requirements.txt        # Python dependencies
│   ├── seed_data.py           # Database seeding script
│   └── env_example.txt        # Environment variables template
│
├── frontend/                   # ReactJS Frontend
│   ├── public/                 # Static assets
│   │   ├── index.html         # HTML template
│   │   └── manifest.json      # PWA manifest
│   ├── src/                   # Source code
│   │   ├── components/        # Reusable React components
│   │   │   ├── Navbar.js      # Navigation component
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.js      # Footer component
│   │   │   ├── Footer.css
│   │   │   ├── LoadingSpinner.js
│   │   │   └── LoadingSpinner.css
│   │   ├── pages/             # Page components
│   │   │   ├── Home.js        # Homepage
│   │   │   ├── Home.css
│   │   │   ├── Services.js    # Services listing page
│   │   │   ├── Services.css
│   │   │   ├── ServiceDetail.js # Individual service page
│   │   │   ├── ServiceDetail.css
│   │   │   ├── Contact.js     # Contact page
│   │   │   ├── Contact.css
│   │   ├── utils/             # Utility functions
│   │   │   ├── api.js         # API client configuration
│   │   ├── App.js             # Main App component
│   │   ├── App.css            # Main App styles
│   │   ├── index.js           # React entry point
│   │   └── index.css          # Global styles
│   └── package.json           # Node.js dependencies
```

## Features Implemented

### Frontend Features
- ✅ **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- ✅ **Navigation**: Sticky navbar with mobile hamburger menu
- ✅ **Home Page**: Hero section, services overview, features, testimonials
- ✅ **Services Pages**: Dynamic service listing and detailed service pages
- ✅ **Contact Form**: Functional contact form with validation
- ✅ **Modern UI/UX**: Construction company color palette and typography
- ✅ **Loading States**: Loading spinners and error handling

### Backend Features
- ✅ **FastAPI Framework**: Modern, fast Python web framework
- ✅ **Database Models**: SQLAlchemy models for services, contacts, projects
- ✅ **API Endpoints**: RESTful API for all frontend needs
- ✅ **Contact Form**: Backend processing for contact form submissions
- ✅ **Sample Data**: Comprehensive seed data for development
- ✅ **CORS Support**: Configured for frontend-backend communication

### Services Included
- 🏠 House Extensions
- 🏡 Loft Conversions
- 🚗 Garage Conversions
- 🔨 Property Refurbishments
- 🌳 Outdoor Living
- 🏠 Roof Renovation
- 🌿 Landscaping Services
- 🍳 Kitchens
- 🛁 Bathrooms

## Technology Stack

### Frontend
- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Responsive Design**: Mobile-first approach

### Backend
- **FastAPI**: Modern Python web framework
- **SQLAlchemy**: Python SQL toolkit and ORM
- **SQLite**: Development database (easily switchable to PostgreSQL)
- **JWT**: JSON Web Token authentication
- **Pydantic**: Data validation using Python type annotations

## Color Palette
- **Primary**: #1a365d (Dark Blue)
- **Secondary**: #2d5a87 (Medium Blue)
- **Accent**: #f7b731 (Golden Yellow)
- **Text**: #2d3748 (Dark Gray)
- **Background**: #f7fafc (Light Gray)

## Getting Started

1. **Run the setup script**:
   ```bash
   ./setup.sh
   ```

2. **Start the backend** (Terminal 1):
   ```bash
   cd backend
   source venv/bin/activate
   uvicorn main:app --reload
   ```

3. **Start the frontend** (Terminal 2):
   ```bash
   cd frontend
   npm start
   ```

4. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs


## Development Notes

- The frontend includes fallback static data for services if the API is unavailable
- All forms include proper validation and error handling
- The design is fully responsive and works on all device sizes
- The backend includes comprehensive error handling and logging
- Database models support all the features of a professional construction website

## Future Enhancements

- Image upload functionality for services and projects
- Email notifications for contact form submissions
- Project gallery and portfolio features
- Online quote request system
- Customer portal for project tracking
- Blog/news section
- SEO optimization
- Progressive Web App (PWA) features
