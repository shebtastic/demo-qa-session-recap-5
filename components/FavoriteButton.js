function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button onClick={onToggleFavorite}>
      {isFavorite ? "Unfavorite 👎" : "Favorite 🤙"}
    </button>
  );
}

export default FavoriteButton;
