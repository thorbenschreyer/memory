let scoreOrange : number;
let scoreBlue: number;


document.addEventListener("DOMContentLoaded", () => {
  const winningValue = JSON.parse(localStorage.getItem("winningValue") ?? "{}");
  scoreOrange = winningValue.scoreOrange;
  scoreBlue = winningValue.scoreBlue;

  console.log(scoreBlue + " " + scoreOrange);
});

