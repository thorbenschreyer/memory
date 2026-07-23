export function gameOverPage() {
  return `
    <section class="gamefield-page game-over-page">
    <div class="game-over-content">
      <h1 class="game-over-header">GAME OVER</h1>

      <div class="score-section">
        <h2 class="score-section_header">Final score</h2>
        <section class="score-section_overview">
          <article class="header-menu__score--player">
            <div class="score-board__img score-board__img--blue"></div>
            <span class="score-section_header score-section_player--blue"
              >Blue </span
            ><span
              id="score-player-blue"
              class="score-section_player--blue score-section_header"
              >6</span
            >
          </article>
          <article class="header-menu__score--player">
            <div class="score-board__img score-board__img--orange"></div>
            <span class="score-section_player--orange score-section_header"
              >Orange </span
            ><span
              id="score-player-orange"
              class="score-section_player--orange score-section_header"
              >4</span
            >
          </article>
        </section>
      </div>
    </div>
  </section>
    `;
}
