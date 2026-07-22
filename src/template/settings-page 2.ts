import settingsHeaderLine from "../assets/image/settings-line_header.png";
import settingsPalette from "../assets/image/settings_palette.png";
import settingsChess from "../assets/image/settings_chess.png";
import settingsCards from "../assets/image/setting_cards.png";
import settingsLine from "../assets/image/settings_line.png";
import themeImageDefault from "../assets/image/theme-it-logos.png";
import settingsMenuLine from "../assets/image/settings-disabled-menu-line.png";
import settingsStartButton from "../assets/image/settings-start-button.png";

export function settingsPage() {
  return `
    <div class="settings">
      <div class="flex-collum">

        <div class="settings--content__header">
          <h1>Settings</h1>
          <img src="${settingsHeaderLine}" alt="">
        </div>

        <div class="settings--content">

          <div class="settings-detail">

            <div class="flex-collumn">
              <div class="settings-detail__header">
                <img src="${settingsPalette}" alt="">
                <span>Game themes</span>
              </div>

              <label class="settings-detail__radiobutton theme-label">
                <input type="radio" name="theme" value="vibes">
                Code vibes theme
                <img class="settings-detail__radiobutton-image" src="${settingsLine}" alt="">
              </label>

              <label class="settings-detail__radiobutton theme-label">
                <input type="radio" name="theme" value="gaming">
                Gaming theme
                <img class="settings-detail__radiobutton-image" src="${settingsLine}" alt="">
              </label>

              <label class="settings-detail__radiobutton theme-label">
                <input type="radio" name="theme" value="project">
                DA Projects theme
                <img class="settings-detail__radiobutton-image" src="${settingsLine}" alt="">
              </label>
            </div>

            <div class="flex-collumn">
              <div class="settings-detail__header">
                <img src="${settingsChess}" alt="">
                <span>Choose player</span>
              </div>

              <label class="settings-detail__radiobutton">
                <input type="radio" name="player" value="blue">
                Blue
                <img class="settings-detail__radiobutton-image" src="${settingsLine}" alt="">
              </label>

              <label class="settings-detail__radiobutton">
                <input type="radio" name="player" value="orange">
                Orange
                <img class="settings-detail__radiobutton-image" src="${settingsLine}" alt="">
              </label>
            </div>

            <div class="flex-collumn">
              <div class="settings-detail__header">
                <img src="${settingsCards}" alt="">
                <span>Board size</span>
              </div>

              <label class="settings-detail__radiobutton">
                <input type="radio" name="size" value="16">
                16 cards
                <img class="settings-detail__radiobutton-image" src="${settingsLine}" alt="">
              </label>

              <label class="settings-detail__radiobutton">
                <input type="radio" name="size" value="24">
                24 cards
                <img class="settings-detail__radiobutton-image" src="${settingsLine}" alt="">
              </label>

              <label class="settings-detail__radiobutton">
                <input type="radio" name="size" value="36">
                36 cards
                <img class="settings-detail__radiobutton-image" src="${settingsLine}" alt="">
              </label>
            </div>

          </div>

          <div class="show-settings--area">

            <img id="theme-image" src="${themeImageDefault}" alt="">

            <div class="show-settings__details">
              <span id="gaming-theme">Game theme</span>

              <img src="${settingsMenuLine}" alt="">

              <span id="starting-player">Player</span>

              <img src="${settingsMenuLine}" alt="">

              <span id="card-size">Board size</span>

              <button
                id="start-button"
                class="button button--primary button--primary__settings isDisabled">

                <img src="${settingsStartButton}" alt="">
                <span>Start</span>

              </button>
            </div>

            <p class="error-massage" id="error-massage">
              Choose a theme, a player, and the board size to get started.
            </p>

          </div>

        </div>

      </div>
    </div>
  `;
}