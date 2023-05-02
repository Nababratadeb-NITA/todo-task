# MERN Todo App
A simple Todo CRUD application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

Getting Started
To get started with the app, first clone the repo:

bash
Copy code
git clone https://github.com/yourusername/mern-todo-app.git
cd mern-todo-app
Then install the dependencies for both the frontend and the backend:

bash
Copy code
cd client
npm install
cd ../server
npm install
You'll also need to create a .env file in the server directory with the following variables:

makefile
Copy code
MONGO_URI=<your MongoDB URI>
PORT=<the port you want the server to run on>
To start the app, run the following command from the server directory:

bash
Copy code
npm start
This will start both the frontend and the backend, and you should be able to see the app running at http://localhost:3000.

Features
This Todo app has the following features:

Add a new Todo
Edit an existing Todo
Delete a Todo
Mark a Todo as complete
View a list of all Todos
Technologies Used
This Todo app was built using the following technologies:

MongoDB
Express.js
React.js
Node.js
Contributing
If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License. See the LICENSE file for more information.
