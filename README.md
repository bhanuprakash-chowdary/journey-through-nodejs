🚀 Journey Through Node.js

Learning Node.js from the ground up.
No Express. No frameworks. Just pure core modules and caffeine.

📚 About This Repository

This project is a collection of practical Node.js experiments and a simple REST API server, built while following Traversy Media’s Node.js Crash Course.

It covers many of the most important Node.js core modules including:

http – Creating a server from scratch

fs – Interacting with the file system

crypto – Hashing and encryption

events – Handling event-driven patterns

url – Working with URL parsing and query params

path – Managing file paths safely

os – System and hardware info

process – Accessing runtime environment

Every file represents a mini-lesson in mastering Node’s inner workings.

🧩 Project Structure
journey-through-nodejs/
├─ core-demos/
│   ├─ cryptoDemo.js
│   ├─ eventsDemo.js
│   ├─ fsDemo.js
│   ├─ pathDemo.js
│   ├─ urlDemo.js
│   ├─ osDemo.js
│   ├─ processDemo.js
│
├─ api-server/
│   ├─ server.js
│   ├─ controllers/
│   │     └─ postController.js
│   ├─ utils.js
│
├─ test.txt
├─ package.json
└─ .gitignore

✅ Features Demonstrated
Feature	Module
Build an HTTP API server	http
Create custom middleware	Pure functions
Parse request bodies manually	stream handling
Read & write files	fs & fs/promises
Log system details	os
Generate and verify hashes	crypto
Listen and emit events	events
Work with paths and URLs safely	path + url
Use environment variables	process.env
▶️ Running the Demos

Install dependencies:

npm install


Run any demo directly:

node core-demos/fsDemo.js
node core-demos/pathDemo.js
node core-demos/eventsDemo.js

🌐 Running the API Server

Set a port first by creating .env:

PORT=5000


Start the server:

node api-server/server.js

Available Endpoints
Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/:id	Get a user by ID
POST	/api/users	Add a new user

Test with Postman, Thunder Client, or curl:

curl -X GET http://localhost:5000/api/users

🎯 What I Learned

How Node works behind the scenes

Event loop fundamentals

Manual routing without Express

Callback vs Promises vs Async/Await

Structured project organization

Communicating with API tools

This repo marks the beginning of my Node.js development journey. Express and deeper backend concepts are coming soon 👣

👋 Author

Bhanu Prakash Ravilla
Learning daily. Coding joyfully.

⭐ Support & Next Steps

If you like this project, please star ⭐ the repo.
More backend projects soon:

Express.js Crash Course ✅ Next in line

MongoDB + Authentication

Full API deployment