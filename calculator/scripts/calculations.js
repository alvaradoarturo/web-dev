const CALCULATOR_DEFAULT = 0;

let valToChange = document.querySelector(".value");

const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if(isButton){
        valToChange.innerHTML = event.target.innerHTML;
    }
})





console.log(valToChange.innerHTML);
