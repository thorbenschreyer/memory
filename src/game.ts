/**
 * Imports the template functions used to generate the game field and cards.
 */
import { printCard, cardFieldColumn } from "./template/template-functions";
import { showGameOverPage } from "./main";
import {
  codeVibesArray,
  daProjectArray,
  gameArray,
} from "./template/memory-cards";

export function initGame() {
  let numberOfCardsSetting: number;
  let currentPlayer: "orange" | "blue";
  const dialog = document.getElementById("exit-dialog") as HTMLDialogElement;
  const exitGameButton = document.getElementById("exit-game-button")!;
  const backToGameButton = document.getElementById("back-to-game-button")!;
  const dialogExitGameButton = document.getElementById("quit-game-button")!;
  const currentPlayerImg = document.getElementById("current-player-img");
  const currentPlayerColor = document.getElementById("current-player-color");
  const gameField = document.getElementById("game-field")!;
  const scorePlayerBlueAsText = document.getElementById("score-player-blue")!;
  const scorePlayerOrangeAsText = document.getElementById(
    "score-player-orange",
  )!;

  let scoreBlue: number = 0;
  let scoreOrange: number = 0;
  let drawCondition: number = 0;
  let maximumPointsAllowed: number = 0;
  let maximumPointsPlayers: number = 0;
  let memoryCardArray: string[];
  let settingsTheme: string;
  let winner: string;

  const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");
  currentPlayer = settings.player;
  numberOfCardsSetting = settings.numberOfCards;
  document.body.dataset.theme = settings.theme;
  settingsTheme = settings.theme;
  loadMemorycards();
  updatePlayerColor();
  generateGamefield();
  flipCard();

  /* -------------------------------------------------------------------------- */
  /*                                Settings                                    */
  /* -------------------------------------------------------------------------- */

  /**

* Loads the memory card array that corresponds to the selected game theme.
  */
  function loadMemorycards() {
    if (settingsTheme === "vibes") {
      memoryCardArray = codeVibesArray;
    } else if (settingsTheme === "gaming") {
      memoryCardArray = gameArray;
    } else if (settingsTheme === "project") {
      memoryCardArray = daProjectArray;
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                            Generate Game Field                             */
  /* -------------------------------------------------------------------------- */

  /**

* Updates the current player's visual indicator.
*
* The corresponding player color is applied to the player image and icon,
* while the styling of the previous player is removed.
  */
  function updatePlayerColor() {
    if (currentPlayer === "orange") {
      currentPlayerImg?.classList.remove("current-player__img--blue");
      currentPlayerImg?.classList.add("current-player__img--orange");

      currentPlayerColor?.classList.remove("current-player__icon--blue");
      currentPlayerColor?.classList.add("current-player__icon--orange");
    } else if (currentPlayer === "blue") {
      currentPlayerImg?.classList.remove("current-player__img--orange");
      currentPlayerImg?.classList.add("current-player__img--blue");

      currentPlayerColor?.classList.add("current-player__icon--blue");
      currentPlayerColor?.classList.remove("current-player__icon--orange");
    }
  }

  /**

* Configures and generates the game field based on the selected number of cards.
*
* The function determines the maximum number of possible pairs, limits the
* card array to the required size, shuffles the cards, and creates the
* corresponding grid layout.
  */
  function generateGamefield() {
    if (numberOfCardsSetting === 16) {
      maximumPointsAllowed = 8;
      memoryCardArray.splice(16);
      memoryCardArray.sort(() => Math.random() - 0.5);

      gamefieldSize(4, 4, "card--margin-16cards", memoryCardArray);
    } else if (numberOfCardsSetting === 24) {
      maximumPointsAllowed = 12;
      memoryCardArray.splice(24);
      memoryCardArray.sort(() => Math.random() - 0.5);

      gamefieldSize(4, 6, "card--margin-more-than-16cards", memoryCardArray);
    } else if (numberOfCardsSetting === 36) {
      maximumPointsAllowed = 18;
      memoryCardArray.sort(() => Math.random() - 0.5);

      gamefieldSize(6, 6, "card--margin-more-than-16cards", memoryCardArray);
    }

    drawCondition = maximumPointsAllowed / 2;
  }

  /**

* Generates the columns and rows of the game field.
*
* @param columns - The number of columns to generate.
* @param rows - The number of cards to generate in each column.
* @param margin - The CSS class used to apply the correct card spacing.
* @param memoryCards - The array containing the card image paths.
  */
  function gamefieldSize(
    columns: number,
    rows: number,
    margin: string,
    memoryCards: string[],
  ) {
    for (let cardColumn = 0; cardColumn < columns; cardColumn++) {
      gameField.innerHTML += cardFieldColumn(cardColumn);

      for (let cardRow = 0; cardRow < rows; cardRow++) {
        const cardIndex = cardColumn * rows + cardRow;

        const gameFieldRow = document.getElementById(
          "card-field-column-" + cardColumn,
        )!;

        gameFieldRow.innerHTML += printCard(margin, memoryCards[cardIndex]);
      }
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                              Exit Dialog                                   */
  /* -------------------------------------------------------------------------- */

  /**

* Closes the exit dialog when the user clicks outside the dialog content.
  */
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  /**

* Opens the exit confirmation dialog when the user clicks the exit button.
  */
  exitGameButton?.addEventListener("click", () => {
    dialog.showModal();
  });

  /**

* Closes the exit confirmation dialog and returns to the current game.
  */
  backToGameButton?.addEventListener("click", () => {
    dialog.close();
  });

  /**

* Clears the saved game data and redirects the user to the start page.
  */
  dialogExitGameButton?.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
  });

  /* -------------------------------------------------------------------------- */
  /*                                Game Logic                                  */
  /* -------------------------------------------------------------------------- */

  /**

* Switches the active player and updates the player indicator.
  */
  function changePlayer() {
    if (currentPlayer === "orange") {
      currentPlayer = "blue";
      updatePlayerColor();
    } else if (currentPlayer === "blue") {
      currentPlayer = "orange";
      updatePlayerColor();
    }
  }

  /**

* Updates the displayed scores of both players.
  */
  function updateScore() {
    scorePlayerBlueAsText.innerText = String(scoreBlue);
    scorePlayerOrangeAsText.innerText = String(scoreOrange);
  }

  /**
Handles the selection of cards in the game field.

The function uses event delegation to listen for clicks on the game field
and determines whether the clicked element belongs to a card. Solved cards
and cards that have already been selected are ignored.

When a valid card is clicked, it is flipped and its image source is stored.
The first selected card is saved temporarily. When a second card is selected,
both cards are passed to the compareCards function to determine whether they
form a matching pair.

After the comparison, the stored card data is reset so that the next pair
can be selected.
*/
function flipCard() {
  const fieldRef = document.getElementById("game-field");

  if (!fieldRef) {
    return;
  }

  let firstCard: HTMLElement | null = null;
  let firstImageSrc: string | null = null;

  let isComparing = false;

  fieldRef.addEventListener("click", (e) => {
    // Keine weiteren Karten anklickbar,
    // solange das aktuelle Paar verarbeitet wird
    if (isComparing) {
      return;
    }

    const target = e.target as HTMLElement;
    const card = target.closest(".card") as HTMLElement;

    if (
      !card ||
      card.classList.contains("is-solved") ||
      card.classList.contains("no-click-again")
    ) {
      return;
    }

    const img = card.querySelector(
      ".card__face--back img",
    ) as HTMLImageElement;

    if (!img) {
      return;
    }

    card.classList.add("is-flipped");

    if (!firstCard) {
      firstCard = card;
      firstImageSrc = img.src;
      card.classList.add("no-click-again");
      return;
    }

    // Ab jetzt sind genau zwei Karten aufgedeckt
    isComparing = true;

    compareCards( firstCard, card, firstImageSrc, img.src, () => {
        isComparing = false;},
    );

    firstCard = null;
    firstImageSrc = null;
  });
}



  /**
Compares two selected cards to determine whether they form a matching pair.

If both cards contain the same image, they are marked as solved and the
current player receives a point. The maximum number of points is updated
accordingly.

If the cards do not match, the active player changes and both cards are
turned face down again after a short delay.

After each comparison, the score and the win condition are updated.
*/
function compareCards(
  firstCard: HTMLElement,
  secondCard: HTMLElement,
  firstImageSrc: string | null,
  secondImageSrc: string,
  onFinished: () => void,
) {
  if (firstImageSrc === secondImageSrc) {
    firstCard.classList.add("is-solved");
    secondCard.classList.add("is-solved");

    if (currentPlayer === "blue") {
      scoreBlue++;
    }

    if (currentPlayer === "orange") {
      scoreOrange++;
    }

    maximumPointsPlayers++;

    updateScore();
    checkWinCondition();

    // Bei einem richtigen Paar sofort wieder freigeben
    onFinished();
  } else {
    changePlayer();

    setTimeout(() => {
      firstCard.classList.remove("is-flipped", "no-click-again");
      secondCard.classList.remove("is-flipped");

      // Erst nach dem Umdrehen wieder freigeben
      onFinished();
    }, 1000);
  }
}

  /**

* Checks whether the game has reached a draw or a winning condition.
*
* A draw occurs when both players have found the same number of pairs.
* A player wins when all pairs have been found and their score is higher
* than the other player's score.
  */
function checkWinCondition() {
  if (maximumPointsPlayers !== maximumPointsAllowed) {
    return;
  }

  if (scoreBlue > scoreOrange) {
    winner = "Blue";
  } else if (scoreOrange > scoreBlue) {
    winner = "Orange";
  } else {
    winner = "Draw";
  }

  saveWinningValues();
}

  /**

* Saves the final scores and winner information in localStorage.
*
* The stored values are used by the game-over screen and winner screen.
  */
  function saveWinningValues() {
    const winningValues = {
      scoreBlue,
      scoreOrange,
      winner,
    };
    console.log("Wird gespeichert:", winningValues);
    localStorage.setItem("winningValue", JSON.stringify(winningValues));
    showGameOverPage();
  }
}
