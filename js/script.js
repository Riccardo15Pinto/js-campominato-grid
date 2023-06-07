//check console log
console.log('ok js');

//recupero elementi dal DOM
const selectElement = document.getElementById('select');
const buttonElement = document.getElementById('button');
const containerElement = document.querySelector('.container');

//creo una funzione che generi delle celle
function createcell(a){
    const cell = document.createElement('div')
    cell.className = a;
    return cell;
}

const row = 10;
const cols = 10;
let total = row * cols;
console.log(total);
let gameSelect = 'easy';
let cell;

buttonElement.addEventListener('click' , function(){
    //recupero valore select
    let userChoice = parseInt(selectElement.value);
    console.log(userChoice);
    
    if(userChoice === 2){
        total = (row * cols) - 19;
        gameSelect = 'medium';
    } else if (userChoice === 3){
        total = (row * cols) - 51;
        gameSelect = 'hard';
    }
    
    for(let i = 1; i <= total; i++){
        cell = createcell(gameSelect);
        cell.append([i]);
        containerElement.appendChild(cell);

    }
    
    
});