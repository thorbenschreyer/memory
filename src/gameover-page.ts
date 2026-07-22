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
  const winningValue = JSON.parse(localStorage.getItem("winningValue") ?? "{}");
  console.log("Aus LocalStorage gelesen:", winningValue);
  console.log("Blue Score:", winningValue.scoreBlue);
  console.log("Orange Score:", winningValue.scoreOrange);
  let orange = String(winningValue.scoreOrange);
  let blue = String(winningValue.scoreBlue); 
  
  scorePlayerBlue.innerText = blue;
  scorePlayerOrange.innerText = orange;
}
