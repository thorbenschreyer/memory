export function printCard(margin:string):string {
    return `
      <div class="card ${margin}">
          <div class="card__inner">
              <div class="card__face card__face--back"><img src="./public/img/theme-img/code-vibes/memory-cards/git-memory-card.png" alt=""></div>
              <div class="card__face card__face"><img class="card__face--img" src="public/img/theme-img/code-vibes/card-background-code-vibes.png" alt=""></div>
          </div>
      </div>
    `
}

export function cardFieldColumn (index:number):string {
    return `
          <div id="card-field-column-${index}" class="card-field-column">
 
      </div>
    `
}