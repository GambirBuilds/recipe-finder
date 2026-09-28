import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";
import RecipeGrid from "../components/RecipeGrid.jsx";
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";
import {
  filterByCategory,
  getCategories,
  searchByIngredient,
  searchByName,
} from "../services/mealApi.js";

const searchers = {
  name: searchByName,
  ingredient: searchByIngredient,
  category: filterByCategory,
};

const describe = { name: "dish", ingredient: "ingredient", category: "category" };

export default function Home({ favoriteIds, onToggleFavorite }) {
  const [query, setQuery] = useState({ type: "name", value: "chicken" });
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");

    searchers[query.type](query.value)
      .then((results) => {
        if (cancelled) return;
        setMeals(results);
        setStatus("success");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [query]);

  const handleSearch = (type, value) => setQuery({ type, value });
  const selectedCategory = query.type === "category" ? query.value : "";

  return (
    <>
      <section className="hero">
        <h1>What are we cooking tonight?</h1>
        <p>Search by dish or by what’s already in your fridge.</p>
        <SearchBar onSearch={handleSearch} disabled={status === "loading"} />
      </section>

      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={(category) => handleSearch("category", category)}
      />

      {status === "loading" && <Loader text="Finding recipes…" />}
      {status === "error" && (
        <Message
          isError
          title="Couldn’t reach the recipe service"
          text="Check your internet connection and search again."
        />
      )}
      {status === "success" && meals.length === 0 && (
        <Message
          title="No recipes found"
          text={`Nothing matched that ${describe[query.type]}. Try a simpler word, like “beef” or “rice”.`}
        />
      )}
      {status === "success" && meals.length > 0 && (
        <>
          <p className="result-count">
            {meals.length} {meals.length === 1 ? "recipe" : "recipes"} for {describe[query.type]}{" "}
            <strong>{query.value}</strong>
          </p>
          <RecipeGrid meals={meals} favoriteIds={favoriteIds} onToggleFavorite={onToggleFavorite} />
        </>
      )}
    </>
  );
}
