#!/bin/bash

# HA-Builders Website Setup Script
echo "🏗️  Setting up HA-Builders Construction Website..."

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed. Please install Python 3 and try again."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required but not installed. Please install Node.js and try again."
    exit 1
fi

echo "✅ Python and Node.js are installed"

# Setup Backend
echo "🔧 Setting up backend..."
cd backend

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "Creating Python virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
source venv/bin/activate

# Install Python dependencies
echo "Installing Python dependencies..."
pip install -r requirements.txt

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo "Creating .env file..."
    cp env_example.txt .env
    echo "⚠️  Please update the .env file with your actual configuration"
fi

# Run database migrations and seed data
echo "Setting up database..."
python seed_data.py

echo "✅ Backend setup complete"

# Setup Frontend
echo "🔧 Setting up frontend..."
cd ../frontend

# Install Node.js dependencies
echo "Installing Node.js dependencies..."
npm install

echo "✅ Frontend setup complete"

# Return to root directory
cd ..

echo ""
echo "🎉 Setup complete! Here's how to run the application:"
echo ""
echo "Backend (Terminal 1):"
echo "  cd backend"
echo "  source venv/bin/activate"
echo "  uvicorn main:app --reload"
echo ""
echo "Frontend (Terminal 2):"
echo "  cd frontend"
echo "  npm start"
echo ""
echo "The application will be available at:"
echo "  Frontend: http://localhost:3000"
echo "  Backend API: http://localhost:8000"
echo "  API Documentation: http://localhost:8000/docs"
echo ""
echo "Admin credentials:"
echo "  Email: admin@ha-builders.co.uk"
echo "  Password: admin123"
echo ""
echo "Happy building! 🏗️"
