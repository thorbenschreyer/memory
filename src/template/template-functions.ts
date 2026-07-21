import cardBackgroundCodeVibes from "../assets/image/theme-img/code-vibes/card-background-code-vibes.png";

export function printCard(margin: string, imgPath: string): string {
  return `
    <div class="card ${margin}">
      <div class="card__inner">
        <div class="card__face card__face--back">
          <img class="class__face--border" src="${imgPath}" alt="">
        </div>

        <div class="card__face card__face--front">
          <img 
            class="card__face--img" 
            src="${cardBackgroundCodeVibes}" 
            alt=""
          >
        </div>
      </div>
    </div>
  `;
}

export function cardFieldColumn(index: number): string {
  return `
          <div id="card-field-column-${index}" class="card-field-column">
 
      </div>
    `;
}
