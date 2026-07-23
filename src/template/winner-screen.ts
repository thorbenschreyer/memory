import confettiImage from "../assets/image/theme-img/code-vibes/winning-scree-confetti-code-vibes-theme.png";

export function winnerPage() {
  return `
    <section class="gamefield-page winner-screen-position">
      <img
        class="confetti"
        src="${confettiImage}"
        alt=""
      >

      <div class="winner-screen">
        <h1 id="winner-screen_text" class="winner-screen_text">
          The winner is
        </h1>

        <span id="winning-player" class="winner-screen_player">
          Orange Player
        </span>

        <img
          class="winner-screen_img"
          id="winning-player-image"
          src=""
          alt=""
        >

        <button id="homebutton" class="winner-screen__button">
          HOME
        </button>
      </div>
    </section>
  `;
}