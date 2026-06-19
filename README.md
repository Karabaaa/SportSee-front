# SportSee Front

SportSee est un tableau de bord sportif développé avec React. L'application affiche les données d'un utilisateur : activité quotidienne, durée moyenne des sessions, performance par catégorie, score d'objectif et indicateurs nutritionnels.

Ce dossier contient la partie front-end du projet. La partie back-end se trouve dans le dossier voisin `SportSee`.

## Technologies

- React
- Vite
- React Router
- Recharts
- PropTypes
- CSS Modules
- ESLint

## Prérequis

- Node.js
- npm

## Installation

Depuis le dossier front :

```bash
cd SportSee-front
npm install
```

Depuis le dossier back :

```bash
cd ../SportSee
npm install
```

## Lancer le projet

Le front consomme l'API disponible sur `http://localhost:3000`. Il faut donc lancer le back-end avant ou en parallèle du front.

### 1. Lancer l'API

Depuis le dossier `SportSee` :

```bash
npm run dev
```

L'API est disponible sur :

```text
http://localhost:3000
```

### 2. Lancer le front

Depuis le dossier `SportSee-front` :

```bash
npm run dev
```

Vite affiche ensuite l'URL locale de l'application, généralement :

```text
http://localhost:5173
```

## Scripts disponibles

```bash
npm run dev
```

Lance le serveur de développement Vite.

```bash
npm run build
```

Génère la version de production dans le dossier `dist`.

```bash
npm run preview
```

Lance une prévisualisation locale du build de production.

```bash
npm run lint
```

Analyse le code avec ESLint.

## Données utilisées

L'application récupère les données depuis l'API du back-end `SportSee` :

- `GET /user/:userId`
- `GET /user/:userId/activity`
- `GET /user/:userId/average-sessions`
- `GET /user/:userId/performance`

L'API fournit actuellement deux utilisateurs de test :

- `12`
- `18`

L'utilisateur affiché dans le dashboard est défini dans `src/pages/Dashboard.jsx` avec la constante `USER_ID`.

## Structure du front

```text
src/
├── assets/              # Logos et icônes
├── components/          # Composants réutilisables
│   ├── charts/          # Graphiques Recharts
│   ├── indicator/       # Cartes de données nutritionnelles
│   ├── navbar/          # Barre de navigation haute
│   └── sidebar/         # Barre latérale
├── mappers/             # Formatage des données API
├── mockData/            # Données mockées du backend
├── pages/               # Pages principales
├── router/              # Routes React
└── services/            # Appels API et accès aux données
```

## Vérification avant livraison

```bash
npm run lint
npm run build
```

Ces commandes permettent de vérifier que le code respecte les règles ESLint et que l'application compile correctement.
