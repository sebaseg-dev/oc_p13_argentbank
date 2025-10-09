# OpenClassrooms – Project 13 ArgentBank

[Version française du README](./README_FR.md)

## 📌 Description

Source code of **Project 13 – ArgentBank**, developed as part of the **JavaScript React Application Developer path** at OpenClassrooms.

The project consists in integrating a **React front-end with an existing banking API**, as part of a simulated mission for **Remede Agency**, a digital agency specialized in web application development.
The goal is to build, for the client **Argent Bank**, a new digital bank, an application allowing users to:

* log in to their personal account area,
* view their accounts and personal information,
* update their profile data.

The application is built on a **full front-end/back-end architecture**, using a **Redux store** for state management and a Node.js/MongoDB API for the server side.

> ⚠️ **Educational project:** this repository was developed for learning purposes.
> It is **not intended for production use**.

---

## 🎯 Learning objectives

* Authenticate users through a **secured REST API**
* Implement a **global state manager** using Redux Toolkit
* Interact with an **external API** to fetch and update user data
* Design a **modern front-end architecture** with React and Vite
* Ensure **code quality and maintainability** with ESLint and Prettier
* Use **Swagger** to design and document additional API endpoints for transaction management (phase 2 of the project)

---

## 🔗 Starter resources

* [Static HTML & CSS design](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/designs)
* [List of features to implement](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/.github/ISSUE_TEMPLATE)
* [Official back-end API](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)
* [Recharts documentation](https://recharts.org/en-US/storybook)

---

## 👀 Preview

| 🏠 Home page                    | 🔑 Sign-in page                   | 🧑‍💻 User profile                    |
| ------------------------------- | --------------------------------- | ------------------------------------- |
| ![Home](./assets/home-page.png) | ![Login](./assets/login-page.png) | ![Profile](./assets/profile-page.png) |

---

## 📘 Deliverables

* **Functional React + Redux application** – user authentication ([front-end folder](./front))
* **Swagger documentation** – API design for transaction management ([swagger_part2.yaml](./back/swagger_part2.yaml))

---

## ⚙️ Installation

*All commands below should be executed from the root directory.*

### 🧩 Prerequisites

#### Front-end

* **Node.js 20** (required)

#### Back-end

This project relies on the official OpenClassrooms back-end:
👉 [OpenClassrooms-Student-Center / Project-10-Bank-API](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)

Requirements:

* **Node.js ≥ 12** (tested with Node 20)
* **MongoDB Community Server**

---

### 📦 Installation

```bash
# Clone the repository
git clone <repo-url>
```

#### Back-end

```bash
cd ./back/
npm install

# Populate MongoDB with 2 users
npm run populate-db
```

#### Front-end

```bash
cd ./front/
npm install
```

---

## ▶️ Usage

### Run the back-end

```bash
cd ./back/
npm run dev:server
```

### Run the front-end

#### Development mode

```bash
cd ./front/
npm run dev
```

→ Starts the React app with **Vite** in development mode.

#### Production build

```bash
cd ./front/
npm run build
```

→ Builds the optimized files into the `dist/` folder.

To preview locally:

```bash
npm run preview
```

---

## 🏗 Application architecture (Front-end)

### 1. Entry point

* `src/main.jsx` – initializes React, sets up the router and Redux, and mounts the app.
* `src/router.jsx` – defines all routing logic.
* `src/redux.js` – defines the global store and reducers.
* `src/mainConfig.js` – centralizes configuration variables (API URL, environment, etc.).

### 2. Overall structure

* `src/layouts/Layout.jsx` – main layout including authentication logic.
  ⚠️ Cookie-based authentication on the front-end is **for educational purposes only** (not secure for production).
* `src/pages/` – main application pages (home, sign-in, profile).
* `src/components/` – reusable components (buttons, forms, sections).
* `src/services/` – API calls and cookie persistence management.
* `src/scss/` – SASS 7-1 architecture, compiled into `style/main.css`.

---

## 🛠 Tools & Dependencies (Front-end)

### 📦 Production dependencies

* React
* React DOM
* React Router DOM
* Redux Toolkit
* React Redux
* Sass

### 🧰 Development dependencies

#### Documentation & API modeling

* Swagger – for documenting and modeling API endpoints (phase 2)

#### Build & plugins

* Vite
* @vitejs/plugin-react

#### Typing

* @types/react
* @types/react-dom

#### Linting / Code quality

* ESLint
* @eslint/js
* eslint-plugin-react-hooks
* eslint-plugin-react-refresh
* globals
* Prettier

---

## 📜 Available scripts (Front-end)

| Command            | Description                              |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Starts the development server (Vite)     |
| `npm run build`    | Builds the app for production            |
| `npm run preview`  | Previews the production build locally    |
| `npm run lint`     | Checks code quality using ESLint         |
| `npm run sass`     | Compiles SCSS files to CSS (watch mode)  |
| `npm run prettier` | Formats code automatically with Prettier |

---

## ⚠️ Security

The **front-end cookie authentication** implementation is **strictly educational** and intended for training purposes only.
👉 In a real-world environment, use **httpOnly cookies** managed on the server side to prevent **XSS attacks** and other vulnerabilities.

---

## 🧩 Additional notes

This project combines **React, Redux Toolkit, and Vite** to deliver a robust and efficient front-end architecture.

It demonstrates **global state management**, **user session handling**, and **secure communication with an external API**.

The project consolidates **full-stack skills**:
front-end integration with **React/Redux**, interaction with a **Node.js REST API**, and API design with **Swagger**.
These are key foundations for any modern web application developer.