import RecipeCard from "./RecipeCard.jsx";

export default function RecipeGrid({ meals, favoriteIds, onToggleFavorite }) {
  return (
    <div className="grid">
      {meals.map((meal) => (
        <RecipeCard
          key={meal.idMeal}
          meal={meal}
          isFavorite={favoriteIds.includes(meal.idMeal)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
