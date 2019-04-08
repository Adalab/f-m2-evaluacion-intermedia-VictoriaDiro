'use strict';

// generar un número al alzar entre 1 y 100
// en h2 se imprime si el número del input es mayor o menor, o si lo ha conseguido
// el contador de la derecha cuenta el número de intentos
// cuando acierte el juego se termina
// al pulsar el botón test acceder a input y mostrar en cosola


const inputNumber = document.querySelector('.input__number');
const testButton = document.querySelector('.test__button');
const check = document.querySelector('.check');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * 100);
  }
  console.log('> ' + getRandomNumber(100));

function checkYourNumber() {
    if(inputNumber.value === getRandomNumber) {
        check.innerHTML = '¡HAS GANADO CAMPEONA!';
    } else if(inputNumber < getRandomNumber) {
        check.innerHTML = 'Demasiado alto';
    } else {
        check.innerHTML = 'Demasiado bajo';
    }
}

testButton.addEventListener('click', checkYourNumber);



  