export default function CategoryFilter({ categories, selected, onSelect }) {
  if (categories.length === 0) return null;

  return (
    <div className="chips" role="group" aria-label="Filter by category">
      {categories.map((category) => (
        <button
          key={category.idCategory}
          type="button"
          className={selected === category.strCategory ? "chip active" : "chip"}
          aria-pressed={selected === category.strCategory}
          onClick={() => onSelect(category.strCategory)}
        >
          {category.strCategory}
        </button>
      ))}
    </div>
  );
}
