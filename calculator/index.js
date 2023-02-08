function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function operate(operator, x, y){
    return operator(x , y);
}
let display_value = 0;

const add_button = document.getElementById("add")

const display = document.getElementById("display")

const number_btns = document.querySelectorAll('num_btn')


number_btns.forEach((button) => {

})



const button_1 = document.querySelector('#btn1');
button_1.addEventListener("click", numberfunc)

function alertfunc(){
    alert("PLEASE WORK :pleading:")
}

function numberfunc(x){
    console.log("number pressed")
    display.innerHTML = `<h1>${display_value + 1}</h1>`;
    display_value = display_value + 1;
    console.log(display_value)
}





