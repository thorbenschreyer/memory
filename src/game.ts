let playerSetting: string;
let numberOfCardsSetting: number;
let currentPlayer: "orange" | "blue";

const dialog = document.getElementById("exit-dialog") as HTMLDialogElement;
const exitGameButton = document.getElementById("exit-game-button")!;
const backToGameButton = document.getElementById("back-to-game-button")!;
const dialogExitGameButton = document.getElementById("quit-game-button")!;

document.addEventListener("DOMContentLoaded", () => {
  const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");
  playerSetting = settings.player;
  numberOfCardsSetting = settings.numberOfCards;
  document.body.dataset.theme = settings.theme;

  setStartingPlayer();
});

// Für den wechsel der Farbe müssen wir umbauen! Alles was Farben hat muss via klasse geändert werden können.
// Daher muss dann bsp in gamefield-page zeile 89 umbauen zu Element __color und dann einen modifier --color hinzufügen
function setStartingPlayer() {
  if (playerSetting === "orange") {
    currentPlayer = "orange";
    console.log("Orange");
  } else if (playerSetting === "blue") {
    currentPlayer = "blue";
    console.log("blue");
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