Gamefield:
// Margin zwischen den Karten noch mit BEM anpassen so dass bei entsprehender kartenzahl kleinere Abstände gelten
// Hier die Vorbereitung dazu, noch implementieren -> &--margin-more-than-16cards 
// Hintergrundbilder implementieren 
// Wenn 2 gleich noch umranden!
// DOM Verschiebung beim Counter margin im header größer machen! 


Weitere Screens:

let drawScore = Die Menge wenn unentschieden 
drawScore = wird immer erhöht wenn einer 


if (ScorePlayerOne === ScorePlayerTwo && drawScore/2 === drawCondition) {
    playerDraw()
} else if (playerOne > 4/6/9) {
    playerOrangeWin()
}  else if (playerOne > 4/6/9) {
    playerBlueWin()
}

playerOrangeWin() {
    //  Entsprechender Screen darstellen 
    console.log("Player Orange hat gewonnen")
}

playerBlueWin() {
    //  Entsprechender Screen darstellen 
    console.log("Player Blau hat gewonnen")
}

playerDraw() {
    //  Entsprechender Screen darstellen 
    console.log("Unentschieden")
}


