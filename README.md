# 🚀 Journey Through Node.js

Learning Node.js from the ground up.  
No Express. No frameworks. Just pure core modules and caffeine.

---

## 📚 About This Repository

This project is a collection of practical Node.js experiments and a simple REST API server, built while following Traversy Media’s Node.js Crash Course.

It covers many of the most important Node.js core modules including:

- **http** – Creating a server from scratch  
- **fs** – Interacting with the file system  
- **crypto** – Hashing and encryption  
- **events** – Handling event-driven patterns  
- **url** – Working with query params and parsing URLs  
- **path** – Managing file paths safely  
- **os** – System and hardware info  
- **process** – Accessing environment & runtime details  

Every file represents a mini-lesson in mastering Node’s inner workings.

---

## 🧩 Project Structure

```txt
journey-through-nodejs/
├── core-demos/
│   ├── cryptoDemo.js
│   ├── eventsDemo.js
│   ├── fsDemo.js
│   ├── pathDemo.js
│   ├── urlDemo.js
│   ├── osDemo.js
│   ├── processDemo.js
│
├── api-server/
│   ├── server.js
│   ├── controllers/
│   │     └── postController.js
│   ├── utils.js
│
├── test.txt
├── package.json
└── .gitignore
```

## ✅ Features Demonstrated

| Topic | What I Learned |
|------|----------------|
| HTTP API Server | Build routes without Express |
| Middleware | Logger & JSON handling |
| Request Body Parsing | Manual streaming logic |
| Filesystems | Read, write, append, async & promises |
| Crypto | Hashing + encryption |
| URL & Path | Safe manipulation and formatting |
| Events | Custom event emitters |
| Process | env variables & runtime info |
| OS Module | Machine details from Node |

---

## ▶️ Running the Demos

Install dependencies:

```bash
npm install
```

Run any module demo:
```bash

node core-demos/fsDemo.js
node core-demos/pathDemo.js
node core-demos/eventsDemo.js
```

## 🌐 Running the API Server

Create a .env file in root:

``` bash
PORT=5000
```
Install dependencies (if any):
``` bash
npm install
```
Start the server:

``` bash
node api-server/server.js
```

Example cURL request:

``` bash
curl http://localhost:5000/api/users
```
