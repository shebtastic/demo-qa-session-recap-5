import useSWR from "swr";
import ArtPiecePreview from "../components/ArtPiecePreview";
import ArtPieces from "../components/ArtPieces";

export default function HomePage({ artPiecesInfo, toggleFavorite }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    (url) => fetch(url).then((res) => res.json())
  );

  if (isLoading || error) return <h1>Loading...</h1>;

  console.log(data);

  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ArtPieces
        pieces={data}
        artPiecesInfo={artPiecesInfo}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}
