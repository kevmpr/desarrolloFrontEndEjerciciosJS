//--- Contador con Botones ---
// Crear un botón para incrementar y otro para decrementar un contador 
// mostrado en un elemento div. Actualizar el texto del div al hacer clic.
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const counterDisplay = document.getElementById('counter');
let counter = 0;

increaseButton.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
});

decreaseButton.addEventListener('click', () => {
    counter--;
    counterDisplay.textContent = counter;
});

