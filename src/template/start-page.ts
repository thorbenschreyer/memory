import controllerButton from "../assets/image/controller_button.svg";
import arrowRight from "../assets/image/arrow_right.png";
import arrowHover from "../assets/image/arrow-hover.png";
import controllerWelcome from "../assets/image/controller_welcomepage.png";

export function startPage() {
  return `
    <section class="welcome-page flex">
      <div class="weclome-page-text">
        <p>It's play time.</p>
        <h1>Ready to play?</h1>

        <button class="button button--primary" id="play-button">
          <img class="button__controller" src="${controllerButton}" alt="Controller Icon" />
          <span>Play</span>
          <img class="button__arrow" src="${arrowRight}" alt="Arrow Right" />
          <img class="button__arrow-hover" src="${arrowHover}" alt="Arrow Right Hover" />
        </button>
      </div>
    </section>

    <img class="welcome-page-img" src="${controllerWelcome}" alt="Controller Icon" />
  `;
}