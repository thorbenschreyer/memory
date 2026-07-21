import controllerButton from "../assets/image/controller_button.png";
import arrowRight from "../assets/image/arrow_right.png";
import arrowHover from "../assets/image/arrow-hover.png";
import controllerWelcome from "../assets/image/controller_welcomepage.png";

export function startPage() {
  return `
    <div class="welcome-page flex">
      <div class="weclome-page-text">
        <span>It's play time.</span>
        <p>Ready to play?</p>

        <button class="button button--primary" id="play-button">
          <img class="button__controller" src="${controllerButton}" alt="Controller Icon" />
          <span>Play</span>
          <img class="button__arrow" src="${arrowRight}" alt="Arrow Right" />
          <img class="button__arrow-hover" src="${arrowHover}" alt="Arrow Right Hover" />
        </button>
      </div>
    </div>

    <img src="${controllerWelcome}" alt="Controller Icon" />
  `;
}