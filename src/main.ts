/* -------------------------------------------------------------------------- */
/*                                  Styles                                    */
/* -------------------------------------------------------------------------- */

// Base styles
import "./styles/style.scss";
import "./styles/base/_all-pages.scss";

// Layout
import "./styles/layout/_flex.scss";

// Components
import "./styles/components/_button.scss";

// Pages
import "./styles/pages/_welcome-page.scss";
import "./styles/pages/_settings-page.scss";
import "./styles/pages/_gamefield-page.scss";
import "./styles/pages/_game-over-page.scss";
import "./styles/pages/_winner-screen.scss";

// Themes
import "./styles/themes/_code-vibes-theme.scss";
import "./styles/themes/_gaming-theme.scss";
import "./styles/themes/_da-projects.scss";

/* -------------------------------------------------------------------------- */
/*                              Page Templates                                */
/* -------------------------------------------------------------------------- */

import { startPage } from "./template/start-page";
import { settingsPage } from "./template/settings-page";
import { gamePage } from "./template/game-page";
import { gameOverPage } from "./template/game-over-page";
import { winnerPage } from "./template/winner-screen";

/* -------------------------------------------------------------------------- */
/*                          Page Initialization                               */
/* -------------------------------------------------------------------------- */

import { initSettings, saveSettings } from "./setting";
import { initGame } from "./game";
import { initGameOverPage } from "./gameover-page";
import { initWinnerPage } from "./winner-page";

/* -------------------------------------------------------------------------- */
/*                              Application                                   */
/* -------------------------------------------------------------------------- */

const app = document.getElementById("app")!;

/**
 * Displays the start page and initializes its navigation.
 *
 * The start page is the first page displayed when the application loads.
 * The play button navigates the user to the settings page.
 *
 * @returns {void}
 */
export function showStartPage(): void {
  app.innerHTML = startPage();
  const playButton = document.getElementById("play-button")!;
  playButton.addEventListener("click", showSettingsPage);
}

/**
 * Displays the settings page and initializes the settings logic.
 *
 * @returns {void}
 */
export function showSettingsPage(): void {
  app.innerHTML = settingsPage();
  initSettings();
}

/**
 * Displays the game page and initializes the game.
 *
 * The current game settings are saved before the game page is displayed.
 *
 * @returns {void}
 */
export function showGamePage(): void {
  saveSettings();
  app.innerHTML = gamePage();
  initGame();
}

/**

* Displays the game-over page and initializes the final score display.
*
* After a short delay, the winner screen is displayed automatically.
*
* @returns {void}
*/
export function showGameOverPage(): void {
  app.innerHTML = gameOverPage();
  initGameOverPage();
  setTimeout(() => {
    app.innerHTML = winnerPage();
    initWinnerPage();
  }, 3000);
}

/* -------------------------------------------------------------------------- */
/*                           Application Start                                */
/* -------------------------------------------------------------------------- */

/**
 * Initializes the application by displaying the start page.
 */
showStartPage();
