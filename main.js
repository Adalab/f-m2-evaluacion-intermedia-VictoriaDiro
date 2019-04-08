'use strict';

const inputNumber = document.querySelector('.input__number');
let testButton = document.querySelector('.test__button');
const check = document.querySelector('.check');
const acc = document.querySelector('.acc')

// let i = 0 // inicializador para contadir
// i = i+1
// counter.innerHTML = i // dentro de condicional cuando no es igual

function getRandomNumber(max) {
    return Math.ceil(Math.random() * 100);
  }
  console.log('> ' + getRandomNumber(100));

function game() {
    const userNumber = parseInt(inputNumber.value)
    if (userNumber > getRandomNumber) {
        check.innerHTML = 'Demasiado alto';
    } else if (userNumber < getRandomNumber) {
        check.innerHTML = 'Demasiado bajo';
    } else {
        check.innerHTML = '¡HAS GANADO CAMPEONA!';
    }
}


// function countClick() {
//     testButton += 1;
//     countClick = acc.innerHTML;
// }

testButton.addEventListener('click', game);

testButton.addEventListener('click',testButton);



  