const btn = document.querySelector("[data-form-btn]");

const creatTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}


//Arrow function o funciones anonimas
//Listener
btn.addEventListener("click", creatTask);