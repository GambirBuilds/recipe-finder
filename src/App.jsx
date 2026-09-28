import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Message from "./components/Message.jsx";
import Home from "./pages/Home.jsx";
import RecipeDetail from "./pages/RecipeDetail.jsx";
import Favorites from "./pages/Favorites.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";

export default function App() {
  const [favorites, setFavorites] = useLocalStorage("recipe-finder:favorites", []);
  const favoriteIds = favorites.map((meal) => meal.idMeal);

  const toggleFavorite = ({ idMeal, strMeal, strMealThumb }) => {
    setFavorites((current) =>
      current.some((meal) => meal.idMeal === idMeal)
        ? current.filter((meal) => meal.idMeal !== idMeal)
        : [...current, { idMeal, strMeal, strMealThumb }]
    );
  };

  return (
    <>
      <Navbar favoriteCount={favorites.length} />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<Home favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/recipe/:id"
            element={<RecipeDetail favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                favoriteIds={favoriteIds}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="*"
            element={<Message title="Page not found" text="Use the menu above to get back to the recipes." />}
          />
        </Routes>
      </main>
    </>
  );
}
