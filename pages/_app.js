import { useImmerLocalStorageState } from "../lib/hooks";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "art-gallery",
    {
      defaultValue: [],
    }
  );

  function toggleFavorite(slug) {
    // slug ist meine id, brauche wiedererkennung von eintrag, den ich ändern möchte
    //state update
    setArtPiecesInfo((draft) => {
      //draft weil immer.js, darf ich also mutieren
      const artPiece = draft.find((art) => art.slug === slug); //gibt es dieses kunstwerk schon in meiner liste?
      if (!artPiece) {
        //wenn nein
        draft.push({
          //dann füg das kunstwerk als favorit zu
          slug,
          isFavorite: true, //macht es zum favoriten
        });
      } else {
        //wenn ja, also kunstwerk schon in der liste
        artPiece.isFavorite = !artPiece.isFavorite; //will ich den favoritenstatus umdrehen
      }
    });
  }

  return (
    <>
      <GlobalStyle />
      <Component
        artPiecesInfo={artPiecesInfo}
        toggleFavorite={toggleFavorite}
        {...pageProps}
      />
    </>
  );
}
