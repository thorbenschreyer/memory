let playerSetting: string;
let numberOfCardsSetting: number;
let currentPlayer: "orange" | "blue";

const dialog = document.getElementById("exit-dialog") as HTMLDialogElement;
const exitGameButton = document.getElementById("exit-game-button")!;
const backToGameButton = document.getElementById("back-to-game-button")!;
const dialogExitGameButton = document.getElementById("quit-game-button")!;
const currentPlayerImg = document.getElementById("current-player-img")
const currentPlayerColor = document.getElementById("current-player-color")

document.addEventListener("DOMContentLoaded", () => {
  const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");
  playerSetting = settings.player;
  numberOfCardsSetting = settings.numberOfCards;
  document.body.dataset.theme = settings.theme;

  checkPlayerColor();
  generateGamefield()
});

function checkPlayerColor() {
  if (playerSetting === "orange") {
    currentPlayer = "orange";
    currentPlayerImg?.classList.remove('current-player__img--blue')
    currentPlayerImg?.classList.add('current-player__img--orange') 
    currentPlayerColor?.classList.remove('current-player__icon--blue')
    currentPlayerColor?.classList.add('current-player__icon--orange') 
    console.log("Orange");
  } else if (playerSetting === "blue") {
    currentPlayer = "blue";
    currentPlayerImg?.classList.remove('current-player__img--orange')
    currentPlayerImg?.classList.add('current-player__img--blue')
    currentPlayerColor?.classList.add('current-player__icon--blue') 
    currentPlayerColor?.classList.remove('current-player__icon--range')
    console.log("blue");
  }
}

function generateGamefield() {
  if (numberOfCardsSetting === 16) {
    console.log("16 Karten");
  } else if (numberOfCardsSetting === 24) {
    console.log("24 Karten");
  } else if (numberOfCardsSetting === 36) {
    console.log("36 Karten");
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
  window.location.href = "index.html"
});