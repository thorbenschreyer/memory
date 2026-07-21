let winningPlayer: string;
let winnerScreenTheme: string;
const winner = document.getElementById("winning-player")!;
const winnerImage = document.getElementById(
  "winning-player-image",
) as HTMLImageElement;
const screenText = document.getElementById("winner-screen_text")!;

/**

* Loads the saved game settings and winner information from localStorage
* when the page has finished loading.
*
* The selected theme is applied to the document body, while the winning
* player is used to determine which result screen should be displayed.
  */
document.addEventListener("DOMContentLoaded", () => {
  const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");
  const winner = JSON.parse(localStorage.getItem("winningValue") ?? "{}");

  document.body.dataset.theme = settings.theme;
  winnerScreenTheme = settings.theme;
  winningPlayer = winner.winner;

  showWinningplayer();
});

/**

* Determines which result screen should be displayed based on the winning player.
*
* Depending on the stored result, the function displays either the draw screen,
* the Orange Player winning screen, or the Blue Player winning screen.
  */
function showWinningplayer() {
  if (winningPlayer === "Draw") {
    printDrawPage();
  } else if (winningPlayer === "Orange") {
    printOrangePage();
  } else if (winningPlayer === "Blue") {
    printBluePage();
  }
}

/**

* Displays the draw result screen.
*
* The displayed text, CSS class, and image are adjusted according to the
* currently selected game theme.
  */
function printDrawPage() {
  screenText.innerHTML = "It's a";
  winner.innerText = "DRAW";
  winner.classList.add("winner-screen_player--draw");

  if (winnerScreenTheme === "vibes") {
    winnerImage.src =
      "public/img/theme-img/code-vibes/draw-code-vibes-theme.png";
  } else if (winnerScreenTheme === "gaming") {
    winnerImage.src = "public/img/theme-img/game/draw_games_theme.png";
  } else if (winnerScreenTheme === "project") {
    winnerImage.src =
      "public/img/theme-img/da-projects/draw-projects-theme.png";
  }
}

/**

* Displays the Orange Player winning screen.
*
* The winner text, CSS class, and corresponding theme image are updated
* according to the selected game theme.
  */
function printOrangePage() {
  screenText.innerHTML = "The winner is";
  winner.innerText = "Orange Player";
  winner.classList.add("winner-screen_player--orange");

  if (winnerScreenTheme === "vibes") {
    winnerImage.src =
      "public/img/theme-img/code-vibes/player-win-orange-code-vibes.png";
  } else if (winnerScreenTheme === "gaming") {
    winnerImage.src = "public/img/theme-img/game/player-booth-games-theme.png";
  } else if (winnerScreenTheme === "project") {
    winnerImage.src =
      "public/img/theme-img/da-projects/win-player-orange-project-theme.png";
  }
}

/**

* Displays the Blue Player winning screen.
*
* The winner text, CSS class, and corresponding theme image are updated
* according to the selected game theme.
  */
function printBluePage() {
  screenText.innerHTML = "The winner is";
  winner.innerText = "Blue Player";
  winner.classList.add("winner-screen_player--blue");

  if (winnerScreenTheme === "vibes") {
    winnerImage.src =
      "public/img/theme-img/code-vibes/player-win-blue-code-vibes.png";
  } else if (winnerScreenTheme === "gaming") {
    winnerImage.src = "public/img/theme-img/game/player-booth-games-theme.png";
  } else if (winnerScreenTheme === "project") {
    winnerImage.src =
      "public/img/theme-img/da-projects/win-player-blue-project-theme.png";
  }
}
