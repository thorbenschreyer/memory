import drawCodeVibes from "./assets/image/theme-img/code-vibes/draw-code-vibes-theme.png";
import drawGaming from "./assets/image/theme-img/game/draw_games_theme.png";
import drawProjects from "./assets/image/theme-img/da-projects/draw-projects-theme.png";


import orangeWinCodeVibes from "./assets/image/theme-img/code-vibes/player-win-orange-code-vibes.png";
import orangeWinGaming from "./assets/image/theme-img/game/player-booth-games-theme.png";
import orangeWinProjects from "./assets/image/theme-img/da-projects/win-player-orange-project-theme.png";

import blueWinCodeVibes from "./assets/image/theme-img/code-vibes/player-win-blue-code-vibes.png";
import blueWinGaming from "./assets/image/theme-img/game/player-booth-games-theme.png";
import blueWinProjects from "./assets/image/theme-img/da-projects/win-player-blue-project-theme.png";

import {showStartPage} from "./main"

export function initWinnerPage() {
  let winningPlayer: string;
  let winnerScreenTheme: string;

  const winner = document.getElementById("winning-player")!;
  const winnerImage = document.getElementById(
    "winning-player-image",
  ) as HTMLImageElement;
  const screenText = document.getElementById("winner-screen_text")!;
  const homeButton = document.getElementById("homebutton")!;

  /**
   * Loads the saved game settings and winner information from localStorage
   * when the page has finished loading.
   */

  const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");
  const winnerData = JSON.parse(localStorage.getItem("winningValue") ?? "{}");

  document.body.dataset.theme = settings.theme;
  winnerScreenTheme = settings.theme;
  winningPlayer = winnerData.winner;

  showWinningplayer();

  homeButton.addEventListener('click', () => {
    showStartPage();
  })

  /**
   * Determines which result screen should be displayed.
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
   */
  function printDrawPage() {
    screenText.innerHTML = "It's a";
    winner.innerText = "DRAW";
    winner.classList.add("winner-screen_player--draw");

    if (winnerScreenTheme === "vibes") {
      winnerImage.src = drawCodeVibes;
    } else if (winnerScreenTheme === "gaming") {
      winnerImage.src = drawGaming;
    } else if (winnerScreenTheme === "project") {
      winnerImage.src = drawProjects;
    }
  }

  /**
   * Displays the Orange Player winning screen.
   */
  function printOrangePage() {
    screenText.innerHTML = "The winner is";
    winner.innerText = "Orange Player";
    winner.classList.add("winner-screen_player--orange");

    if (winnerScreenTheme === "vibes") {
      winnerImage.src = orangeWinCodeVibes;
    } else if (winnerScreenTheme === "gaming") {
      winnerImage.src = orangeWinGaming;
    } else if (winnerScreenTheme === "project") {
      winnerImage.src = orangeWinProjects;
    }
  }

  /**
   * Displays the Blue Player winning screen.
   */
  function printBluePage() {
    screenText.innerHTML = "The winner is";
    winner.innerText = "Blue Player";
    winner.classList.add("winner-screen_player--blue");

    if (winnerScreenTheme === "vibes") {
      winnerImage.src = blueWinCodeVibes;
    } else if (winnerScreenTheme === "gaming") {
      winnerImage.src = blueWinGaming;
    } else if (winnerScreenTheme === "project") {
      winnerImage.src = blueWinProjects;
    }
  }
}
