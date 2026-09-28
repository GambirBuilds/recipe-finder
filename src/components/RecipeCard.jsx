import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton.jsx";

export default function RecipeCard({ meal, isFavorite, onToggleFavorite }) {
  return (
    <article className="card">
      <Link to={`/recipe/${meal.idMeal}`} className="card-link">
        <img src={`${meal.strMealThumb}/preview`} alt={meal.strMeal} loading="lazy" />
        <h3>{meal.strMeal}</h3>
      </Link>
      <FavoriteButton
        isFavorite={isFavorite}
        label={meal.strMeal}
        onToggle={() => onToggleFavorite(meal)}
      />
    </article>
  );
}
