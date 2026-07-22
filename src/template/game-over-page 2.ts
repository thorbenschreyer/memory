export function gameOverPage() {
  return `
    <div class="gamefield-page game-over-page">
    <div class="game-over-content">
      <p class="game-over-header">GAME OVER</p>

      <div class="score-section">
        <p class="score-section_header">Final score</p>
        <div class="score-section_overview">
          <div class="header-menu__score--player">
            <div class="score-board__img score-board__img--blue"></div>
            <span class="score-section_header score-section_player--blue"
              >Blue </span
            ><span
              id="score-player-blue"
              class="score-section_player--blue score-section_header"
              >6</span
            >
          </div>
          <div class="header-menu__score--player">
            <div class="score-board__img score-board__img--orange"></div>
            <span class="score-section_player--orange score-section_header"
              >Orange </span
            ><span
              id="score-player-orange"
              class="score-section_player--orange score-section_header"
              >4</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
}
