/**

* Imports the template functions used to generate the game field and cards.
  */
import { printCard, cardFieldColumn } from "./template/template-functions";
import { showGameOverPage, showSettingsPage } from "./main";
import {
  codeVibesArray,
  daProjectArray,
  gameArray,
} from "./template/memory-cards";

export function initGame(): void {
  let numberOfCardsSetting: number;
  let currentPlayer: "orange" | "blue";
  let scoreBlue = 0;
  let scoreOrange = 0;
  let drawCondition = 0;
  let maximumPointsAllowed = 0;
  let maximumPointsPlayers = 0;
  let memoryCardArray: string[] = [];
  let settingsTheme: string;
  let winner: string;

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
  const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");

  currentPlayer = settings.player;
  numberOfCardsSetting = settings.numberOfCards;
  settingsTheme = settings.theme;
  document.body.dataset.theme = settingsTheme;

  /**
   * Initializes the game and starts all required game processes.
   *
   * The game is started by loading the selected card set,
   * updating the current player's visual indicator,
   * generating the game field, and registering the card interaction.
   *
   * @returns {void}
   */
  function startGame(): void {
    loadMemorycards();
    updatePlayerColor();
    generateGamefield();
    flipCard();
  }

  /* -------------------------------------------------------------------------- */
  /*                                Settings                                    */
  /* -------------------------------------------------------------------------- */

  /**
   * Loads the memory card array that corresponds to the selected game theme.
   *
   * @returns {void}
   */
  function loadMemorycards(): void {
    if (settingsTheme === "vibes") {
      memoryCardArray = [...codeVibesArray];
    } else if (settingsTheme === "gaming") {
      memoryCardArray = [...gameArray];
    } else if (settingsTheme === "project") {
      memoryCardArray = [...daProjectArray];
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                            Generate Game Field                             */
  /* -------------------------------------------------------------------------- */

  /**
   * Updates the visual indicator of the current player.
   *
   * The corresponding player color is applied to the player image and icon,
   * while the styling of the previous player is removed.
   *
   * @returns {void}
   */
  function updatePlayerColor(): void {
    if (currentPlayer === "orange") {
      currentPlayerImg?.classList.remove("current-player__img--blue");
      currentPlayerImg?.classList.add("current-player__img--orange");
      currentPlayerColor?.classList.remove("current-player__icon--blue");
      currentPlayerColor?.classList.add("current-player__icon--orange");
    } else {
      currentPlayerImg?.classList.remove("current-player__img--orange");
      currentPlayerImg?.classList.add("current-player__img--blue");
      currentPlayerColor?.classList.remove("current-player__icon--orange");
      currentPlayerColor?.classList.add("current-player__icon--blue");
    }
  }

  /**
   * Configures and generates the game field based on the selected number of cards.
   *
   * The function determines the maximum number of possible pairs,
   * limits the card array to the required size, shuffles the cards,
   * and creates the corresponding grid layout.
   *
   * @returns {void}
   */
  function generateGamefield(): void {
    if (numberOfCardsSetting === 16) {
      generateGamefieldSixteenCards();
    } else if (numberOfCardsSetting === 24) {
      generateGamefieldTwentyfour();
    } else if (numberOfCardsSetting === 36) {
      generateGamefieldThirtySix();
    }
    drawCondition = maximumPointsAllowed / 2;
  }

  /**
   * Generates a game field with 16 memory cards.
   *
   * Sets the maximum number of points to 8, limits the card array
   * to 16 cards, shuffles the cards randomly, and creates a 4 × 4
   * game field.
   *
   * @returns {void}
   */
  function generateGamefieldSixteenCards() {
    maximumPointsAllowed = 8;
    memoryCardArray.splice(16);
    memoryCardArray.sort(() => Math.random() - 0.5);
    gamefieldSize(4, 4, "card--margin-16cards", memoryCardArray);
  }

  /**
   * Generates a game field with 24 memory cards.
   *
   * Sets the maximum number of points to 12, limits the card array
   * to 24 cards, shuffles the cards randomly, and creates a 4 × 6
   * game field.
   *
   * @returns {void}
   */
  function generateGamefieldTwentyfour() {
    maximumPointsAllowed = 12;
    memoryCardArray.splice(24);
    memoryCardArray.sort(() => Math.random() - 0.5);
    gamefieldSize(4, 6, "card--margin-more-than-16cards", memoryCardArray);
  }

  /**
   * Generates a game field with 36 memory cards.
   *
   * Sets the maximum number of points to 18, shuffles the cards randomly,
   * and creates a 6 × 6 game field.
   *
   * @returns {void}
   */
  function generateGamefieldThirtySix() {
    maximumPointsAllowed = 18;
    memoryCardArray.sort(() => Math.random() - 0.5);
    gamefieldSize(6, 6, "card--margin-more-than-16cards", memoryCardArray);
  }

  /**
   * Generates the columns and rows of the game field.
   *
   * @param {number} columns - The number of columns to generate.
   * @param {number} rows - The number of cards to generate in each column.
   * @param {string} margin - The CSS class used to apply the correct card spacing.
   * @param {string[]} memoryCards - The array containing the card image paths.
   *
   * @returns {void}
   */
  function gamefieldSize(
    columns: number,
    rows: number,
    margin: string,
    memoryCards: string[],
  ): void {
    for (let cardColumn = 0; cardColumn < columns; cardColumn++) {
      gameField.innerHTML += cardFieldColumn(cardColumn);
      for (let cardRow = 0; cardRow < rows; cardRow++) {
        const cardIndex = cardColumn * rows + cardRow;
        const gameFieldRow = document.getElementById(
          `card-field-column-${cardColumn}`,
        )!;
        gameFieldRow.innerHTML += printCard(margin, memoryCards[cardIndex]);
      }
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                              Exit Dialog                                   */
  /* -------------------------------------------------------------------------- */

  /**
   * Initializes all exit dialog interactions.
   *
   * @returns {void}
   */
  function initExitDialog(): void {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }});
    exitGameButton.addEventListener("click", () => {
      dialog.showModal();});
    backToGameButton.addEventListener("click", () => {
      dialog.close();});
    dialogExitGameButton.addEventListener("click", () => {
      localStorage.clear();
      showSettingsPage();});
  }

  /* -------------------------------------------------------------------------- */
  /*                                Game Logic                                  */
  /* -------------------------------------------------------------------------- */

  /**
   * Switches the active player and updates the player indicator.
   *
   * @returns {void}
   */
  function changePlayer(): void {
    if (currentPlayer === "orange") {
      currentPlayer = "blue";
    } else {
      currentPlayer = "orange";
    }
    updatePlayerColor();
  }

  /**
   * Updates the displayed scores of both players.
   *
   * @returns {void}
   * */
  function updateScore(): void {
    scorePlayerBlueAsText.innerText = String(scoreBlue);
    scorePlayerOrangeAsText.innerText = String(scoreOrange);
  }

  /**
   * Handles the selection of cards in the game field.
   *
   * The function uses event delegation to listen for clicks on the game field
   * and determines whether the clicked element belongs to a card.
   *
   * Solved cards and cards that have already been selected are ignored.
   *
   * When a valid card is clicked, it is flipped and its image source is stored.
   * When a second card is selected, both cards are passed to the
   * {@link compareCards} function.
   *
   * @returns {void}
   */
  function flipCard(): void {
    let firstCard: HTMLElement | null = null;
    let firstImageSrc: string | null = null;
    let isComparing = false;

    gameField.addEventListener("click", (event) => {
      if (isComparing) {return;}
      const target = event.target as HTMLElement;
      const card = target.closest(".card") as HTMLElement | null;
      if (!card || card.classList.contains("is-solved") || card.classList.contains("no-click-again")) {return;}
      const image = card.querySelector(".card__face--back img",) as HTMLImageElement | null;
      if (!image) {return;}
      card.classList.add("is-flipped");
      if (!firstCard) {
        firstCard = card;
        firstImageSrc = image.src;
        card.classList.add("no-click-again");
        return;}
      isComparing = true;
      compareCards(firstCard, card, firstImageSrc, image.src, () => {
        isComparing = false;});
      firstCard = null;
      firstImageSrc = null;
    });
  }

  /**
   * Compares two selected cards to determine whether they form a matching pair.
   *
   * If both cards contain the same image, they are marked as solved
   * and the current player receives one point.
   *
   * If the cards do not match, the active player changes and both cards
   * are turned face down again after a short delay.
   *
   * @param {HTMLElement} firstCard - The first selected card.
   * @param {HTMLElement} secondCard - The second selected card.
   * @param {string | null} firstImageSrc - The image source of the first card.
   * @param {string} secondImageSrc - The image source of the second card.
   * @param {() => void} onFinished - Callback executed after the comparison is finished.
   *
   * @returns {void}
   */
  function compareCards(
    firstCard: HTMLElement,
    secondCard: HTMLElement,
    firstImageSrc: string | null,
    secondImageSrc: string,
    onFinished: () => void,
  ): void {
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
      onFinished();
    } else {
      changePlayer();
      setTimeout(() => {
        firstCard.classList.remove("is-flipped", "no-click-again");
        secondCard.classList.remove("is-flipped");
        onFinished();
      }, 1000);
    }
  }

  /**
   * Checks whether the game has reached a draw or winning condition.
   *
   * A draw occurs when both players have found the same number of pairs.
   * A player wins when all pairs have been found and their score is higher
   * than the other player's score.
   *
   * @returns {void}
   */
  function checkWinCondition(): void {
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
   *
   * @returns {void}
   */
  function saveWinningValues(): void {
    const winningValues = {
      scoreBlue,
      scoreOrange,
      winner,
    };
    localStorage.setItem("winningValue", JSON.stringify(winningValues));
    showGameOverPage();
  }

  /**
   * Initializes the game and starts the exit dialog.
   */
  startGame();
  initExitDialog();
}
