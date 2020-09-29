let msTensNode = document.querySelector('#msTens');
let msHundredsNode = document.querySelector('#msHundreds');
let secondOnesNode = document.querySelector('#secondOnes');
let secondTensNode = document.querySelector('#secondTens');
let digits = document.querySelectorAll('.digit');
let button = document.querySelector('.button');
let container = document.querySelector('.container');

let msTens = 0;
let msHundreds = 0;
let secondOnes = 0;
let secondTens = 0;

button.addEventListener('click', startTimer); 

let counterGo;

function CountUp() {
    if(msTens < 9) {
        msTens++;
    } else {
        msTens = 0;
        if(msHundreds < 9) {
            msHundreds++;
        } else {
            msHundreds = 0;
            if(secondOnes < 9) {
                secondOnes++;
            } else {
                secondOnes = 0;
                if(secondTens < 1) {
                    secondTens++;
                    digits.forEach((digit) => {
                        digit.classList.add('redDigit');
                    });
                    button.classList.add('redButton');
                    container.classList.add('redButton');
                    clearInterval(counterGo);
                } 
            }
        }
    }
    msTensNode.innerText = msTens;
    msHundredsNode.innerText = msHundreds;
    secondOnesNode.innerText = secondOnes;
    secondTensNode.innerText = secondTens;
}

function startTimer() {
    counterGo = setInterval(CountUp, 10); 
}


