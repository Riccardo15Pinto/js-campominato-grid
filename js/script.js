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