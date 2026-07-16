let playerSetting: string;
let numberOfCardsSetting: number;

const gamefieldTheme = document.getElementById('data-theme-gamefield')

document.addEventListener("DOMContentLoaded", () => {
  const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");
   playerSetting = settings.player
   numberOfCardsSetting = settings.numberOfCards
   document.body.dataset.theme = settings.theme;
});


