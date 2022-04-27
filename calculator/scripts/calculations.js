let runningTotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector('.value');

function buttonClick(value) {
    if(isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
}

function flushOperation(intBuffer) {
    if(previousOperator === '+'){
        runningTotal += intBuffer;
    } else if(previousOperator === '-') {
        runningTotal -= intBuffer;
    } else if(previousOperator === 'X') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}

function handleMath(value) {
    if(buffer === '0'){
        return;
    }

    const intBuffer = parseInt(buffer);
    if(runningTotal === 0){
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = value;

    buffer = "0";
}

function handleNumber(value) {
    if(buffer === "0") {
        buffer = value; 
    } else {
        buffer += value;
    }
}

function handleSymbol(value) {
    switch(value) {
        case "C":
            buffer = '0';
            break;
        case "<-":
            console.log("Enters backspace");
            if(buffer.length === 1 ){
                buffer = '0';
            }
            else {
                buffer = buffer.slice(0, -1);
            }
            break;
        case "=":
            if(buffer === '0' || previousOperator === null){
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = +runningTotal;
            runningTotal = 0;
            break;
        case '+':
        case '-':
        case 'X':
        case '/':
            handleMath(value);
            break;
        default:
          // code block
        console.log("Will rerender"); 
      }
      rerender();
}

function rerender() {
    screen.innerText = buffer;
}

function init() {
    document.querySelector(".calc-buttons").addEventListener("click", function(event) {
      buttonClick(event.target.innerText);
    });
}
  
init();
