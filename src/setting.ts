const themeRadios = document.querySelectorAll<HTMLInputElement>('input[name="theme"]',);
const playerRadios = document.querySelectorAll<HTMLInputElement>('input[name="player"]');
const sizeRadios = document.querySelectorAll<HTMLInputElement>('input[name="size"]');
const themeDetails = document.getElementById("gaming-theme")!;
const playerDetails = document.getElementById("starting-player")!;
const numberOfCardsDetails = document.getElementById("card-size")!;
const startButton = document.getElementById("start-button");
const errorMassage = document.getElementById("error-massage")!;
let theme: string;
let player: string;
let numberOfCards: number;

themeRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    theme = radio.value;
    updatetheme();
  });
});

playerRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    player = radio.value;
    updatetPlayer();
  });
});

sizeRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    numberOfCards = Number(radio.value);
    updatetNumberofCards();
  });
});

function updatetheme() {
  if (theme === "vibes") {
    themeDetails.innerText = "Code vibes theme";
  } else if (theme === "gaming") {
    themeDetails.innerText = "Gaming theme";
  } else if (theme === "project") {
    themeDetails.innerText = "DA Projects theme";
  }
  checkStartValues();
}

function updatetPlayer() {
  if (player === "blue") {
    playerDetails.innerText = "Blue player";
  } else if (player === "orange") {
    playerDetails.innerText = "Orange player";
  }
  checkStartValues();
}

function updatetNumberofCards() {
  if (numberOfCards === 16) {
    numberOfCardsDetails.innerText = "16 cards";
  } else if (numberOfCards === 24) {
    numberOfCardsDetails.innerText = "24 cards";
  } else if (numberOfCards === 36) {
    numberOfCardsDetails.innerText = "36 cards";
  }
  checkStartValues();
}

function checkStartValues() {
  if (
    (theme === "vibes" || theme === "gaming" || theme === "project") &&
    (player === "blue" || player === "orange") &&
    (numberOfCards == 16 || numberOfCards == 24 || numberOfCards == 36)
  ) {
    startButton?.classList.remove("isDisabled");
    errorMassage.innerText = "";
  } else {
    startButton?.classList.add("isDisabled");
  }
}
