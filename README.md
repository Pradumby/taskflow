# TaskFlow

TaskFlow is a full stack task management application built using the MERN stack.  
It allows users to securely manage their daily tasks with authentication and user-specific todo management.

## Features

- User Registration
- User Login with JWT Authentication
- Protected Routes
- Create Todo
- Update Todo
- Delete Todo
- Toggle Todo Status
- User-specific Todos

## Tech Stack

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

Authentication

- JSON Web Token (JWT)
- bcryptjs

Tools

- Nodemon
- Postman

## Backend Architecture

The backend follows a clean architecture pattern.

Route → Controller → Service → Model → Database

## API Endpoints

### Authentication

POST /api/auth/register  
POST /api/auth/login

### Todos

POST /api/todos  
GET /api/todos  
PUT /api/todos/:id  
DELETE /api/todos/:id  
PATCH /api/todos/:id/toggle

## Installation

Clone repository

git clone https://github.com/yourusername/taskflow-mern.git

Navigate to project

cd taskflow-mern/backend

Install dependencies

npm install

Run development server

npm run dev

## Environment Variables

Create a .env file in backend folder.

PORT=5000
MONGO_URI=mongodb://localhost:27017/taskflow
JWT_SECRET=your_secret_key

## Project Structure

backend
│
src
├ config
├ controllers
├ models
├ routes
├ services
├ middleware
└ utils

## Future Improvements

- React frontend integration
- Request validation
- Rate limiting
- Logging system
- Docker support

## Author

Anup Yadav

Full Stack Developer  
Tech Stack: MERN

GitHub: https://github.com/yourusername

## Project Structure

frontend
backend
docs
