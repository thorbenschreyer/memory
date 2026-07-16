const themeRadios = document.querySelectorAll<HTMLInputElement>(
  'input[name="theme"]',
);
const themeHover = document.querySelectorAll<HTMLLabelElement>(".theme-label");
const playerRadios = document.querySelectorAll<HTMLInputElement>(
  'input[name="player"]',
);
const sizeRadios =
  document.querySelectorAll<HTMLInputElement>('input[name="size"]');
const themeDetails = document.getElementById("gaming-theme")!;
const playerDetails = document.getElementById("starting-player")!;
const numberOfCardsDetails = document.getElementById("card-size")!;
const startButton = document.getElementById("start-button");
const errorMassage = document.getElementById("error-massage")!;
const themeImage = document.getElementById("theme-image") as HTMLImageElement;
let usedThemeImage:string = "public/img/theme-it-logos.png";
let theme: string;
let player: string;
let numberOfCards: number;

themeRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    theme = radio.value;
    updatetheme();
  });
});

themeHover.forEach((element) => {
  element?.addEventListener("mouseenter", () => {
    const radioValueHover = element.querySelector<HTMLInputElement>('input[name="theme"]',);
    if (!radioValueHover) return;
    let hoveredElement = radioValueHover.value;

    if (hoveredElement === "vibes") {
        themeImage.src = "public/img/theme-it-logos.png";
    } else if (hoveredElement === "gaming" ) {
        themeImage.src = "public/img/theme-gameing.png";
    } else if (hoveredElement === "project") {
        themeImage.src = "public/img/theme-da-projects.png";
    } 

    console.log();
  });

  element.addEventListener("mouseleave", () => {
    themeImage.src = usedThemeImage;
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


startButton?.addEventListener('click', ()=> {
    const settings = {
        theme, 
        player,
        numberOfCards
    }

    localStorage.setItem("settings", JSON.stringify(settings));
});







function updatetheme() {
  if (theme === "vibes") {
    themeDetails.innerText = "Code vibes theme";
    usedThemeImage = "public/img/theme-it-logos.png";
    themeImage.src = usedThemeImage;
  } else if (theme === "gaming") {
    themeDetails.innerText = "Gaming theme";
    usedThemeImage = "public/img/theme-gameing.png";
    themeImage.src = usedThemeImage;
  } else if (theme === "project") {
    themeDetails.innerText = "DA Projects theme";
    usedThemeImage = "public/img/theme-da-projects.png";
    themeImage.src = usedThemeImage;
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
