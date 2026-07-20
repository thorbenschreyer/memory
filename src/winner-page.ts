let winningPlayer: string;

document.addEventListener("DOMContentLoaded", () => {
  const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");
  const winner = JSON.parse(localStorage.getItem("winningValue") ?? "{}");
  document.body.dataset.theme = settings.theme;
  winningPlayer = winner.winner
  console.log(winningPlayer);
});
