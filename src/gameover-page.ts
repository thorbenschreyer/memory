let scoreOrange: number;
let scoreBlue: number;

const scorePlayerBlue = document.getElementById("score-player-blue")!;
const scorePlayerOrange = document.getElementById("score-player-orange")!;

document.addEventListener("DOMContentLoaded", () => {
  const winningValue = JSON.parse(localStorage.getItem("winningValue") ?? "{}");
  const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");
  scoreOrange = winningValue.scoreOrange;
  scoreBlue = winningValue.scoreBlue;
  document.body.dataset.theme = settings.theme;

  scorePlayerBlue.innerText = String(scoreBlue);
  scorePlayerOrange.innerText = String(scoreOrange);
  
  setTimeout(() => {
    //window.location.href = "winner_screen.html";
  }, 3000);
});
