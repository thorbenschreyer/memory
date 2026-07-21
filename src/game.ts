/**
 * Imports the templatefunctions
 */
import { printCard, cardFieldColumn } from "./template/template-functions";
import {
  codeVibesArray,
  daProjectArray,
  gameArray,
} from "./template/memeory-cards";

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
const scorePlayerOrangeAsText = document.getElementById("score-player-orange")!;

let scoreBlue: number = 0;
let scoreOrange: number = 0;
let drawCondition: number = 0;
let maximumPointsAllowed: number = 0;
let maximumPointsPlayers: number = 0;
let memoryCardArray: string[];
let settingsTheme: string;
let winner: string;

/**
 * Load the standardsettings for the gamefield and build ist
 */
document.addEventListener("DOMContentLoaded", () => {
  const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");
  currentPlayer = settings.player;
  numberOfCardsSetting = settings.numberOfCards;
  document.body.dataset.theme = settings.theme;
  settingsTheme = settings.theme;

  loadMemorycards();
  updatePlayerColor();
  generateGamefield();
  flipCard();
});

/* -------------------------------------------------------------------------- */
/*                                Settings                                  */
/* -------------------------------------------------------------------------- */

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
/*                              Generate Gamefield                            */
/* -------------------------------------------------------------------------- */

/**
 * Set and remove the color or icon from the player
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
    currentPlayerColor?.classList.remove("current-player__icon--range");
  }
}

/**
 * Generate the correct gamefildsize
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
 * Generate the colums and rows from templatefunctions (template.ts) for the
 * correct sizes
 * @param columns {number}
 * @param rows {number}
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
 * Close dialog while clicking outside of themselfe
 */
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

/**
 * Show dialog while clicking on exit game
 */
exitGameButton?.addEventListener("click", (event) => {
  dialog.showModal();
});

/**
 * close dialog and go back to game
 */
backToGameButton?.addEventListener("click", (event) => {
  dialog.close();
});

/**
 * close dialog, clear local storage and go to index.html
 */
dialogExitGameButton?.addEventListener("click", (event) => {
  localStorage.clear();
  window.location.href = "index.html";
});

/* -------------------------------------------------------------------------- */
/*                                Game logic                                  */
/* -------------------------------------------------------------------------- */

function changePlayer() {
  if (currentPlayer === "orange") {
    currentPlayer = "blue";
    updatePlayerColor();
  } else if (currentPlayer === "blue") {
    currentPlayer = "orange";
    updatePlayerColor();
  }
}

function updateScore() {
  scorePlayerBlueAsText.innerText = String(scoreBlue);
  scorePlayerOrangeAsText.innerText = String(scoreOrange);
}

function flipCard() {
  const fieldRef = document.getElementById("game-field");

  if (!fieldRef) {
    return;
  }

  let firstCard: HTMLElement | null = null;
  let firstImageSrc: string | null = null;

  fieldRef.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const card = target.closest(".card") as HTMLElement;

    if (!card) {
      return;
    }

    // Bereits gefundenes Paar nicht mehr anklickbar machen
    if (
      card.classList.contains("is-solved") ||
      card.classList.contains("no-click-again")
    ) {
      return;
    }
    const img = card.querySelector(".card__face--back img") as HTMLImageElement;
    if (!img) {
      return;
    }
    const imageSrc = img.src;
    card.classList.toggle("is-flipped");
    if (!firstCard) {
      firstCard = card;
      firstImageSrc = imageSrc;
      card.classList.add("no-click-again");
    } else {
      if (firstImageSrc === imageSrc) {
        //Umradnung TODO
        firstCard.classList.add("is-solved");
        card.classList.add("is-solved");
        if (currentPlayer === "blue") {
          scoreBlue++;
          maximumPointsPlayers++;
        }
        if (currentPlayer === "orange") {
          scoreOrange++;
          maximumPointsPlayers++;
        }
      } else {
        changePlayer();
        const firstCardToFlip = firstCard;
        setTimeout(() => {
          firstCardToFlip?.classList.remove("is-flipped", "no-click-again");
          card.classList.remove("is-flipped");
        }, 1000);
      }
      firstCard = null;
      firstImageSrc = null;
      updateScore();
      checkWinCondition();
    }
  });
}

function checkWinCondition() {
  if (
    scoreBlue === maximumPointsAllowed / 2 &&
    scoreOrange === maximumPointsAllowed / 2
  ) {
    winner ="Draw"
    playerDraw();
  } else if (
    scoreOrange > maximumPointsAllowed / 2 &&
    maximumPointsPlayers === maximumPointsAllowed
  ) {
    winner = "Orange"
    playerOrangeWin();
  } else if (
    scoreBlue > maximumPointsAllowed / 2 &&
    maximumPointsPlayers === maximumPointsAllowed
  ) {
    winner = "Blue"
    playerBlueWin();
  }
  saveWinningValues();
}

function playerOrangeWin() {
  window.location.href = "game_over_screen.html";
}

function playerBlueWin() {
  window.location.href = "game_over_screen.html";
}

function playerDraw() {
  window.location.href = "game_over_screen.html";
}

function saveWinningValues() {
  const winningValues = {
    scoreBlue,
    scoreOrange,
    winner
  };
  localStorage.setItem("winningValue", JSON.stringify(winningValues));
}

/* -------------------------------------------------------------------------- */
/*                        Helper - remove before launch                       */
/* -------------------------------------------------------------------------- */
