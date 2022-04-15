const CALCULATOR_DEFAULT = "0";

let valToChange = document.querySelector(".value");

const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if(isButton){
        buttonPressed = event.target.innerHTML;
        screenCheck(buttonPressed);
    }
})

function screenCheck(valPressed){
    if(valToChange.innerHTML === CALCULATOR_DEFAULT){
        valToChange.innerHTML = valPressed;
    }
    else if(valPressed === "C"){
        valToChange.innerHTML = CALCULATOR_DEFAULT;
    }
    else if(valPressed === "&lt;-"){
        valToChange.innerHTML = valToChange.innerHTML.slice(0, -1); 
    }
    else{
        valToChange.innerHTML += valPressed;
    }
}


