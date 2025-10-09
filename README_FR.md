# OpenClassrooms – Projet 13 ArgentBank

> [English version of the README](./README.md)

## 📌 Description

Code source du **Projet 13 – ArgentBank**, réalisé dans le cadre du **parcours Développeur d'application JavaScript React**.

Le projet consiste à intégrer une **interface React à une API bancaire existante**, dans le cadre d’une mission simulée pour **Remede Agency**, une agence spécialisée dans le développement d’applications web.
L’objectif est de créer pour le client **Argent Bank**, une néobanque en plein lancement, une application permettant aux utilisateurs de :
- se connecter à leur espace client,
- consulter leurs comptes et informations personnelles,
- modifier leurs données de profil.

L’application repose sur une **architecture front/back complète**, avec un **store Redux** pour la gestion d’état et une API Node.js/MongoDB côté serveur.

> ⚠️ **Projet éducatif :** ce dépôt a été réalisé dans un cadre pédagogique. Il **n’est pas destiné à la production**.

---

## 🎯 Objectifs pédagogiques

* S’authentifier auprès d’une **API REST sécurisée**
* Implémenter un **gestionnaire d’état global** avec Redux Toolkit
* Interagir avec une **API externe** pour récupérer et modifier des données utilisateur
* Modéliser une **architecture front-end moderne** avec React et Vite
* Assurer la **qualité et la maintenabilité du code** avec ESLint et Prettier
* Utiliser **Swagger** pour modéliser et documenter les endpoints d’API nécessaires à la gestion des transactions (phase 2 du projet)

---

## 🔗 Ressources de départ

* [Maquette HTML et CSS statique](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/designs)
* [Liste des features à implémenter](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/.github/ISSUE_TEMPLATE)
* [Back-end API officielle](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)
* [Documentation Recharts](https://recharts.org/en-US/storybook)

---

## 👀 Aperçu

| 🏠 Page d’accueil                  | 🔑 Page de connexion              | 🧑‍💻 Profil utilisateur             |
| ---------------------------------- | --------------------------------- | ------------------------------------ |
| ![Accueil](./assets/home-page.png) | ![Login](./assets/login-page.png) | ![Profil](./assets/profile-page.png) |

---

## 📘 Livrables

- **Application React + Redux fonctionnelle** – Authentification utilisateur ([répertoire front](./front))
- **Documentation Swagger** — Conception des endpoints pour la gestion des transactions ([swagger_part2.yaml](./back/swagger_part2.yaml))

---

## ⚙️ Installation

*Toutes les commandes ci-dessous s’exécutent depuis la racine du dépôt.*

### 🧩 Prérequis

#### Front-end

* **Node.js 20** (obligatoire)

#### Back-end

Le projet s’appuie sur le backend fourni par OpenClassrooms :
👉 [OpenClassrooms-Student-Center / Project-10-Bank-API](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)

Il requiert :

* **Node.js ≥ 12** (testé avec Node 20)
* **MongoDB Community Server**

---

### 📦 Installation

```bash
# Cloner le dépôt
git clone <url-du-repo>
```

#### Back-end

```bash
cd ./back/
npm install

# Initialiser la base MongoDB avec 2 utilisateurs
npm run populate-db
```

#### Front-end

```bash
cd ./front/
npm install
```

---

## ▶️ Utilisation

### Lancer le back-end

```bash
cd ./back/
npm run dev:server
```

### Lancer le front-end

#### Développement

```bash
cd ./front/
npm run dev
```

→ Démarre l’application React avec **Vite** en mode développement.

#### Production

```bash
cd ./front/
npm run build
```

→ Génère les fichiers optimisés dans le dossier `dist/`.

Prévisualiser localement :

```bash
npm run preview
```

---

## 🏗 Architecture de l’application (Front-end)

### 1. Point d’entrée

* `src/main.jsx` – initialise React, configure le router et Redux, et monte l’application.
* `src/router.jsx` – définit la logique de routage.
* `src/redux.js` – contient le store global et les reducers.
* `src/mainConfig.js` – centralise les variables de configuration (URL API, environnement, etc.).

### 2. Structure générale

* `src/layouts/Layout.jsx` – layout principal, inclut la logique d’authentification.
  ⚠️ L’authentification par cookies côté front est **uniquement pédagogique** (non sécurisée pour la production).
* `src/pages/` – pages principales de l’application (accueil, connexion, profil).
* `src/components/` – composants réutilisables (boutons, formulaires, sections).
* `src/services/` – gestion des appels API et de la persistance des cookies.
* `src/scss/` – architecture SASS (structure 7-1), compilée en CSS dans `style/main.css`.

---

## 🛠 Outils & Dépendances (Front-end)

### 📦 Dépendances de production

* React
* React DOM
* React Router DOM
* Redux Toolkit
* React Redux
* Sass

### 🧰 Dépendances de développement

#### Documentation & Modélisation
- Swagger – documentation et modélisation des endpoints API (phase 2)

#### Build & Plugins

* Vite
* @vitejs/plugin-react

#### Typage

* @types/react
* @types/react-dom

#### Linting / Qualité du code

* ESLint
* @eslint/js
* eslint-plugin-react-hooks
* eslint-plugin-react-refresh
* globals
* Prettier

---

## 📜 Scripts disponibles pour le Front-End

| Commande           | Description                                    |
| ------------------ | ---------------------------------------------- |
| `npm run dev`      | Lance le serveur de développement (Vite)       |
| `npm run build`    | Construit le projet pour la production         |
| `npm run preview`  | Prévisualise le build de production localement |
| `npm run lint`     | Vérifie la qualité du code avec ESLint         |
| `npm run sass`     | Compile les fichiers SCSS en CSS (mode watch)  |
| `npm run prettier` | Formate automatiquement le code avec Prettier  |

---

## ⚠️ Sécurité

L’implémentation de l’authentification par **cookies front-end** est **strictement pédagogique** dans le cadre d’un projet de formation.
👉 En environnement réel, utiliser des **cookies httpOnly** gérés côté serveur pour éviter les failles **XSS** et autres vulnérabilités.

---

## 🧩 Notes supplémentaires

Ce projet combine **React, Redux Toolkit et Vite** pour offrir une base robuste et performante.

Il démontre la **mise en œuvre d’un état global**, la **gestion de sessions utilisateur** et la **communication sécurisée avec une API externe**.

Ce projet consolide des compétences **full-stack** : intégration front-end **React/Redux**, interaction avec une **API REST Node.js**, et modélisation d’API via **Swagger**.
Ces notions constituent un socle fondamental pour tout développeur d’applications web modernes.