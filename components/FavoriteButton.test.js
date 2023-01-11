import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavoriteButton from "./FavoriteButton";

test("calls onToggleFavorite is triggered on button click", async () => {
  const user = userEvent.setup(); //die vorbereitung auf nutzerinteraktion - gibt uns den "virtuellen nutzer"
  const fn = jest.fn(); // mocking function - spy

  render(<FavoriteButton onToggleFavorite={fn} />); //erzeugt "browser" webseite

  // screen.debug(); //lässt uns den dom anschauen

  // const button = screen.getByRole("button", { name: /favorite/i }); //regex schreibweise
  const button = screen.getByRole("button", { name: "Favorite 🤙" }); //suche nach html element auf der seite

  expect(button).toBeInTheDocument(); //überpruft ob der button noch teil vom dom ist
  expect(fn).not.toHaveBeenCalled(); // überprüfen wie oft aufgerufen wurde, nie -> feature von spy function

  await user.click(button); // user klickt auf button referenz

  expect(fn).toHaveBeenCalledTimes(1); // ist die funktion _jetzt_ aufgerufen wurden, exakt einmal?
});
