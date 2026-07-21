let winningPlayer: string;
let winnerScreenTheme: string;
const winner = document.getElementById("winning-player")!;
const winnerImage = document.getElementById("winning-player-image") as HTMLImageElement;
const screenText = document.getElementById("winner-screen_text")!;

document.addEventListener("DOMContentLoaded", () => {
  const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");
  const winner = JSON.parse(localStorage.getItem("winningValue") ?? "{}");
  document.body.dataset.theme = settings.theme;
  winnerScreenTheme = settings.theme;
  winningPlayer = winner.winner
  showWinningplayer()
});

function showWinningplayer() {
    if (winningPlayer === "Draw") {
        printDrawPage()
    } else if (winningPlayer === "Orange") { 
        printOrangePage()
    } else if (winningPlayer === "Blue") {
        printBluePage()
    }
}

function printDrawPage() {
    screenText.innerHTML = "It's a"
    winner.innerText = "DRAW";
    winner.classList.add("winner-screen_player--draw")
    if (winnerScreenTheme === "vibes") {
        winnerImage.src = "public/img/theme-img/code-vibes/draw-code-vibes-theme.png";
    } else if (winnerScreenTheme === "gaming") {
        winnerImage.src = "public/img/theme-img/game/draw_games_theme.png";
    } else if (winnerScreenTheme === "project") {
        winnerImage.src = "public/img/theme-img/da-projects/draw-projects-theme.png";
    }
}

function printOrangePage() {
    screenText.innerHTML = "The winner is"
    winner.innerText = "Orange Player";
    winner.classList.add("winner-screen_player--orange")
    if (winnerScreenTheme === "vibes") {
        winnerImage.src = "public/img/theme-img/code-vibes/player-win-orange-code-vibes.png";
    } else if (winnerScreenTheme === "gaming") {
        winnerImage.src = "public/img/theme-img/game/player-booth-games-theme.png";
    } else if (winnerScreenTheme === "project") {
        winnerImage.src = "public/img/theme-img/da-projects/win-player-orange-project-theme.png";
    }
}

function printBluePage() {
    screenText.innerHTML = "The winner is"
    winner.innerText = "Blue Player";
    winner.classList.add("winner-screen_player--blue")
    if (winnerScreenTheme === "vibes") {
        winnerImage.src = "public/img/theme-img/code-vibes/player-win-blue-code-vibes.png";
    } else if (winnerScreenTheme === "gaming") {
        winnerImage.src = "public/img/theme-img/game/player-booth-games-theme.png";
    } else if (winnerScreenTheme === "project") {
        winnerImage.src = "public/img/theme-img/da-projects/win-player-blue-project-theme.png";
    }
}