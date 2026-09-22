# 🌐 Portail Intranet TRANSTU

> **Statut du projet :** 🛠️ *Work in Progress* (Projet en cours de développement et d'optimisation).

## 📝 Description
Le **Portail Intranet TRANSTU** est une application web centralisée conçue pour l'entreprise **TRANSTU**. Il permet de regrouper en un seul endroit toutes les applications internes de l'entreprise ainsi que leur documentation associée. 

L'objectif est d'offrir aux employés un accès rapide et fluide aux ressources, tout en fournissant aux administrateurs un espace sécurisé pour piloter l'ensemble du système.

---

## 🎯 Objectifs du Projet
- **Centraliser** les applications internes dans un portail unique.
- **Faciliter et accélérer** l'accès aux informations et à la documentation.
- **Réduire le temps** consacré à la recherche d'informations au sein de l'entreprise.
- **Offrir un espace d'administration sécurisé** pour une gestion autonome des ressources.

---

## 🚀 Fonctionnalités Principales

### 👤 Espace Utilisateur
- **Catalogue :** Consulter la liste complète des applications internes.
- **Détails :** Visualiser les informations détaillées et accéder directement à l'application via son URL.
- **Documentation :** Consulter et télécharger các documents associés.

### 🔐 Espace Administrateur
- **Authentification :** Connexion sécurisée à l'espace d'administration.
- **Gestion des Applications :** Ajouter, modifier, activer ou désactiver une application.
- **Gestion Documentaire :** Ajouter, modifier et supprimer les documents liés aux applications (CRUD complet).

---

## 🛠️ Stack Technique

| Frontend | Backend | Base de données & Outils |
| :--- | :--- | :--- |
| • Angular <br> • TypeScript <br> • HTML5 / CSS3 | • Node.js <br> • Express.js <br> • JWT / Bcrypt <br> • Sequelize (ORM) | • MySQL <br> • Postman (Test API) <br> • Git / GitHub |

---

## 📊 Structure de la Base de Données
Le modèle relationnel repose sur trois entités principales :
- **User** (Gestion des accès administrateurs)
- **Application** (Informations sur les applications internes)
- **Document** (Pièces jointes et documentations associées)

---

## 💻 Installation et Configuration

### 1. Cloner le projet
```bash
git clone https://github.com/saranefzi18-crypto/portail-intranet-transtu.git
```

### 2. Configuration du Backend
```bash
cd transtu-intranet-backend
npm install
```
* **Base de données :** Créez une base de données MySQL.
* **Environnement :** Configurez vos accès (Host, User, Password, JWT_SECRET) dans le fichier `.env`.
* **Lancement :**
```bash
node .
```

### 3. Configuration du Frontend (Angular)
```bash
cd intranet
npm install
```
* **Lancement :**
```bash
npm start
```
* **Accès local :** Ouvrez votre navigateur sur [http://localhost:4200](http://localhost:4200)

---

## 🔒 Sécurité
- **Authentification :** L'espace d'administration est protégé par des jetons **JWT (JSON Web Tokens)**.
- **Cryptage :** Les mots de passe en base de données sont sécurisés et hachés à l'aide de **Bcrypt**.

---

## 📸 Captures d'écran

<details>
  <summary>Cliquez ici pour voir les interfaces de l'application</summary>
  
  ### Espace Utilisateur - Page d'Acceuil
  ![Home](./screenshots/PageAcceuil.png)
  
  ### Espace Utilisateur - Catalogue des Documents
  ![Catalogue User](./screenshots/Catalogue.png).

  ### Espace Administrateur - Page login
  ![Catalogue User](./screenshots/EspaceAdmin.png).

  ### Espace Administrateur - Gestion des Applications
  ![Catalogue User](./screenshots/ListeDesApplications.png).

  ### Espace Administrateur - Gestion des Documents
  ![Catalogue User](./screenshots/GestionDesDocuments.png).

---
  
## 🎓 Context académique
Ce projet a été réalisé de manière autonome dans le cadre de mon **Stage de Perfectionnement** au sein de la **TRANSTU**.
