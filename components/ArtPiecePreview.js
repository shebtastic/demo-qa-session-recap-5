import styled from "styled-components";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

function ArtPiecePreview({
  image,
  title,
  artist,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{artist}</h3>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <StyledImage src={image} width={300} height={300} alt="" />
    </div>
  );
}

const StyledImage = styled(Image)`
  object-fit: contain;
`;

export default ArtPiecePreview;
