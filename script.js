'use strict';

let userInput = document.getElementById('userInput');
let expression = '';

function press(btn) {
    expression += btn;
    userInput.value = expression;
}

function erase() {
    userInput.value = '';
}

function equal(){
    userInput.value = eval(expression); 
}

