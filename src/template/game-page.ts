export function gamePage() {
  return ` <main class="gamefield-page"> <header class="header-menu">
    <section
      class="score-board"
      aria-label="Game score"
    >
      <article class="score-board__player">
        <span
          class="score-board__img score-board__img--orange"
          aria-hidden="true"
        ></span>

        <span
          class="score-board__player--add-color score-board__player--orange"
        >
          Orange
        </span>

        <span
          id="score-player-orange"
          class="score-board__player--orange score-board__player--width"
        >
          0
        </span>
      </article>

      <article class="score-board__player">
        <span
          class="score-board__img score-board__img--blue"
          aria-hidden="true"
        ></span>

        <span
          class="score-board__player--add-color score-board__player--blue"
        >
          Blue
        </span>

        <span
          id="score-player-blue"
          class="score-board__player--blue score-board__player--width"
        >
          0
        </span>
      </article>
    </section>

    <section
      class="current-player"
      aria-label="Current player"
    >
      <span class="current-player__text">
        Current player:
      </span>

      <span
        id="current-player-color"
        class="current-player__icon current-player__icon--blue"
        aria-hidden="true"
      >
        <span
          id="current-player-img"
          class="current-player__img current-player__img--orange"
        ></span>
      </span>
    </section>

    <button
      id="exit-game-button"
      class="exit-button"
      type="button"
    >
      <span
        class="exit-button__img"
        aria-hidden="true"
      ></span>

      <span
        class="exit-button__img--hover"
        aria-hidden="true"
      ></span>

      <span class="exit-button__text">
        Exit game
      </span>
    </button>

  </header>

  <section
    id="game-field"
    class="card-field"
    aria-label="Memory game field"
  ></section>
</main>

<dialog
  id="exit-dialog"
  class="exit-game"
  aria-labelledby="exit-dialog-text"
>
  <form
    method="dialog"
    class="exit-game--content"
  >
    <p
      id="exit-dialog-text"
      class="exit-game--content__text"
    >
      Are you sure you want<br />
      to quit the game?
    </p>

    <footer class="exit-game--content__buttons">
      <button
        id="back-to-game-button"
        class="dialog-button dialog-button--stay"
        value="cancel"
      >
        No, back to game
      </button>

      <button
        id="quit-game-button"
        class="dialog-button dialog-button--exit"
        value="confirm"
      >
        Yes, quit game
      </button>
    </footer>
  </form>
</dialog>
`;
}
