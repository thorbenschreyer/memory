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

let usedThemeImage: string = "public/img/theme-it-logos.png";
let theme: string;
let player: string;
let numberOfCards: number;

/* -------------------------------------------------------------------------- */
/*                              Eventlisteners                                */
/* -------------------------------------------------------------------------- */

/**
 * Determines which theme should be set when the radio buttons are changed and displays this in the gaming bar
 */
themeRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    theme = radio.value;
    updatetheme();
  });
});

/**
 * Updates the theme preview when hovering over a theme label.
 *
 * When hovering over a label, the value of the corresponding radio button
 * is read, and the corresponding theme image is displayed in the preview.
 *
 * When hovering over the label ends, the most recently selected theme image
 * is displayed again. If no theme has been selected yet, the default image remains active.
 */
themeHover.forEach((element) => {
  element?.addEventListener("mouseenter", () => {
    const radioValueHover = element.querySelector<HTMLInputElement>(
      'input[name="theme"]',
    );
    if (!radioValueHover) return;
    let hoveredElement = radioValueHover.value;

    if (hoveredElement === "vibes") {
      themeImage.src = "public/img/theme-it-logos.png";
    } else if (hoveredElement === "gaming") {
      themeImage.src = "public/img/theme-gameing.png";
    } else if (hoveredElement === "project") {
      themeImage.src = "public/img/theme-da-projects.png";
    }
  });

  element.addEventListener("mouseleave", () => {
    themeImage.src = usedThemeImage;
  });
});

/**
 * Records which player must be selected when the radio buttons are changed and displays this in the gaming bar
 */
playerRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    player = radio.value;
    updatetPlayer();
  });
});

/**
 * Detects which size needs to be set when the radio buttons are changed and displays this in the gaming bar
 */
sizeRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    numberOfCards = Number(radio.value);
    updatetNumberofCards();
  });
});

/**
 * Save the settings for the game in local storage
 */
startButton?.addEventListener("click", () => {
  const settings = {
    theme,
    player,
    numberOfCards,
  };
  localStorage.setItem("settings", JSON.stringify(settings));
});

/* -------------------------------------------------------------------------- */
/*                              Functions                                     */
/* -------------------------------------------------------------------------- */

/**
 * Set and save the current theme Image
 * Set the current theme
 * The saved image is used by the hover updating eventlistener themeHover
 * Also check the startvalues for enable/disable the start button
 */
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

/**
 * Set the current player
 * Also check the startvalues for enable/disable the start button
 */
function updatetPlayer() {
  if (player === "blue") {
    playerDetails.innerText = "Blue player";
  } else if (player === "orange") {
    playerDetails.innerText = "Orange player";
  }
  checkStartValues();
}

/**
 * Set the current needed Number of cards
 * Also check the startvalues for enable/disable the start button
 */
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

/**
 * Check the values, that they not empty and have the correct values
 */
function checkStartValues() {
  if (theme && player && numberOfCards) {
    startButton?.classList.remove("isDisabled");
    errorMassage.innerText = "";
  } else {
    startButton?.classList.add("isDisabled");
  }
}
