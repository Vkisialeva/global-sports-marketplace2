Global Sports Marketplace 2
Project Overview
Global Sports Marketplace  is a web application that lets people that have an interest in sports careers connect with relevant jobs. 
This is a platform where users can search for different job opportunities and have some help related to college tennis. 
Project Objectives
The main objectives of Global Sports Marketplace are:
Develop a modern single-page application (SPA).
Provide a user-friendly interface for exploring sports jobs.
Connect a React frontend to an Express backend.
Store and retrieve application data using PostgreSQL.
Use Prisma ORM to interact with the database.
Demonstrate frontend and backend integration.
Document and test the application.
Package the application using Docker and Docker Compose.
Technologies Used
Frontend
React.js — User interface development
Vite — Frontend development and build tool
JavaScript — Application logic
CSS — Styling and responsive layout
React Router — Client-side navigation
Backend
Node.js — JavaScript runtime
Express.js — Backend API framework
Prisma ORM — Database access and data modeling
PostgreSQL — Relational database
CORS — Communication between frontend and backend
dotenv — Environment variable management
Development Tools
Visual Studio Code
Git
GitHub
Prisma Studio
npm
Application Features
Home Page
In the home page you will see what is Global Sports marketplace about and have a navigation through the website.
Sports Jobs Page
The Sports Jobs page retrieves available job opportunities from the backend API and displays them to users.
Each job includes:
Job title
Description
Location
Sport category
College Tennis Page
The College Tennis section gives information related to the process of recruitment in college tennis.
Database Integration
The backend uses Prisma ORM to communicate with PostgreSQL.
The database includes models for users, job postings, student-athlete profiles, and job applications.
Example Job Posting
Job Title: Tennis Coach
Location: Barcelona, Spain
Sport: Tennis
Description: Seeking an enthusiastic tennis coach for youth training. Experience coaching young athletes and strong communication skills required.
This example demonstrates successful database storage, API retrieval, and frontend rendering.
Software Architecture
The application follows a client-server architecture.
React Frontend
      |
      | HTTP Requests
      v
Express REST API
      |
      v
Prisma ORM
      |
      v
PostgreSQL Database
Frontend Layer
The React application manages user interface components, navigation, and the presentation of data retrieved from the backend.
Backend Layer
The Express server processes incoming HTTP requests, communicates with Prisma, and returns JSON responses.
Database Layer
PostgreSQL stores the application's structured data, including users and job postings.
Prisma provides an interface between the backend and the database.
Project Structure
global-sports-marketplace2/
|
|-- backend/
|   |-- prisma/
|   |   |-- migrations/
|   |   |-- schema.prisma
|   |-- db.js
|   |-- seed.js
|   |-- server.js
|   |-- package.json
|
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- assets/
|   |   |-- pages/
|   |   |   |-- Home.jsx
|   |   |   |-- Jobs.jsx
|   |   |   |-- CollegeTennis.jsx
|   |   |-- App.jsx
|   |   |-- App.css
|   |   |-- index.css
|   |   |-- main.jsx
|   |-- package.json
|   |-- vite.config.js
|
|-- README.md
Installation and Setup
Prerequisites
The following software is required:
Node.js
npm
PostgreSQL
Git
1. Install Backend Dependencies
cd backend
npm install
4. Generate Prisma Client
npx prisma generate
The PostgreSQL database and required schema must already be configured. Use the project's existing Prisma migrations when initializing a fresh database.
5. Start the Backend
npm run dev
The backend should run at:
http://localhost:5001
6. Install Frontend Dependencies
Open another terminal:
cd frontend
npm install
npm run dev
If you are starting from the project root, run cd frontend. If your terminal is inside backend, run cd ../frontend instead.
Open the local URL displayed by Vite.
API Documentation
GET /api/health
Checks whether the backend is running.
Example endpoint:
http://localhost:5001/api/health
GET /api/jobs
Retrieves sports job postings from PostgreSQL.
Example endpoint:
http://localhost:5001/api/jobs
Example response:
[
  {
    "id": 1,
    "title": "Tennis Coach",
    "description": "Seeking an enthusiastic tennis coach for youth training.",
    "location": "Barcelona, Spain",
    "sport": "Tennis",
    "postedById": 1
  }
]
The example above is illustrative. Actual responses may include additional fields.
Development Process
An iterative development approach is used to organize the project.
The work is divided into stages:
Problem identification and requirements analysis
Application concept and interface planning
Database and backend development
React frontend development
Frontend and backend integration
Testing and debugging
Containerization and documentation
Evaluation and project presentation
This approach allows individual features to be implemented, tested, and improved incrementally.
Testing
Testing is an assignment requirement and remains part of the planned development work.
The testing strategy will include:
Frontend component tests
Backend API tests
Integration tests for data retrieval
Error-handling tests
Testing instructions and results will be documented after the tests have been implemented.
Docker and Docker Compose
Docker containerization is planned as part of the assignment requirements.
The intended configuration includes:
Frontend container
Backend container
PostgreSQL database container
Docker Compose will coordinate the services and their communication.
The Docker configuration and startup instructions will be added after implementation and verification.
Current Project Status
The following functionality has been demonstrated:
React application running locally
Navigation between application sections
Express backend responding to HTTP requests
PostgreSQL integration through Prisma
Test employer created in the database
Tennis Coach job stored in PostgreSQL
Job retrieved through the REST API
Job displayed on the React Sports Jobs page
Project uploaded to GitHub
The following work remains to be completed or verified:
Automated frontend and backend tests
Docker and Docker Compose configuration
Detailed architecture diagrams
Final project documentation
Critical evaluation
Project presentation
Future Improvements
Potential improvements include:
User registration and authentication
Employer dashboard
Job creation through the frontend
Job applications
Sports and location filters
Improved mobile responsiveness
Additional college tennis functionality
Enhanced security and validation
These features represent possible future extensions rather than completed functionality.
Evaluation
The current prototype demonstrates that a React single-page application can retrieve sports job information from a PostgreSQL database through an Express REST API.
A key technical challenge during development was establishing reliable communication between the frontend and backend, including configuring CORS correctly.
Database integration and Prisma configuration also required debugging and testing.
The project demonstrates working integration between the main application layers. However, additional work is necessary to meet all assignment requirements, particularly automated testing, containerization, and final documentation.
Author
GitHub: Vkisialeva
Project: Global Sports Marketplace 2
License
No license has been selected for this project.
