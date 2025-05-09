//--- Cambiar Texto de Párrafos ---
// Seleccionar todos los elementos p de la página y cambiar su texto al hacer clic en un botón.
const changeTextButton = document.getElementById('changeText');
const paragraphs = document.querySelectorAll('p');

changeTextButton.addEventListener('click', () => {
    paragraphs.forEach((paragraph, index) => {
        paragraph.textContent = `Texto cambiado ${index + 1}`;
    });
});