let scoreOrange: number;
let scoreBlue: number;

/**
 * Initializes the game-over page.
 *
 * Loads the final scores of both players from localStorage
 * and displays them on the game-over screen.
 *
 * @returns {void}
 */
export function initGameOverPage(): void {
  const scorePlayerBlue = document.getElementById("score-player-blue")!;
  const scorePlayerOrange = document.getElementById("score-player-orange")!;
  const winningValue = JSON.parse(localStorage.getItem("winningValue") ?? "{}");

  scoreBlue = winningValue.scoreBlue;
  scoreOrange = winningValue.scoreOrange;
  scorePlayerBlue.innerText = String(scoreBlue);
  scorePlayerOrange.innerText = String(scoreOrange);
}
