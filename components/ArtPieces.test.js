import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";

test("renders a list of art pieces", () => {
  const pieces = [
    {
      artist: "Bob Ross",
      imageSource: "https://pfad.com",
      name: "happy little accidents",
      slug: "happy-little",
    },
    {
      artist: "Picasso",
      imageSource: "https://pfad.com",
      name: "Damen von irgendwas von avignon",
      slug: "damen-avignon",
    },
  ];
  render(<ArtPieces pieces={pieces} artPiecesInfo={[]} />);

  const bobRoss = screen.getByText(/bob ross/i);
  const picasso = screen.getByText(/picasso/i);

  const picassoArtPiece = screen.getByTestId(
    "art-piece-preview-Picasso-Damen von irgendwas von avignon"
  );

  // expect(picassoArtPiece.lastChild).toHaveAttribute("src", "https://pfad.com");
  expect(bobRoss).toBeInTheDocument();
  expect(picasso).toBeInTheDocument();
});
