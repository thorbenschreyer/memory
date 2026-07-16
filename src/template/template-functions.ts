export function printCard():string {
    return `
    <div class="card">
        <div class="card__img"></div>
    </div>
    `
}

export function cardFieldColumn (index:number):string {
    return `
          <div id="card-field-column-${index}" class="card-field-column">
 
      </div>
    `
}