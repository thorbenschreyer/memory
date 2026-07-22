// ############### Other ###############
import "./styles/style.scss";
import "./styles/components/_button.scss";
import "./styles/layout/_flex.scss";
import "./styles/base/_all-pages.scss";

// ############### Pages ###############
import "./styles/pages/_welcome-page.scss";
import "./styles/pages/_settings-page.scss";
import "./styles/pages/_gamefield-page.scss";
import "./styles/pages/_game-over-page.scss";
import "./styles/pages/_winner-screen.scss";

// ############### Themes ###############
import "./styles/themes/_code-vibes-theme.scss";
import "./styles/themes/_gaming-theme.scss";
import "./styles/themes/_da-projects.scss";

// ############### Pages ###############
import { startPage } from "./template/start-page";
import { settingsPage } from "./template/settings-page";
import { initSettings } from "./setting";
import { gamePage } from "./template/game-page";
import { initGame } from "./game";
import { saveSettings } from "./setting";
import { gameOverPage } from "./template/game-over-page";
import { winnerPage } from "./template/winner-screen";
import { initGameOverPage } from "./gameover-page";
import { initWinnerPage } from "./winner-page";

const app = document.getElementById("app")!;

app.innerHTML = startPage();
const playButton = document.getElementById("play-button")!;
playButton.addEventListener("click", () => {
  app.innerHTML = settingsPage();
  initSettings();
});

export function showGamePage() {
  saveSettings();
  app.innerHTML = gamePage();

  initGame();
}

export function showGameOverPage() {
  app.innerHTML = gameOverPage();
  initGameOverPage();
  setTimeout(() => {
    app.innerHTML = winnerPage();
    initWinnerPage();
  }, 8000);
}

export function showStartPage() {
  app.innerHTML = startPage();

  const playButton = document.getElementById("play-button")!;

  playButton.addEventListener("click", () => {
    app.innerHTML = settingsPage();
    initSettings();
  });
}
