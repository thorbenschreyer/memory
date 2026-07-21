import {showWinnerPage} from "./main"
let scoreOrange: number;
let scoreBlue: number;

export function initGameOverPage() {
  const scorePlayerBlue = document.getElementById("score-player-blue")!;
  const scorePlayerOrange = document.getElementById("score-player-orange")!;

  /**

* Loads the final scores and selected theme from localStorage when the page
* has finished loading.
*
* The scores are displayed on the game-over screen. After a short delay,
* the user is automatically redirected to the winner screen.
  */
  document.addEventListener("DOMContentLoaded", () => {
    const winningValue = JSON.parse(
      localStorage.getItem("winningValue") ?? "{}",
    );
    const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");

    scoreOrange = winningValue.scoreOrange;
    scoreBlue = winningValue.scoreBlue;

    document.body.dataset.theme = settings.theme;

    scorePlayerBlue.innerText = String(scoreBlue);
    scorePlayerOrange.innerText = String(scoreOrange);

    /**

* Redirects the user to the winner screen after three seconds.
  */
    setTimeout(() => {
      showWinnerPage();
    }, 3000);
  });
}
