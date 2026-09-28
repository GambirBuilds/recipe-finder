const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

async function request(path) {
  const response = await fetch(`${BASE_URL}/${path}`);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
}

export async function searchByName(name) {
  const data = await request(`search.php?s=${encodeURIComponent(name)}`);
  return data.meals ?? [];
}

export async function searchByIngredient(ingredient) {
  const formatted = ingredient.trim().replace(/\s+/g, "_");
  const data = await request(`filter.php?i=${encodeURIComponent(formatted)}`);
  return data.meals ?? [];
}

export async function filterByCategory(category) {
  const data = await request(`filter.php?c=${encodeURIComponent(category)}`);
  return data.meals ?? [];
}

export async function getMealById(id) {
  const data = await request(`lookup.php?i=${encodeURIComponent(id)}`);
  return data.meals ? data.meals[0] : null;
}

export async function getCategories() {
  const data = await request("categories.php");
  return data.categories ?? [];
}
