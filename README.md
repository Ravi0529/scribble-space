# ScribbleSpace

ScribbleSpace is a web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to create, manage, pin, and search their notes with ease. Each note can have a title, description, and tags.

## Features

- **User Authentication**: Users can sign up, log in, and securely manage their accounts.
- **Create and Manage Notes**: Add notes with a title, description, and tags.
- **Pin Important Notes**: Pin notes for quick access.
- **Search Notes**: Easily search for notes by title or tags.
- **Responsive Design**: Optimized for both desktop and mobile use.

## Tech Stack

- **Frontend**: ReactJS (Tailwind CSS)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose for schema management)
- **Authentication**: JWT (JSON Web Tokens) for user sessions

## Installation

To set up and run the ScribbleSpace app on your local machine, follow these steps:

1. **Clone the repository**: First, clone the project repository from GitHub by running the following command in your terminal:
   
   `git clone https://github.com/Ravi0529/scribble-space`

2. **Navigate to the project directory**: After cloning the repository, change into the project directory using:
   
   `cd scribblespace`

3. **Install dependencies**: ScribbleSpace has both a frontend and a backend. You will need to install dependencies for both parts of the application.

   - For the **frontend**, navigate to the client folder and run:
     
     `cd frontend`
     
     `npm install`
     
   - For the **backend**, navigate to the server folder and run:
     
     `cd ../server`
     
     `npm install`

4. **Set up environment variables**: In the backend (`server`), create a `.env` file in the root of the `server` folder with the following variables:


Replace `your_mongodb_uri` with your MongoDB connection string, and `your_jwt_secret` with a secret key for JWT authentication.

5. **Run the application**: You will need to start both the frontend and backend servers.

- To start the **backend**, navigate to the server folder and run:
  
  `npm run dev`

- To start the **frontend**, open a new terminal, navigate to the client folder, and run:
  
  `npm run dev`

6. **Access the app**: Once both servers are running, you can access the ScribbleSpace app by opening your browser and navigating to:

`http://localhost:3000`
