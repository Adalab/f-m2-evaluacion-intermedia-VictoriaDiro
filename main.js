'use strict';

// input type numer
// constante número aleatorio con el valor dado (100)
// function para game
// variable parseInt para número de usuario para saber con nque dato estoy trabajando
// innerHTML estaba bien 

const counter = document.querySelector('.counter');
const inputNumber = document.querySelector('.input__number');
let testButton = document.querySelector('.test__button');
const check = document.querySelector('.check');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * 100);
  }
  console.log('> ' + getRandomNumber(100));


function game() {

    const userNumber = parseInt(inputNumber.value);

    if (userNumber === getRandomNumber(100)) {
    console.log('¡HAS GANADO CAMPEONA!')
    } else if (userNumber > getRandomNumber(100)) {
    console.log('Demasiado alto')
    }  else {
    console.log('Demasiado bajo')
    }
    
    let i = 0;
    i = i+1;
    counter.innerHTML = i; 
}

testButton.addEventListener('click', game);

testButton.addEventListener('click', counter);



  