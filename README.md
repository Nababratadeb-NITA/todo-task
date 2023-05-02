# Todo CRUD Application using MERN Stack
This is a Todo CRUD (Create, Read, Update, Delete) application built using the MERN (MongoDB, Express, React, Node.js) stack. The application allows users to create, read, update, and delete todo items.

# Features
Users can create a new todo item by providing a title and description.
Users can view all their todo items on the home page.
Users can update a todo item by clicking the edit button and providing new title and description.
Users can delete a todo item by clicking the delete button.
Technologies Used
MongoDB: A NoSQL document-oriented database used to store the todo items.
Express: A Node.js web application framework used to create RESTful APIs for the application.
React: A JavaScript library used to build the user interface of the application.
Node.js: A JavaScript runtime environment used to build the server-side of the application.
# How to Run the Application
Clone the repository to your local machine.
Install the required dependencies by running npm install in both the root directory and the client directory.
Create a .env file in the root directory and set the MONGO_URI variable to the connection string for your MongoDB database.
Start the server by running npm start in the root directory.
Start the client by running npm start in the client directory.
The application will be available in your browser at http://localhost:3000/.
# API Endpoints
GET /api/v1/todos: Get all the todo items.
POST /api/v1/todos: Create a new todo item.
PUT /api/v1/todos/:id: Update a todo item by ID.
DELETE /api/v1/todos/:id: Delete a todo item by ID.
# Future Improvements
Add authentication and authorization features to allow only registered users to access the application.
Add a search feature to allow users to search for specific todo items.
Add the ability to mark a todo item as completed.
Add the ability to set a due date for a todo item.
