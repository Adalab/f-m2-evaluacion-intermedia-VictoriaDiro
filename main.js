'use strict';



const inputNumber = document.querySelector('.input__number');
let testButton = document.querySelector('.test__button');
const check = document.querySelector('.check');
const acc = document.querySelector('.acc')

function getRandomNumber(max) {
    return Math.ceil(Math.random() * 100);
  }
  console.log('> ' + getRandomNumber(100));

function checkYourNumber() {
    if (inputNumber.value === getRandomNumber) {
        check.innerText = '¡HAS GANADO CAMPEONA!';
    } else if (inputNumber.value < getRandomNumber) {
        check.innerText = 'Demasiado bajo';
    } else {
        check.innerText = 'Demasiado alto';
    }
}

function countClick() {
    testButton += 1;
    acc.innerHTML = countClick;
}

testButton.addEventListener('click', checkYourNumber);

testButton.addEventListener('click',testButton);



  