import drawCodeVibes from "./assets/image/theme-img/code-vibes/draw-code-vibes-theme.png";
import drawGaming from "./assets/image/theme-img/game/draw_games_theme.png";
import drawProjects from "./assets/image/theme-img/da-projects/draw-projects-theme.png";

import orangeWinCodeVibes from "./assets/image/theme-img/code-vibes/player-win-orange-code-vibes.png";
import orangeWinGaming from "./assets/image/theme-img/game/player-booth-games-theme.png";
import orangeWinProjects from "./assets/image/theme-img/da-projects/win-player-orange-project-theme.png";

import blueWinCodeVibes from "./assets/image/theme-img/code-vibes/player-win-blue-code-vibes.png";
import blueWinGaming from "./assets/image/theme-img/game/player-booth-games-theme.png";
import blueWinProjects from "./assets/image/theme-img/da-projects/win-player-blue-project-theme.png";

import { showSettingsPage } from "./main";

type WinnerScreenElements = {
  winner: HTMLElement;
  winnerImage: HTMLImageElement;
  screenText: HTMLElement;
};

/**
 * Initializes the winner screen.
 *
 * Loads the saved game settings and winner data from localStorage,
 * applies the selected theme, displays the appropriate winner screen,
 * and adds the event listener for returning to the settings page.
 *
 * @returns {void}
 */
export function initWinnerPage(): void {
  const winner = document.getElementById("winning-player")!;
  const winnerImage = document.getElementById("winning-player-image",) as HTMLImageElement;
  const screenText = document.getElementById("winner-screen_text")!;
  const homeButton = document.getElementById("homebutton")!;
  const settings = JSON.parse(localStorage.getItem("settings") ?? "{}",);
  const winnerData = JSON.parse(localStorage.getItem("winningValue") ?? "{}",);
  document.body.dataset.theme = settings.theme;

  showWinningplayer(
    winnerData.winner,
    settings.theme,
    {
      winner,
      winnerImage,
      screenText,
    },
  );

  homeButton.addEventListener("click", () => {
    showSettingsPage();
  });
}

/**
 * Determines which result screen should be displayed
 * based on the winning player.
 *
 * @param {string} winningPlayer - The player who won the game.
 * @param {string} winnerScreenTheme - The theme selected for the game.
 * @param {WinnerScreenElements} elements - The DOM elements used to display the result.
 *
 * @returns {void}
 */
export function showWinningplayer(
  winningPlayer: string,
  winnerScreenTheme: string,
  elements: WinnerScreenElements,
): void {
  if (winningPlayer === "Draw") {
    printDrawPage(winnerScreenTheme, elements);
  } else if (winningPlayer === "Orange") {
    printOrangePage(winnerScreenTheme, elements);
  } else if (winningPlayer === "Blue") {
    printBluePage(winnerScreenTheme, elements);
  }
}

/**
 * Displays the draw result screen.
 *
 * @param {string} winnerScreenTheme - The theme selected for the game.
 * @param {WinnerScreenElements} elements - The DOM elements used to display the result.
 *
 * @returns {void}
 */
function printDrawPage(
  winnerScreenTheme: string,
  elements: WinnerScreenElements,
): void {
  const { winner, winnerImage, screenText } = elements;

  screenText.innerText = "It's a";
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
 *
 * @param {string} winnerScreenTheme - The theme selected for the game.
 * @param {WinnerScreenElements} elements - The DOM elements used to display the result.
 *
 * @returns {void}
 */
function printOrangePage(
  winnerScreenTheme: string,
  elements: WinnerScreenElements,
): void {
  const { winner, winnerImage, screenText } = elements;

  screenText.innerText = "The winner is";
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
 *
 * @param {string} winnerScreenTheme - The theme selected for the game.
 * @param {WinnerScreenElements} elements - The DOM elements used to display the result.
 *
 * @returns {void}
 */
function printBluePage(
  winnerScreenTheme: string,
  elements: WinnerScreenElements,
): void {
  const { winner, winnerImage, screenText } = elements;

  screenText.innerText = "The winner is";
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