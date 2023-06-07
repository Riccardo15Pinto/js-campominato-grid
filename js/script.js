//check console log
console.log('ok js');

//recupero elementi dal DOM
const selectElement = document.getElementById('select');
const buttonElement = document.getElementById('button');
const deleteElement = document.getElementById('delete');
const containerElement = document.querySelector('.container');

//creo una funzione che generi delle celle
function createcell(a , b){
    const cell = document.createElement('div')
    cell.classList.add(a);
    cell.innerText = b;
    return cell;
}

const row = 10;
const cols = 10;
let total = row * cols;
console.log(total);
let gameSelect = 'easy';
let cells;



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
        cells = createcell(gameSelect , i);
        cells.addEventListener('click' , () => {
            cells.classList.add('b-gblue');
            console.log(cells[i]);
        });
        containerElement.appendChild(cells);

    }
    

    
});






