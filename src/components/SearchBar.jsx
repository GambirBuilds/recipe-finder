import { useState } from "react";

export default function SearchBar({ onSearch, disabled }) {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("name");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    onSearch(mode, text.trim());
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <select
        aria-label="Search by"
        value={mode}
        onChange={(event) => setMode(event.target.value)}
      >
        <option value="name">Dish name</option>
        <option value="ingredient">Ingredient</option>
      </select>
      <input
        type="search"
        aria-label="Search recipes"
        placeholder={mode === "name" ? "Try “arrabiata” or “pie”" : "Try “chicken” or “garlic”"}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit" disabled={disabled || !text.trim()}>
        Find recipes
      </button>
    </form>
  );
}
