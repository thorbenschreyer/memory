const themeRadios = document.querySelectorAll<HTMLInputElement>('input[name="theme"]');
const playerRadios = document.querySelectorAll<HTMLInputElement>('input[name="player"]');
const sizeRadios = document.querySelectorAll<HTMLInputElement>('input[name="size"]');
const themeDetails = document.getElementById('gaming-theme')!;
let theme: string;
let player: string;
let numberOfCards: number;

themeRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
        theme = radio.value        
        updatetheme()
        
    });
});

playerRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
        player = radio.value
        updatetPlayer();
    });
});

sizeRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
        numberOfCards = Number(radio.value);
        updatetNumberofCards()
    });
});

function updatetheme() {
    if (theme === 'vibes') {
        themeDetails.innerText = "Code vibes theme"
        console.log("Code vibes theme");
    } else if (theme === 'gaming') {
        themeDetails.innerText = "Gaming theme"
    } else if (theme === 'project') {
        themeDetails.innerText = "DA Projects theme"
    }
}

function updatetPlayer() {
    if (player === 'blue') {
        console.log("Blue player");
    } else if (player === 'orange') {
        console.log("Orange player");
    } 
}

function updatetNumberofCards() {
    if (numberOfCards === 16) {
        console.log("16 cards");
    } else if (numberOfCards === 24) {
        console.log("24 cards");
    } else if (numberOfCards === 36) { 
        console.log("36 cards");
    }
}