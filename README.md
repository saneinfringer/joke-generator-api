# 😂 Joke Generator API Web App

A simple **Node.js + Express + EJS** web application that fetches jokes
from the **JokeAPI** and displays them based on user-selected categories
and blacklist options.

## 🚀 Features

-   Enter your name and generate jokes
-   Choose joke categories
-   Filter jokes using blacklist flags
-   Fetch jokes from JokeAPI
-   Get another joke with the same filters
-   Session keeps the same joke on refresh
-   Responsive UI
-   Dynamic year in footer

------------------------------------------------------------------------

## 🛠 Tech Stack

-   Node.js
-   Express.js
-   EJS
-   Axios
-   express-session
-   body-parser
-   Nodemon
-   JokeAPI

------------------------------------------------------------------------

## 📦 Installation

Clone the repository:

``` bash
git clone https://github.com/saneinfringer/joke-generator-api.git
```

Go to the project folder:

``` bash
cd capstone_project_joke_api
```

Initialize npm:

``` bash
npm init -y
```

Install dependencies:

``` bash
npm install
```

Install nodemon globally (optional):

``` bash
npm install -g nodemon
```

------------------------------------------------------------------------

## ⚙️ Environment Setup

Create a `.env` file in the root folder.

Example:

    PORT=3000
    SESSION_SECRET=joke-secret
    BASE_URL=https://v2.jokeapi.dev

------------------------------------------------------------------------

## ▶️ Run the Project

Start the server using nodemon:

``` bash
nodemon index.js
```

Or run using Node:

``` bash
node index.js
```

Open in your browser:

    http://localhost:3000

------------------------------------------------------------------------

## 📂 Project Structure

    capstone_project_joke_api
    │
    ├── public
    │   └── scripts
    │
    ├── views
    │   ├── partials
    │   ├── index.ejs
    │   ├── joke.ejs
    │   └── lol.ejs
    │
    ├── index.js
    ├── package.json
    ├── envExample.txt
    └── README.md

------------------------------------------------------------------------

## 🔌 API Used

JokeAPI

https://v2.jokeapi.dev

Example request:

    https://v2.jokeapi.dev/joke/Any

To learn deeper please go-through JokeAPI documentation.
------------------------------------------------------------------------

## 🧠 Future Improvements

-   Dark / Light mode
-   Save favorite jokes
-   Animations for punchlines
-   Better UI components

------------------------------------------------------------------------

## ❤️ Author

Made with ❤️ by **Ravi**

------------------------------------------------------------------------

## 📄 License

This project is open source and free to use.
