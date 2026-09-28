# Recipe Finder

Recipe Finder is a single-page React app for discovering meals. Search by dish name or by an ingredient you already have, browse results in a responsive card grid, read full ingredients and instructions, and save favorites that persist between visits. Recipe data comes from the free [TheMealDB](https://www.themealdb.com/api.php) API.

**Live demo:** _add your Vercel / Netlify / GitHub Pages link here_

## Features

- Search recipes by dish name or by ingredient
- Filter results by category (Beef, Seafood, Dessert, …)
- Responsive card grid with image and title
- Recipe detail page with ingredients, measurements, instructions and video link
- Add / remove favorites, saved in `localStorage`
- Dedicated Favorites page (React Router)
- Loading, empty ("no recipes found") and error states
- Light and dark appearance that follows the system setting

## Technologies

- React 18 (functional components and hooks only)
- React Router v6
- Vite
- TheMealDB public API
- Plain CSS (grid, flexbox, media queries)

## Project structure

```
src/
├── components/   Navbar, SearchBar, CategoryFilter, RecipeGrid, RecipeCard,
│                 FavoriteButton, Loader, Message
├── hooks/        useLocalStorage
├── pages/        Home, RecipeDetail, Favorites
├── services/     mealApi.js (all API calls)
├── App.jsx
├── main.jsx
└── styles.css
```

## Setup

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL that Vite prints (usually http://localhost:5173).

To create a production build: `npm run build`.

## Screenshots

| Search | Recipe detail | Favorites |
| --- | --- | --- |
| ![Search](docs/search.png) | ![Detail](docs/detail.png) | ![Favorites](docs/favorites.png) |

_Add your own screenshots to the `docs/` folder using these file names._

## Known limitations

- Ingredient search supports one ingredient at a time (TheMealDB free tier).
- Results are not paginated; the API returns them all at once.
- Category filter and text search are separate: choosing a category replaces the current search.
"# recipe-finder" 
