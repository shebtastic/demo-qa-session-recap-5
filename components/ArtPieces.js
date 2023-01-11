import ArtPiecePreview from "./ArtPiecePreview";

function ArtPieces({ pieces, artPiecesInfo, toggleFavorite }) {
  function isArtPieceFavorite(slug) {
    return artPiecesInfo.some(
      (artPiece) => artPiece.slug === slug && artPiece.isFavorite
    );
  }

  return (
    <ul>
      {pieces.map((art) => (
        <li key={art.slug}>
          <ArtPiecePreview
            artist={art.artist}
            title={art.name}
            image={art.imageSource}
            isFavorite={isArtPieceFavorite(art.slug)}
            onToggleFavorite={() => toggleFavorite(art.slug)}
          />
        </li>
      ))}
    </ul>
  );
}

export default ArtPieces;
