/**
 * Imports the templatefunctions
 */
import { printCard, cardFieldColumn } from "./template/template-functions";

let numberOfCardsSetting: number;
let currentPlayer: "orange" | "blue";
const dialog = document.getElementById("exit-dialog") as HTMLDialogElement;
const exitGameButton = document.getElementById("exit-game-button")!;
const backToGameButton = document.getElementById("back-to-game-button")!;
const dialogExitGameButton = document.getElementById("quit-game-button")!;
const currentPlayerImg = document.getElementById("current-player-img");
const currentPlayerColor = document.getElementById("current-player-color");
const gameField = document.getElementById("game-field")!;
let scoreBlue: number = 0;
let scoreOrange: number = 0;
const scorePlayerBlueAsText = document.getElementById("score-player-blue")!;
const scorePlayerOrangeAsText = document.getElementById("score-player-orange")!;

/**
 * Load the standardsettings for the gamefield and build ist
 */
document.addEventListener("DOMContentLoaded", () => {
  const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");
  currentPlayer = settings.player;
  numberOfCardsSetting = settings.numberOfCards;
  document.body.dataset.theme = settings.theme;

  updatePlayerColor();
  generateGamefield();
  enableFlipCard();
});

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
    gamefieldSize(4, 4);
  } else if (numberOfCardsSetting === 24) {
    gamefieldSize(4, 6);
  } else if (numberOfCardsSetting === 36) {
    gamefieldSize(6, 6);
  }
}

/**
 * Generate the colums and rows from templatefunctions (template.ts) for the
 * correct sizes
 * @param columns {number}
 * @param rows {number}
 */
function gamefieldSize(columns: number, rows: number) {
  for (let cardColumn = 0; cardColumn < columns; cardColumn++) {
    gameField.innerHTML += cardFieldColumn(cardColumn);

    for (let cardRow = 0; cardRow < rows; cardRow++) {
      const gameFieldRow = document.getElementById(
        "card-field-column-" + cardColumn,
      )!;
      gameFieldRow.innerHTML += printCard();
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
/*                        Helper - remove before launch                       */
/* -------------------------------------------------------------------------- */

const richtig = document.getElementById("richtig");
const falsch = document.getElementById("falsch");

richtig?.addEventListener("click", () => {
  correctPaar = true;
  checkPaar();
});

falsch?.addEventListener("click", () => {
  correctPaar = false;
  checkPaar();
});

/* -------------------------------------------------------------------------- */
/*                                Game logic                                  */
/* -------------------------------------------------------------------------- */

let correctPaar: boolean = true;

function changePlayer() {
  if (currentPlayer === "orange") {
    currentPlayer = "blue";
    updatePlayerColor();
  } else if (currentPlayer === "blue") {
    currentPlayer = "orange";
    updatePlayerColor();
  }
}

function checkPaar() {
  if (correctPaar) {
    if (currentPlayer === "blue") {
      scoreBlue++;
    }
    if (currentPlayer === "orange") {
      scoreOrange++;
    }
  } else {
    changePlayer();
  }
  updateScore();
}

function updateScore() {
  scorePlayerBlueAsText.innerText = String(scoreBlue);
  scorePlayerOrangeAsText.innerText = String(scoreOrange);
}

function enableFlipCard() {
  const fieldRef = document.getElementById("game-field");
  if (fieldRef) {
    fieldRef.addEventListener("click", (e) => {
      const card = (e.target as HTMLElement).closest(".card") as HTMLElement;
      if (card) {
        card.classList.toggle("is-flipped");
      }
    });
  }
}
