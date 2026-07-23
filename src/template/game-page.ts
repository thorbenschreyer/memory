export function gamePage() {
  return `
  <main class="gamefield-page">
    <header class="header-menu">
      <!-- Score board -->
      <div class="score-board">
        <div class="score-board__player">
          <div class="score-board__img score-board__img--orange"></div>

          <span
            class="score-board__player--add-color score-board__player--orange"
            >Orange</span
          ><span
            id="score-player-orange"
            class="score-board__player--orange score-board__player--width"
            >0</span
          >
        </div>
        <div class="score-board__player">
          <div class="score-board__img score-board__img--blue"></div>

          <span class="score-board__player--add-color score-board__player--blue"
            >Blue </span
          ><span
            id="score-player-blue"
            class="score-board__player--blue score-board__player--width"
            >0</span
          >
        </div>
      </div>
      <!-- Current player -->
      <div class="current-player">
        <span class="current-player__text">Current player: </span>
        <div
          id="current-player-color"
          class="current-player__icon current-player__icon--blue"
        >
          <div
            id="current-player-img"
            class="current-player__img current-player__img--orange"
          ></div>
        </div>
      </div>

      <!-- Exit button -->
      <div id="exit-game-button" class="exit-button">
        <div class="exit-button__img"></div>

        <div class="exit-button__img--hover"></div>

        <span class="exit-button__text">Exit game</span>
      </div>
    </header>

    <!-- Gamefield -->
    <section id="game-field" class="card-field"></section>
  </main>

  <!-- Exit Dialog -->
  <dialog id="exit-dialog" class="exit-game">
    <div class="exit-game--content">
      <p class="exit-game--content__text">
        Are you sure you want <br />
        to quit the game?
      </p>
      <div class="exit-game--content__buttons">
        <button
          id="back-to-game-button"
          class="dialog-button dialog-button--stay"
        >
          No, back to game
        </button>
        <button id="quit-game-button" class="dialog-button dialog-button--exit">
          Yes, quit game
        </button>
      </div>
    </div>
  </dialog>
    `;
}
