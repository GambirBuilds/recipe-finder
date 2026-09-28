export default function FavoriteButton({ isFavorite, onToggle, label }) {
  return (
    <button
      type="button"
      className={isFavorite ? "fav-btn active" : "fav-btn"}
      aria-pressed={isFavorite}
      aria-label={`${isFavorite ? "Remove" : "Save"} ${label} ${isFavorite ? "from" : "to"} favorites`}
      onClick={onToggle}
    >
      {isFavorite ? "♥" : "♡"}
    </button>
  );
}
