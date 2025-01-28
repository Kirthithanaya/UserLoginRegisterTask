# User Authentication and Authorization

## Description
This project implements user authentication and authorization using Bearer tokens, following the MVC architecture.

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT
- Postman (for testing)

## Features
- User Registration
- User Login
- Protected Routes with JWT
- API documentation in Postman

## Installation
1. Clone the repository.
2. Install dependencies: `npm install`
3. Add `.env` file with:
4. Start the server: `npm start`

## API Endpoints
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login and get a JWT.
- `GET /api/auth/getuser` - Get user info (protected route).
