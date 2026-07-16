let themeSetting: string;
let playerSetting: string;
let numberOfCardsSetting: number;

document.addEventListener("DOMContentLoaded", () => {
  const settings = JSON.parse(localStorage.getItem("settings") ?? "{}");
   themeSetting = settings.theme;
   playerSetting = settings.player
   numberOfCardsSetting = settings.numberOfCards

   console.log(themeSetting);
console.log(playerSetting);
console.log(numberOfCardsSetting);

});


