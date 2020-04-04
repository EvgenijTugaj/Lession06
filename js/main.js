'use strict';

function getRandom100(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let randomBot = function(){
    let get100 = getRandom100(100); 
    console.log('get100: ', get100);
    let userRequest = prompt('Угадай число от 1 до 100');
    let mainRequest = function(x){ 
        if(x === null){
            return;
        }else if(!isNumber(x)){
            x = prompt('Введи число!');
            mainRequest(x);
        }else if(get100 < x){
            x = prompt('Загаданное число меньше');
            mainRequest(x);
        } else if(get100 > x){
            x = prompt('Загаданное число больше');
            mainRequest(x);
        }
    };
    mainRequest(userRequest);
};

randomBot();