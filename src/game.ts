let playerSetting: string;
let numberOfCardsSetting: number;
let currentPlayer: "orange" | "blue";

const dialog = document.getElementById("exit-dialog") as HTMLDialogElement;
const exitGameButton = document.getElementById("exit-game-button")!;
const backToGameButton = document.getElementById("back-to-game-button")!;
const dialogExitGameButton = document.getElementById("quit-game-button")!;
const currentPlayerImg = document.getElementById("current-player-img");
const currentPlayerColor = document.getElementById("current-player-color");
const gameField = document.getElementById("game-field")!;

document.addEventListener("DOMContentLoaded", () => {
  const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");
  playerSetting = settings.player;
  numberOfCardsSetting = settings.numberOfCards;
  document.body.dataset.theme = settings.theme;

  checkPlayerColor();
  generateGamefield();
});

function checkPlayerColor() {
  if (playerSetting === "orange") {
    currentPlayer = "orange";
    currentPlayerImg?.classList.remove("current-player__img--blue");
    currentPlayerImg?.classList.add("current-player__img--orange");
    currentPlayerColor?.classList.remove("current-player__icon--blue");
    currentPlayerColor?.classList.add("current-player__icon--orange");
  } else if (playerSetting === "blue") {
    currentPlayer = "blue";
    currentPlayerImg?.classList.remove("current-player__img--orange");
    currentPlayerImg?.classList.add("current-player__img--blue");
    currentPlayerColor?.classList.add("current-player__icon--blue");
    currentPlayerColor?.classList.remove("current-player__icon--range");
  }
}

function generateGamefield() {
  if (numberOfCardsSetting === 16) {
    gamefieldSize(4,4);
  } else if (numberOfCardsSetting === 24) {
    gamefieldSize(4,6);
  } else if (numberOfCardsSetting === 36) {
    gamefieldSize(6,6);
  }
}


function gamefieldSize (colums:number, rows:number) {
      for (let cardColumn = 0; cardColumn < colums; cardColumn++) {
      gameField.innerHTML += cardFieldColumn (cardColumn)

      for (let cardRow = 0; cardRow < rows; cardRow++) {
        const gameFieldRow = document.getElementById("card-field-column-" + cardColumn)!;
        gameFieldRow.innerHTML += printCard ();
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


function printCard () {
    return `
    <div class="card">
        <div class="card__img"></div>
    </div>
    `
}

function cardFieldColumn (index:number) {
    return `
          <div id="card-field-column-${index}" class="card-field-column">
 
      </div>
    `
}