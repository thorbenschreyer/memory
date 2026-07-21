import confettiImage from "../assets/image/theme-img/code-vibes/winning-scree-confetti-code-vibes-theme.png";

export function winnerPage() {
  return `
    <div class="gamefield-page winner-screen-position">
      <img
        class="confetti"
        src="${confettiImage}"
        alt=""
      >

      <div class="winner-screen">
        <span id="winner-screen_text" class="winner-screen_text">
          The winner is
        </span>

        <span id="winning-player" class="winner-screen_player">
          Orange Player
        </span>

        <img
          class="winner-screen_img"
          id="winning-player-image"
          src=""
          alt=""
        >

        <a href="./index.html" class="winner-screen__button">
          <span>HOME</span>
        </a>
      </div>
    </div>
  `;
}