//check console log
console.log('ok js');

//recupero elementi dal DOM
const selectElement = document.getElementById('select');
const buttonElement = document.getElementById('button');
const deleteElement = document.getElementById('delete');
const containerElement = document.querySelector('.container');

//creo una funzione che generi delle celle aventi una classe e del contenuto
function createcell(className , cellText){
    const cell = document.createElement('div')
    cell.classList.add(className);
    cell.innerText = cellText;
    return cell;
}

//metto in ascolto il bottone
buttonElement.addEventListener('click' , function(){

    //creo delle variabili d'appoggio
    const row = 10;
    const cols = 10;
    let total = row * cols;
    let gameSelect = 'easy';

    // al click svuoto il container
    containerElement.innerHTML = '';

    //recupero valore select
    let userChoice = parseInt(selectElement.value);

    //controllo il valore della select e modifico i parametri in base al valoro
    if(userChoice === 2){

        total = (row * cols) - 19;
        gameSelect = 'medium';

    } else if (userChoice === 3){

        total = (row * cols) - 51;
        gameSelect = 'hard';

    }
    
    //creo un ciclo
    for(let i = 1; i <= total;  i++){

        //genero le celle 
        const cell = createcell(gameSelect , i);
      
        //metto in ascolto le celle
        cell.addEventListener('click' , () => {

            //al click aggiungo la classe ed effettuo un controllo
            cell.classList.add('b-gblue');
            console.log(i);
        });

        //stampo gli elementi in pagina
        containerElement.appendChild(cell);

    }
});






